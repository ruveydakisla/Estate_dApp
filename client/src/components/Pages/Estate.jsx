/* EstateList.jsx */

import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import './Css/Estate.css';
import { useEth } from '../../contexts/EthContext';

const EstateList = () => {
  const [estates, setEstates] = useState([]);
  const [selectedEstate, setSelectedEstate] = useState(null);

  const { state: { contract, accounts } } = useEth();

  const convertObjects = (array) => {
    const estatesArray = [];
    for (var i = 0; i < array.length; i++) {
      const estate = {
        propertyName: array[i][0],
        propertyOwner: array[i][1],
        propertyAddress: array[i][2],
        propertyImage: array[i][3],
        propertyType: array[i][4],
      };
      estatesArray.push(estate);
    }
    return estatesArray;
  };

  useEffect(() => {
    const getEstates = async () => {
      try {
        const datas = await contract.methods.getProperties().call({ from: accounts[0] });
        const estatesArray = convertObjects(datas);
        setEstates(estatesArray);
        console.log(estatesArray);
      } catch (error) {
        console.error('Error fetching estates:', error);
      }
    };

    getEstates();
  }, [accounts, contract.methods]);

  const openEstateModal = (estate) => {
    setSelectedEstate(estate);
  };

  const closeEstateModal = () => {
    setSelectedEstate(null);
  };

  return (
    <Container className="estate-list-container">
      {estates.map((estate, index) => (
        <div
          className="estate-container"
          key={index}
          onClick={() => openEstateModal(estate)}
        >
          <Image src={estate.propertyImage} fluid className="img-fluid" />
          <div className="estate-info">
            <h1>{estate.propertyName}</h1>
            <p>
              Sahibi:
              <br /> {estate.propertyOwner}
            </p>
            <p>
              Adresi:
              <br /> {estate.propertyAddress}
            </p>
          </div>
        </div>
      ))}

      {selectedEstate && (
         <div className="estate-modal" onClick={closeEstateModal}>
         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
           <h1>{selectedEstate.propertyName}</h1>
           <p>
             Sahibi:
             <br /> {selectedEstate.propertyOwner}
           </p>
           <p>
             Adresi: <br /> {selectedEstate.propertyAddress}
           </p>
           <Image src={selectedEstate.propertyImage} fluid className="img-fluid" />
         </div>
       </div>
     )}
   </Container>
 );
};

export default EstateList;
