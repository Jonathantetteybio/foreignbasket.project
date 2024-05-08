import axios from '../axios';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import {
  selectBasket,
  selectAddress,
  selectTotal,
  selectEmail,
} from '../store';

function Payment() {
  const navigate = useNavigate();
  const total = useSelector((state) => selectTotal(state));

  const basket = useSelector((state) => selectBasket(state));

  const address = useSelector((state) => selectAddress(state));

  const email = useSelector((state) => selectEmail(state));

  console.log(email);

  const handleOrder = (e) => {
    e.preventDefault();
    axios
      .post('/orders/add', {
        basket: basket,
        price: total,
        address: address,
        email: email,
      })
      .then(() => {
        navigate('/home');
      })
      .catch((err) => alert(err.message));
  };

  return (
    <Container>
      <Main>
        <ReviewContainer>
          <h2>Review Your Order</h2>
          <AddressContainer>
            <h5>Shipping Address</h5>
            <p>{address.fullName}</p>
            <p>{address.flat}</p>
            <p>{address.area}</p>
            <p>{address.landmark}</p>
            <p>
              {address.city} {address.region}
            </p>
            <p> {address.phone}</p>
          </AddressContainer>
          <PaymentContainer>
            <h5>Payment Method</h5>
            <p>Card Details</p>
          </PaymentContainer>
          <OrderContainer>
            <h5>Your Order</h5>
            <div>
              {basket?.map((product) => (
                <Product key={product.id}>
                  <Image>
                    <img src={product.image} alt=""></img>
                  </Image>
                  <Description>
                    <h4>{product.title}</h4>
                    <p>&euro; {product.price}</p>
                  </Description>
                </Product>
              ))}
            </div>
          </OrderContainer>
        </ReviewContainer>

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

          <button onClick={handleOrder}>Place Order</button>
        </Subtotal>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  background-color: #c1fec1;
`;

const Main = styled.div`
  padding: 15px;
  display: flex;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ReviewContainer = styled.div`
  background-color: #fff;
  flex: 0.7;
  padding: 15px;

  h2 {
    font-weight: 500;
    font-size: 30px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const AddressContainer = styled.div`
  margin-top: 20px;

  h5 {
    font-size: 20px;
  }

  div {
    margin-top: 18px;
    margin-left: 18px;

    p {
      font-size: 16px;
      margin-top: 4px;
    }
  }
`;

const PaymentContainer = styled.div`
  margin-top: 40px;
  margin-left: 15px;

  h5 {
    font-size: 20px;
  }

  p {
    font-size: 20px;
  }
`;

const OrderContainer = styled.div`
  margin-top: 40px;

  h5 {
    font-size: 20px;
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

export default Payment;
