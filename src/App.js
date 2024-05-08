import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Address from './components/Address';
import Payment from './components/Payment';
import Orders from './components/Orders';

import AddProduct from './components/AddProduct';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
`;

export default App;
