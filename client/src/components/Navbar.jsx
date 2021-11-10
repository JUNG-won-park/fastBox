import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, {useEffect} from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {logout} from '../redux/userRedux.js';
import {removeProduct, removeCart} from '../redux/cartRedux.js';

const Container = styled.div`
  height: 80px;
   
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  padding-bottom: 25px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`; 

const But = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const odong = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)?.currentUser

const Navbar = () => {
  const odong2 = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    return () => {
      console.log(`니얼굴 : ${odong.user}`)
    };
  }, [odong2])

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(removeProduct());
    dispatch(removeCart());
  }
  
  
  const quantity = useSelector(state=>state.cart.quantity)
  console.log(quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/products/Shoes" style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem>SHOES</MenuItem></Link>
          <Link to="/products/Cloth" style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem>CLOTHING</MenuItem></Link>
          <Link to="/products/Equip" style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem>EQUIPMENT</MenuItem></Link>
          {/* <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center><Link to="/">
          <Logo><img src="https://i.ibb.co/Zm9rMcX/site-Logo3.png" style={{width:"30vh"}} /></Logo></Link>
        </Center>
        <Right>
          <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem>REGISTER</MenuItem></Link>
          <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem>SIGN IN</MenuItem></Link>
          <But onClick={handleLogout}>LOGOUT</But>
          
          <Link to="/cart" style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
