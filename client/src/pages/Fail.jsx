
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url("https://i.ibb.co/6Xwn43m/login-Back.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
 
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Desc = styled.a`
  font-size: 35px;
`;

const Fail = () => { 
 
  return (
    <Container>
      <Wrapper>
        <Title>ORDER RESULT</Title> <br/>
        <Desc>Order Failed 😥 </Desc> <br/><br/>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><Button>GO BACK HOME</Button></Link>
      </Wrapper>
    </Container>
  );
};

export default Fail;
