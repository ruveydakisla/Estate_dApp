// MyContract.jsx

import React from 'react';
import './Css/MyContract.css';

const MyContract = () => {
  return (
    <div className="my-contract-container">
      <div className="contract-box">
        <h2>My Contract Details</h2>
        <div className="contract-info">
          <div className="text-info">
            <p>
              <strong>Address Tenant:</strong>{' '}
              0x1234567890123456789012345678901234567890
            </p>
            <p>
              <strong>Address Property:</strong>{' '}
              0x0987654321098765432109876543210987654321
            </p>
            <p>
              <strong>Start Date:</strong> 1642896000{' '}
              {/* Unix timestamp formatında */}
            </p>
            <p>
              <strong>End Date:</strong> 1674432000{' '}
              {/* Unix timestamp formatında */}
            </p>
            <p>
              <strong>Early Termination Requested:</strong> No
            </p>
            <p>
              <strong>Early Termination Approved:</strong> No
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Contract Image"
              className="contract-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContract;
