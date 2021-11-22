import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 300px;
  background: linear-gradient(-135deg, #c12674, #2c1c39) fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  color : white;
  margin-top: 30px;
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 100;
  margin-bottom: 20px;
  color: white;
  text-align: center;
  ${mobile({ textAlign: "center" })}

`;


const Newsletter = () => {
  return (
    <Container>
      <img src="https://i.ibb.co/XjbNmRz/banner-Logo5.png"></img>
      <Title>Fastest delivery Cheapest price</Title>
      <Desc>Find fastBox kakao plus account in kakaotalk or contact us through email <br/>We also privde 1:1 chat through our kakao plus account</Desc>
       
    </Container>
  );
};

export default Newsletter;
