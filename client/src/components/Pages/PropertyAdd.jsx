// PropertyAdd.jsx

import React, { useState } from 'react';
import './Css/PropertyAdd.css';
import { useEth } from '../../contexts/EthContext';
export default function PropertyAdd() {
  const [propertyName, setPropertyName] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [propertyImage, setPropertyImage] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const {
    state: { contract, accounts },
  } = useEth();

  const addProperty = async () => {
    await contract.methods
      .addProperty(propertyName, propertyAddress, propertyImage,propertyType)
      .send({ from: accounts[0] });
  };

  const getEstates=async()=>{
    const datas=await contract.methods.getProperties().call({from:accounts[0]});
    convertObjects(datas);
    console.log(propertyType);
    
    
  }

  const estates=[];
  const convertObjects=(array)=>{

    for(var i=0;i<array.length;i++){
      const estate={
        propertyName:array[i][0],
        propertyOwner:array[i][1],
        propertyAddress:array[i][2],
        propertyImage:array[i][3],
        propertyType:array[i][4]
        
      };
      estates.push(estate);
    }
   
  }


  return (
    <div className="container">
      <div className="PropertyAdd-container">
        <h1>Property Add</h1>
        
          <div className="input-group">
            <label htmlFor="propertyName">Property Name:</label>
            <input
              type="text"
              id="propertyName"
              name="propertyName"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="propertyAddress">Property Address:</label>
            <input
              type="text"
              id="propertyAddress"
              name="propertyAddress"
              value={propertyAddress}
              onChange={(e) => setPropertyAddress(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="propertyImage">Property Image:</label>
            <input
              type="text"
              id="propertyImage"
              name="propertyImage"
              value={propertyImage}
              onChange={(e) => setPropertyImage(e.target.value)}
              required
            />
          </div>
          <div className="input-group" >
            <label htmlFor="propertyType">Property Type:</label>
            <select onChange={(e)=>setPropertyType(e)} value={propertyType} id="propertyType" name="propertyType" required>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="office">Office</option>
            </select>
          </div>
          <button onClick={addProperty}>Add Property</button>
          <br />
          <br />
          <button onClick={getEstates}>get estates</button>
        <div>
          
        </div>
      </div>
    </div>
  );
}
