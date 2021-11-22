import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: linear-gradient(-135deg, #c12674, #2c1c39) fixed;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;


const Announcement = () => {
  return <Container>OPEN EVENT ! Free Shipping !</Container>;
};

export default Announcement;
