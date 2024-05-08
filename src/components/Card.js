import { useDispatch } from 'react-redux';
import { addToBasket } from '../store';

import styled from 'styled-components';

function Card({ id, image, price, title }) {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToBasket({ id, image, price, title }));
  };
  return (
    <Container>
      <Image>
        <img src={image} alt="image of product" />
      </Image>
      <Description>
        <h5>{title}</h5>
        <p>&euro; {price}</p>
        <button onClick={handleAddToBasket}>Add to Cart</button>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex: 0.3;

  img {
    width: 180px;
    height: 200px;
    background-color: #fff;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-weight: 600;
    margin: 0;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #fc6a03;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #fda172;
    }
  }
`;

export default Card;
