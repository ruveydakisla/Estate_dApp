/* EstateList.jsx */

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
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
        tenant: 'John Doe',
        property: '123 Main St',
        startDate: '01/01/2023',
        endDate: '01/01/2024',
        earlyTerminationRequested: false,
        earlyTerminationApproved: false,
      },
      {
        name: 'Villa 2',
        owner: 'Ayşe Fatma',
        address: 'Izmir, Turkey',
        image:
          'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tenant: 'Jane Doe',
        property: '456 Oak St',
        startDate: '02/01/2023',
        endDate: '02/01/2024',
        earlyTerminationRequested: true,
        earlyTerminationApproved: false,
      },
      {
        name: 'Şato 3',
        owner: 'Ruveyda Kışla',
        address: 'Isparta, Turkey',
        image:
          'https://images.pexels.com/photos/36355/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
        tenant: 'Jack Smith',
        property: '789 Pine St',
        startDate: '03/01/2023',
        endDate: '03/01/2024',
        earlyTerminationRequested: false,
        earlyTerminationApproved: true,
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
            <Row>
              <Col md={6}>
                <Image src={selectedEstate.image} fluid className="img-fluid" />
              </Col>
              <Col md={6} className="estate-info">
                <h1>{selectedEstate.name}</h1>
                <p>
                  Sahibi:
                  {selectedEstate.owner}
                </p>
                <p>
                  Adresi:
                  {selectedEstate.address}
                </p>
                {/* Yeni Eklenen Bilgiler */}
                <p>
                  Adres: {selectedEstate.address}
                  <br />
                  Tenant: {selectedEstate.tenant}
                  <br />
                  Property: {selectedEstate.property}
                  <br />
                  Start Date: {selectedEstate.startDate}
                  <br />
                  End Date: {selectedEstate.endDate}
                  <br />
                  Early Termination Requested:{' '}
                  {selectedEstate.earlyTerminationRequested ? 'Yes' : 'No'}
                  <br />
                  Early Termination Approved:{' '}
                  {selectedEstate.earlyTerminationApproved ? 'Yes' : 'No'}
                </p>
                <Button variant="primary" size="lg" block>
                  Sözleşmeyi onayla
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </Container>
  );
};

export default EstateList;
