/* EstateList.jsx */

import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import './Css/Estate.css';
import { useEth } from '../../contexts/EthContext';
import { Label } from 'reactstrap';

const EstateList = () => {
  const [estates, setEstates] = useState([]);
  const [selectedEstate, setSelectedEstate] = useState(null);
  const [formData, setFormData] = useState({
    tenant: '',
    property: '',
    startDate: '',
    endDate: '',
  });

  const {
    state: { contract, accounts },
  } = useEth();

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
        const datas = await contract.methods
          .getProperties()
          .call({ from: accounts[0] });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async () => {
    try {
      // Burada form verilerini işle ve gerekli adımları at.
      // Örneğin, contract.methods.setLease(formData.property, formData.tenant, formData.startDate, formData.endDate).send({ from: accounts[0] });

      // İşlem başarıyla tamamlandıysa, pencereyi kapat.
      closeEstateModal();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
              <label>Sahibi:</label>
              <br /> {estate.propertyOwner}
            </p>
            <p>
              <label>Adresi:</label>
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
              <label>Sahibi:</label>
              <br /> {selectedEstate.propertyOwner}
            </p>
            <p>
              <label>Adresi:</label> <br /> {selectedEstate.propertyAddress}
            </p>
            <Image
              src={selectedEstate.propertyImage}
              fluid
              className="img-fluid"
            />

            {/* Yeni form özellikleri */}
            <form>
              <h2>Kontrakt Oluştur</h2> {/* Yeni başlık eklendi */}
              <div className="mb-3">
                <label htmlFor="tenant">Kiracı:</label>
                <input
                  type="text"
                  className="form-control"
                  id="tenant"
                  name="tenant"
                  value={formData.tenant}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="property">Mülk:</label>
                <input
                  type="text"
                  className="form-control"
                  id="property"
                  name="property"
                  value={formData.property}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="startDate">Başlangıç Tarihi:</label>
                <input
                  type="text"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="endDate">Bitiş Tarihi:</label>
                <input
                  type="text"
                  className="form-control"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitForm}
              >
                Kontrakt Oluştur {/* Buton metni güncellendi */}
              </button>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
};

export default EstateList;
