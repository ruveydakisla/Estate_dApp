import { useEffect, useState } from 'react';
import './Css/MyContract.css';
import { useEth } from '../../contexts/EthContext';

const MyContract = () => {
  const {
    state: { contract, accounts },
  } = useEth();

  const [leases, setLeases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await contract.methods.getLeases().call({ from: accounts[0] });
        const leasesArray = convertObjects(datas);
        setLeases(leasesArray);
      } catch (error) {
        console.error('Lease bilgileri alınırken bir hata oluştu:', error);
      }
    };

    fetchData();
  }, [accounts, contract.methods]);

  useEffect(() => {
    console.log(leases);
  }, [leases]);

  const convertObjects = (array) => {
    const leaseArray = [];
    for (var i = 0; i < array.length; i++) {
      const lease = {
        tenantAddress: array[i][0],
        ownerAddress: array[i][1],
        startDate: array[i][2],
        endDate: array[i][3],
        earleyTerminationRequest: array[i][4],
      };
      leaseArray.push(lease);
    }
    return leaseArray;
  };

  return (
    <div className="my-contract-container">
      <div className="contract-box">
        <h2>My Contract Details</h2>
        <div className="contract-info">
          <div className="text-info">
            {leases.length > 0 ? (
              <>
                <p>
                  <strong>Adres Kiracı:</strong> {leases[0].tenantAddress}
                </p>
                <p>
                  <strong>Adres Mülk:</strong> 0x0987654321098765432109876543210987654321
                </p>
                <p>
                  <strong>Başlangıç Tarihi:</strong> {leases[0].startDate}
                </p>
                <p>
                  <strong>Bitiş Tarihi:</strong> {leases[0].endDate}
                </p>
                <p>
                  <strong>Erken İptal Talebi:</strong> {leases[0].earleyTerminationRequest ? 'Evet' : 'Hayır'}
                </p>
                <p>
                  <strong>Erken İptal Onaylandı:</strong> Hayır
                </p>
              </>
            ) : (
              <p>Lease bilgileri yükleniyor...</p>
            )}
          </div>
          <div className="image-container">
            <img
              src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Kontrat Görseli"
              className="contract-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContract;
