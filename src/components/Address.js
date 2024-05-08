import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Navbar from './Navbar';
import { setAdddress } from '../store';
import { useNavigate } from 'react-router-dom';

function Address() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [flat, setFlat] = useState('');
  const [area, setArea] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelivery = (e) => {
    e.preventDefault();
    dispatch(
      setAdddress({
        fullName,
        phone,
        flat,
        area,
        landmark,
        city,
        region,
      })
    );

    navigate('/payment');
  };
  return (
    <Container>
      <Navbar />
      <Main>
        <FormContainer>
          <InputContainer>
            <p>Full Name</p>
            <input
              type="text"
              placeholder="Jane Doe"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </InputContainer>
          <InputContainer>
            <p>Phone Number</p>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </InputContainer>
          <InputContainer>
            <p>Flat, House no. , Building, Company</p>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setFlat(e.target.value)}
              value={flat}
            />
          </InputContainer>
          <InputContainer>
            <p>Area, Colony, Street</p>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setArea(e.target.value)}
              value={area}
            />
          </InputContainer>
          <InputContainer>
            <p>LandMark</p>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
            />
          </InputContainer>
          <InputContainer>
            <p>Town/City</p>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </InputContainer>
          <InputContainer>
            <p>Region</p>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setRegion(e.target.value)}
              value={region}
            />
          </InputContainer>

          <button onClick={handleDelivery}>Deliver to this Address</button>
        </FormContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;

  margin: auto;
  background-color: #c1fec1;
`;
const Main = styled.div`
  padding: 15px;
`;
const FormContainer = styled.div`
  border: 1px solid lightgray;
  width: 55%;
  min-width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  margin: auto;

  button {
    align-self: flex-start;
    height: 33px;
    width: 250px;
    margin-top: 20px;
    background-color: #fc6a03;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;

    &:hover {
      background-color: #fda172;
    }
  }
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;

    &:hover {
      border: 1px solid #fc6a03;
    }
  }
`;

export default Address;
