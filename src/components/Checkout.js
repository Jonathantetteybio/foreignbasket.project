import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBasketTotal,
  removeProduct,
  selectBasket,
  selectTotal,
} from '../store';
import Navbar from './Navbar';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();

  const basket = useSelector((state) => selectBasket(state));
  console.log(basket);

  const dispatch = useDispatch();

  dispatch(getBasketTotal(basket));

  const total = useSelector((state) => selectTotal(state));

  const handleProductRemoval = (product) => {
    dispatch(removeProduct(product.id));
  };
  return (
    <Container>
      <Navbar />
      <Main>
        <ShoppingCart>
          <h2>ShoppingCart</h2>

          {basket?.map((product) => (
            <Product key={product.id}>
              <Image>
                <img src={product.image} alt=""></img>
              </Image>
              <Description>
                <h4>{product.title}</h4>
                <p>&euro; {product.price}</p>
                <button onClick={() => handleProductRemoval(product)}>
                  Remove
                </button>
              </Description>
            </Product>
          ))}
        </ShoppingCart>
        <Subtotal>
          <CurrencyFormat
            renderText={(total) => (
              <>
                <p>
                  Subtotal ({basket.length} items) : <strong> {total}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value={total}
            displayType="text"
            thousandSeparator={true}
            prefix="&euro;"
          />

          <button onClick={() => navigate('/address')}>
            Proceed to Checkout
          </button>
        </Subtotal>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  margin: auto;
  background-color: #c1fec1;
`;
const Main = styled.div`
  display: flex;
  padding: 15px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ShoppingCart = styled.div`
  padding: 15px;
  background-color: #fff;
  flex: 0.7;

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
  }

  @media only screen and (max-width: 1200px) {
    flex: none;
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
    margin-right: 15px;
  }

  p {
    font-size: 20px;
  }

  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #fc6a03;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 600;

    border-radius: 8px;

    &:hover {
      background-color: #fda172;
    }
  }
`;
const Product = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
`;
const Image = styled.div`
  flex: 0.3;
  img {
    width: 100%;
  }
`;

const Description = styled.div`
  flex: 0.7;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 600;
    margin-top: 10px;
  }
  button {
    background-color: transparent;
    color: #fc6a03;
    border: none;
    outline: none;
    margin-top: 10px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default Checkout;
