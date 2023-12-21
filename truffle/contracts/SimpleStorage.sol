// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract SimpleStorage{

    enum UserType {tenant, landholder}
    //////////////////////////
    struct User{
       string name;
       address hashAdres;
       UserType userType;
       bool isRegistered;
       bool isLogin;
    }
    //////////////////////////
    struct Estate{
        string name;
        address owner;
        string Address;
        string imageAddress;
        string propertyType;
    }
    /////////////////////////
     struct Lease {
        address tenant;
        address property;
        uint256 startDate;
        uint256 endDate;
        bool earlyTerminationRequested;
        bool earlyTerminationApproved;
    }
    ////////////////////////
    struct Complaint {
        address user;
        string description;
        uint256 timestamp;
    }
    //////////////////////////
    mapping(address => User) public users;
    mapping(address => Estate) public estates;
    Lease[] public leases;
    Complaint[] public complaints;
    Estate[]  public properties;

    ///////////////////////////EVENTS/////////////////////////
    event LeaseCreated(address indexed tenant, address indexed property, uint256 startDate, uint256 endDate);
    event EarlyTerminationRequested(address indexed tenant, address indexed property);
    event EarlyTerminationApproved(address indexed tenant, address indexed property);
    event ComplaintSubmitted(address indexed user, string description);
    event UserLoggedIn(address indexed user);
    event LeaseRequest(address indexed tenant, address indexed property, uint256 startDate, uint256 endDate);
    event LeaseApproved(address indexed tenant, address indexed property);

    modifier notRegisteredUser() {
        require(!users[msg.sender].isRegistered, "User is already registered");
        _;
    } 

    modifier onlyTenant() {
        require(users[msg.sender].userType == UserType.tenant, "Only tenants can call this function");
        _;
    }
    
    modifier onlyPropertyOwner(address _property) {
        require(estates[_property].owner == msg.sender, "Only  landholder can call this function");
        _;
    }


     


    function login() external {
        users[msg.sender].isLogin=true;
        require(users[msg.sender].isRegistered, "User is not registered");
        emit UserLoggedIn(msg.sender);
    }

      function register(string memory _name, UserType _userType) external notRegisteredUser {
        users[msg.sender] = User({
            isLogin:false,
            name:_name,
            userType: _userType,
            isRegistered: true,
            hashAdres:msg.sender
        });
    }
    function logout() external {
        users[msg.sender].isLogin=false;
        
    }


    function addProperty(string memory _name,string memory _address,string memory _imageAddress,string memory _propertyType) external {
        estates[msg.sender] = Estate({
            name: _name,
            owner: msg.sender,
            Address:_address,
            imageAddress:_imageAddress,
            propertyType:_propertyType
        });
        properties.push(estates[msg.sender]);

    }
    function getProperties() public view returns (Estate[] memory) {
        return properties;
    }

     function getLeases() public view returns (Lease[] memory) {
        return leases;
    }


     function createLease(address _property, uint256 _startDate, uint256 _endDate) external  {
        Lease memory newLease = Lease({
            tenant: msg.sender,
            property: _property,
            startDate: _startDate,
            endDate: _endDate,
            earlyTerminationRequested: false,
            earlyTerminationApproved: false
        });

        leases.push(newLease);
        emit LeaseCreated(msg.sender, _property, _startDate, _endDate);
    }


        function requestEarlyTermination(address _property) external onlyTenant {
        for (uint256 i = 0; i < leases.length; i++) {
            if (leases[i].property == _property && leases[i].tenant == msg.sender) {
                leases[i].earlyTerminationRequested = true;
                emit EarlyTerminationRequested(msg.sender, _property);
                break;
            }
        }
    }

    function approveEarlyTermination(address _tenant, address _property) external onlyPropertyOwner(_property) {
        for (uint256 i = 0; i < leases.length; i++) {
            if (leases[i].property == _property && leases[i].tenant == _tenant && leases[i].earlyTerminationRequested) {
                leases[i].earlyTerminationApproved = true;
                emit EarlyTerminationApproved(_tenant, _property);
                break;
            }
        }
    }
    function submitComplaint(string memory _description) external {
        complaints.push(Complaint({
            user: msg.sender,
            description: _description,
            timestamp: block.timestamp
        }));
        emit ComplaintSubmitted(msg.sender, _description);
    }
    function requestLease(address _property, uint256 _startDate, uint256 _endDate) external {
        require(estates[_property].owner != address(0), "Property not found");
        emit LeaseRequest(msg.sender, _property, _startDate, _endDate);
    }

    function approveLeaseRequest(address _tenant, address _property) external onlyPropertyOwner(_property) {
        for (uint256 i = 0; i < leases.length; i++) {
            if (leases[i].property == _property && leases[i].tenant == _tenant) {
                emit LeaseApproved(_tenant, _property);
                break;
            }
        }
    }
}
