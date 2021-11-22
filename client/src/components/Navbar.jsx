import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, {useEffect} from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {logout} from '../redux/userRedux.js';
import {removeProduct, removeCart} from '../redux/cartRedux.js';
import { slide as Menu } from 'react-burger-menu';
import "./navmenu.css";

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
  font-size: 18px;
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


 
const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
 

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

          <Menu>
          <Link to="/products/Shoes" style={{ color: 'white', textDecoration: 'inherit', lineHeight:'40px'}}><MenuItem>SHOES</MenuItem></Link>
          <Link to="/products/Cloth" style={{ color: 'white', textDecoration: 'inherit', lineHeight:'40px'}}><MenuItem>CLOTHING</MenuItem></Link>
          <Link to="/products/Equip" style={{ color: 'white', textDecoration: 'inherit', lineHeight:'40px'}}><MenuItem>EQUIPMENT</MenuItem></Link>
          <Link to="/maps" style={{ color: 'white', textDecoration: 'inherit', lineHeight:'40px'}}><MenuItem>TRACKING</MenuItem></Link>
          </Menu>
         
           
        </Left>
        <Center><Link to="/">
          <Logo><img src="https://i.ibb.co/Zm9rMcX/site-Logo3.png" style={{width:"30vh"}} /></Logo></Link>
        </Center>
        <Right>
          <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem>REGISTER</MenuItem></Link>
          {
            !user ? (
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem>SIGN IN</MenuItem></Link>
            ) : (
              <But onClick={handleLogout}>LOGOUT</But>
            )
          }
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
