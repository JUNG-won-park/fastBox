import {
  MailOutline,
  Phone,
  School,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;



const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo><img src="https://i.ibb.co/Zm9rMcX/site-Logo3.png" style={{width:"15vh"}} /></Logo>
        <Desc>
        Find fastBox kakao plus account in kakaotalk or contact us through email.
        We also privde 1:1 chat through our kakao plus account.<br/>
        Fuel your ambition, do it in the smartest way. Find fastBox kakao plus account in kakaotalk or contact us through email.
        </Desc>
        
      </Left><a href="https://www.behance.net/jbwjbw" target="_blank"></a>
      <Center>
        <Title>Social</Title>
        <List>
          <ListItem> </ListItem>
          <ListItem> </ListItem>
          <ListItem><a href="https://pf.kakao.com/_xhxhGxhb" target="_blank">
            <img src="https://i.ibb.co/xF4H7m9/kbut.png" style={{width:"7vh"}} /></a></ListItem>
          <ListItem><a href="https://www.behance.net/jbwjbw" target="_blank">
            <img src="https://i.ibb.co/Tmn9Sfv/behance.png" style={{width:"7vh"}} /></a></ListItem>
          
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <School style={{marginRight:"10px"}}/> 대진대학교
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 카카오톡 플러스친구 / fastbox
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> ahg0525@gmail.com
        </ContactItem>
        <Payment />  
      </Right>

    </Container>
  );
};

export default Footer;
