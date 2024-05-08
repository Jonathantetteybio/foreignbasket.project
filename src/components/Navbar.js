import { useSelector } from 'react-redux';
import { selectBasket, selectFullname } from '../store';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  const basket = useSelector((state) => selectBasket(state));

  const fullName = useSelector((state) => selectFullname(state));
  const navigate = useNavigate();
  return (
    <Container>
      <Inner>
        <Logo onClick={() => navigate('/home')}>
          <img src="foreignbasket_logo.png" alt="foreign basket logo" />
        </Logo>
        <WebsiteName>
          <h3>foreignbasket.com</h3>
        </WebsiteName>
        <SearchBar>
          <input type="text" placeholder="Search..." />
          <SearchIcon onClick={() => navigate('/addproduct')}>
            <img src="searchIcon.png" alt="a search icon" />
          </SearchIcon>
        </SearchBar>
        <RightContainer>
          <NavButton>
            <p>Hello, </p>
            <p>{fullName ? fullName : 'Guest'}</p>
          </NavButton>
          <NavButton onClick={() => navigate('/orders')}>
            <p>Return</p>
            <p>& Orders</p>
          </NavButton>
          <BasketButton onClick={() => navigate('/checkout')}>
            <img src="foreignbasket_logo.png" alt="logo of foreign basket" />
            <p>{basket.length}</p>
          </BasketButton>
        </RightContainer>
      </Inner>
      <MobileSearchbar>
        <input type="text" placeholder="Search..." />
        <SearchIcon onClick={() => navigate('/addproduct')}>
          <img src="searchIcon.png" alt="a search icon" />
        </SearchIcon>
      </MobileSearchbar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #3cb043;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;

  @media only screen and (max-width: 767px) {
    height: 140px;
    flex-direction: column;
    gap: none;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;
const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;

  img {
    width: 130px;
    height: 90px;
    margin-top: 0px;
  }
`;
const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;

  input {
    font-size: 18px;
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 5px;
    }

    &:focus {
      outline: none;
    }
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const MobileSearchbar = styled.div`
  height: 35px;
  width: 90%;
  display: flex;
  align-items: center;

  input {
    font-size: 18px;
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 10px;
    }

    &:focus {
      outline: none;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const SearchIcon = styled.div`
  background-color: #fc6a03;
  height: 37px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;

  img {
    width: 22px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;

const NavButton = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;

  p {
    &:nth-child(1) {
      font-size: 16px;
      margin-bottom: 0px;
    }
    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
      margin-top: 0px;
    }
  }
`;

const WebsiteName = styled.div`
  h3 {
    font-size: 25px;
    font-weight: 600;
  }
`;

const BasketButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;

  img {
    width: 50px;
    margin-right: 0px;
  }

  p {
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: #fff;
    font-weight: 500;
  }

  @media only screen and (max-width: 767px) {
    p {
      right: 5px;
      bottom: 20px;
    }
  }
`;

export default Navbar;
