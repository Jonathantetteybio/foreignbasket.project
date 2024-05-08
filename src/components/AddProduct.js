import axios from '../axios';
import styled from 'styled-components';
import { useState } from 'react';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');

  const addProduct = (e) => {
    e.preventDefault();

    axios
      .post('/products/add', {
        title,
        imageUrl,
        price,
      })
      .then((response) => {
        setTitle('');
        setImageUrl('');
        setPrice('');
        console.log(response);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <Logo>
        <img src="./foreignbasket_logo.png" />
      </Logo>
      <FormContainer onSubmit={addProduct}>
        <h3>Add Product</h3>
        <InputContainer>
          <p>Title</p>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </InputContainer>
        <InputContainer>
          <p>ImageUrl</p>
          <input
            type="text"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </InputContainer>
        <Button>Add Product</Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;

  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 55%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
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

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: #fc6a03;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default AddProduct;
