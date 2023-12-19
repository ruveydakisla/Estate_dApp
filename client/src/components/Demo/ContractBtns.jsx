import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [namee,setName]=useState("");
  const [userType,setUserType]=useState();
  const [pName,setPName]=useState("");
  const [address,setAddress]=useState("");

  const [description,setDesc]=useState("");
  
  // const read = async () => {
  //   const value = await contract.methods.read().call({ from: accounts[0] });
  //   setValue(value);
  // };

  

  const register=async()=>{
    await contract.methods.register(namee,userType).send({from:accounts[0]});
  }

  const readUser=async()=>{
    const user=await contract.methods.users("0xDD7ACCBd7946Ce8020CACC408ccDf852796Dc780").call({from:accounts[0]})
    console.log(user);
  }

  const addProperty=async()=>{
    const account=accounts[0];
      await contract.methods.addProperty(pName,address).send({from:account});
  }

  const  submitComplaint=async()=>{
    const account=accounts[0];
      await contract.methods.submitComplaint(description).send({from:account});
  }
  // const write = async e => {
  //   if (e.target.tagName === "INPUT") {
  //     return;
  //   }
  //   if (inputValue === "") {
  //     alert("Please enter a value to write.");
  //     return;
  //   }
  //   const newValue = parseInt(inputValue);
  //   await contract.methods.write(newValue).send({ from: accounts[0] });
  // };

  const login=async()=>{
     await contract.methods.login().send({from:accounts[0]});
  }

  return (
    <div className="btns">

      <div >
       <input
          type="text"
          placeholder="uint"
          value={namee}
          onChange={(t)=>setName(t.target.value)}
        />
      </div>
      <div  >
        <input
          type="text"
          placeholder="uint"
          value={userType}
          onChange={(t)=>setUserType(t.target.value)}
        />
      </div>
      <button onClick={register}>register</button>

      <button onClick={login}>
        login
      </button>
      <button onClick={readUser}>
        read user
      </button>
      <br />
      <h3>Add Property</h3>
      <div  >
        <input
          type="text"
          placeholder="Property name"
          value={pName}
          onChange={(t)=>setPName(t.target.value)}
        />
      </div>
      <br />
      <div  >
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(t)=>setAddress(t.target.value)}
        />
      </div>
      <br />
      <button onClick={addProperty}type="submit">
        add property
      </button>

      <br />
      <hr />
      <h3>SUBMIT COMPLAINT</h3>
      <div  >
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(t)=>setDesc(t.target.value)}
        />
      </div>
      <br />
      <button onClick={submitComplaint}type="submit">
        add property
      </button>

    </div>
  );
}

export default ContractBtns;
