import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

function SignUp() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    axios
      .post('/auth/signup', { email, password, fullName })
      .then((res) => {
        if (res.data.message) {
          alert(res.data.message);
          navigate('/login');
        } else {
          alert(res.data.warning);
        }
      })
      .catch((err) => console.warn(err));
  };

  return (
    <Container>
      <Logo>
        <img src="./foreignbasket_logo.png" />
      </Logo>
      <Main>
        <FormContainer>
          <h3>Sign-Up</h3>
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
            <p>Email</p>
            <input
              type="email"
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputContainer>
          <InputContainer>
            <p>Password</p>
            <input
              type="password"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </InputContainer>

          <SignUpButton onClick={signUp}>
            Create Account on Foreign Basket
          </SignUpButton>
        </FormContainer>

        <Signupimage>
          <img src="./signup_image.jpg" alt="image for signup page" />
        </Signupimage>
      </Main>

      <LoginButton
        onClick={() => {
          navigate('/login');
        }}
      >
        Login
      </LoginButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 180px;
  margin-bottom: 2px;

  img {
    width: 100%;
  }
`;

const Main = styled.div`
  width: 800px;
  height: 470px;
  display: flex;
  flex-direction: row-reverse;
  border-radius: 15px;
  border: 2px solid lightgray;
`;

const Signupimage = styled.div`
  flex: 0.6;
  border-radius-top-left: 10px;
  width: 500px;

  img {
    border-radius: 15px 0 0 15px;
    width: 100%;
    height: 100%;
  }
`;

const FormContainer = styled.form`
  flex: 0.4;

  height: 440px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 30px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 15px;
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

const SignUpButton = styled.button`
  width: 100%;
  height: 35px;
  font-size: 18px;

  font-weight: 400;
  background-color: #fff;

  border: 1px solid #fc6a03;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #fc6a03;
    color: #fff;
  }
`;

const LoginButton = styled.button`
  width: 61%;
  height: 35px;
  background-color: #fc6a03;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    background-color: #fda172;
  }
`;

export default SignUp;
