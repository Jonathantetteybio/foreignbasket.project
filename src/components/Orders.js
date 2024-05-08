import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import axios from '../axios';
import Navbar from './Navbar';
import { selectEmail } from '../store';

function Orders() {
  const email = useSelector((state) => selectEmail(state));

  console.log(email);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () =>
      await axios
        .post('/orders/get', { email: email })
        .then((res) => setOrders(res.data));
    fetchOrders();
  }, []);
  console.log(orders);
  return (
    <Container>
      <Navbar />
      <Main>
        <OrderContainer>
          <h2>Your Orders</h2>
          {orders?.map((order) => (
            <OrderDetail>
              <AddressContainer>
                <h4>Shipping Address</h4>
                <div>
                  <p>{order.address.fullName}</p>
                  <p>{order.address.flat}</p>
                  <p>{order.address.area}</p>
                  <p>{order.address.landmark}</p>
                  <p>
                    {order.address.city}, {order.address.region}
                  </p>
                  <p>Phone: {order.address.phone}</p>
                </div>
              </AddressContainer>

              <OrderBasket>
                <h4>Order</h4>
                <p>
                  Subtotal: &euro; <span>{order.price}</span>
                </p>

                {order.products.map((product) => (
                  <Product>
                    <Image>
                      <img src={product.image} alt=""></img>
                    </Image>
                    <Description>
                      <h4>{product.title}</h4>
                      <p>&euro; {product.price}</p>
                    </Description>
                  </Product>
                ))}
              </OrderBasket>
            </OrderDetail>
          ))}
        </OrderContainer>
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
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const OrderContainer = styled.div`
  padding: 15px;
  background-color: #fff;
  width: 95%;

  h2 {
    font-weight: 700;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const OrderDetail = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
`;

const AddressContainer = styled.div`
  margin-top: 20px;

  h4 {
    font-size: 22px;
  }

  div {
    margin-top: 10px;
    margin-left: 10px;

    p {
      font-size: 16px;
      margin-top: 4px;
    }
  }
`;

const OrderBasket = styled.div`
  margin-top: 20px;

  h4 {
    font-size: 22px;
  }

  p {
    font-size: 16px;
    margin-left: 15px;
    margin-top: 15px;

    span {
      font-weight: 600;
    }
  }
`;

const Product = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
`;
const Image = styled.div`
  flex: 0.15;
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

  @media only screen and (max-width: 1200px) {
    font-size: 12px;
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

export default Orders;
