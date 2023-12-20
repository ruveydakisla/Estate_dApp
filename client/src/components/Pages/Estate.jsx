import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'reactstrap';

const Estate = () => {
  const [estate, setEstate] = useState({
    name: 'Villa',
    owner: 'Ali Veli',
    address: 'Turgutlu, Manisa',
    image: 'https://example.com/image.jpg',
  });

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <h1>{estate.name}</h1>
            <p>Sahibi: {estate.owner}</p>
            <p>Adresi: {estate.address}</p>
          </Col>
          <Col md={6}>
            <Image src={estate.image} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Estate;
