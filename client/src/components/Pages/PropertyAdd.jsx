// PropertyAdd.jsx

import React, { useState } from 'react';
import './Css/PropertyAdd.css';

export default function PropertyAdd() {
  const [propertyName, setPropertyName] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [propertyImage, setPropertyImage] = useState('');

  const handlePropertySubmit = (e) => {
    e.preventDefault();
    // Burada form gönderme işlemlerini gerçekleştirebilirsiniz (örneğin, blockchain'e veri gönderme).
    console.log('Gönderilen Mülk Bilgileri:', {
      propertyName,
      propertyAddress,
      propertyImage,
    });
  };

  return (
    <div className="container">
      <div className="PropertyAdd-container">
        <h1>Property Add</h1>
        <form onSubmit={handlePropertySubmit}>
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
          <div className="input-group">
            <label htmlFor="propertyType">Property Type:</label>
            <select id="propertyType" name="propertyType" required>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="office">Office</option>
            </select>
          </div>
          <button type="submit">Add Property</button>
        </form>
      </div>
    </div>
  );
}
