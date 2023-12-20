/* EstateList.jsx */

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Css/Estate.css';

const EstateList = () => {
  const [estates, setEstates] = useState([]);
  const [selectedEstate, setSelectedEstate] = useState(null);

  useEffect(() => {
    setEstates([
      {
        name: 'Villa 1',
        owner: 'Ali Veli',
        address: 'Turgutlu, Manisa',
        image:
          'https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        name: 'Villa 2',
        owner: 'Ayşe Fatma',
        address: 'Izmir, Turkey',
        image:
          'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        name: 'Şato 3',
        owner: 'Ruveyda Kışla',
        address: 'Isparta, Turkey',
        image:
          'https://images.pexels.com/photos/36355/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ]);
  }, []);

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
          <Image src={estate.image} fluid className="img-fluid" />
          <div className="estate-info">
            <h1>{estate.name}</h1>
            <p>
              Sahibi:
              <br /> {estate.owner}
            </p>
            <p>
              Adresi:
              <br /> {estate.address}
            </p>
          </div>
        </div>
      ))}

      {selectedEstate && (
        <div className="estate-modal" onClick={closeEstateModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h1>{selectedEstate.name}</h1>
            <p>
              Sahibi:
              <br /> {selectedEstate.owner}
            </p>
            <p>
              Adresi: <br /> {selectedEstate.address}
            </p>
            <Image src={selectedEstate.image} fluid className="img-fluid" />
          </div>
        </div>
      )}
    </Container>
  );
};

export default EstateList;
