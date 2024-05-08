import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from '../axios';
import styled from 'styled-components';
import Navbar from './Navbar';
import Card from './Card';
import { setUser } from '../store';

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('./products/get');
      setProducts(data);
    };

    fetchData();
    dispatch(setUser());
  }, []);

  return (
    <Container>
      <Navbar />
      <Banner>
        <img
          src="./foreignbasketbanner.jpg"
          alt="banner for foreignbasket website"
        />
      </Banner>

      <Leftside>
        <FavouriteButton title="Take a look at your wishlist">
          <img src="favorite_icon.png" alt="favorite" />
        </FavouriteButton>
        <MessageButton title="Couldn't find an ingredient? Let us know">
          <img src="message_icon.png" alt="message icon" />
        </MessageButton>
      </Leftside>
      <Rightside>
        <BasketButton title="Proceed to checkout">
          <img src="foreignbasket_logo.png" alt="logo of foreignbasket" />
        </BasketButton>
        <RecipeboxButton title="Try RecipeBox by foreignbasket!">
          {' '}
          <img src="recipebox.png" alt="box icon" />
        </RecipeboxButton>
      </Rightside>

      <Main>
        {products?.data.map((product) => (
          <Card
            key={product._id}
            id={product._id}
            image={product.imageUrl}
            price={product.price}
            title={product.title}
          />
        ))}
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;

const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 330px;
  grid-template-columns: repeat(4, 250px);
  grid-gap: 25px;

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
`;

const Leftside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 150px;
  height: 200px;
  position: fixed;
  top: 55%;
  left: 1%;
  z-index: 1;

  @media only screen and (max-width: 767px) {
    top: 60%;
  }
`;

const FavouriteButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70px;
    height: 60px;
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  }
`;

const MessageButton = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70px;
    height: 60px;
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  }
`;

const Rightside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 150px;
  height: 200px;
  position: fixed;
  top: 55%;
  right: 1%;
  z-index: 1;

  @media only screen and (max-width: 767px) {
    top: 25%;
    left: 1%;
  }
`;

const BasketButton = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 80px;
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  }
`;

const RecipeboxButton = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70px;
    height: 60px;
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  }
`;
export default Home;
