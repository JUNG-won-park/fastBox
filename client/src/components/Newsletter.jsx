import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 40vh;
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

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <img src="https://i.ibb.co/XjbNmRz/banner-Logo5.png"></img>
      <Title>Fastest delivery Cheapest price</Title>
      <Desc>Find fastBox kakao plus account in kakaotalk or contact us through email <br/>We also privde 1:1 chat through our kakao plus account</Desc>
      {/* <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer> */}
    </Container>
  );
};

export default Newsletter;
