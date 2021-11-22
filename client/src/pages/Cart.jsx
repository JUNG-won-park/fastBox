import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive"; 
import { useHistory} from "react-router";
import {
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Success from "./Success";
import Fail from "./Fail";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;


const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  margin-bottom: 7px;
  margin-top: 7px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 48%;
  margin: 4px;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;



const Cart = () => {
  let history = useHistory();
  const goBackNow = () => {
    history.goBack();
  };
  
const cart = useSelector((state) => state.cart);
const user = useSelector((state) => state.user);

//아임포트 결제
var IMP = window.IMP; 
IMP.init("imp93914711"); 

const requestPay = (method, name, price) => {

  console.log(cart.products)
  IMP.request_pay({ 
    pg: "html5_inicis.INIpayTest",
    pay_method: method,
        merchant_uid: "ORD20210131-00012011",
        name: name,
        amount: price,
        buyer_email: "fastBoxTest@gmail.com",
        buyer_name: "빠른상자",
        buyer_tel: "010-1234-1234",
        buyer_addr: "Dusty-House, Mars, Solar System",
        buyer_postcode: "09999"
  }, rsp => { // callback
    if (rsp.success) {
      <Redirect to="/success" />
    } else {
      <Redirect to="/fail" />
    }
  });
}

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>CART</Title>
        <Top>
          <TopButton onClick={goBackNow}>CONTINUE SHOPPING</TopButton>
         
        </Top>
        <Bottom>
          <Info><Hr />
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <ProductAmount>QUANTITY : {product.quantity}</ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>
                    {(product.quantity * product.price).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} ₩
                  </ProductPrice>
                </PriceDetail>
              </Product> 
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} ₩</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Fee</SummaryItemText>
              <SummaryItemPrice>FREE</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Additional Tax</SummaryItemText>
              <SummaryItemPrice>관세청에 문의 바랍니다</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} ₩</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={() => requestPay("card",user.currentUser.username,cart.products.map(item => item.price * item.quantity).reduce((sum, current) => sum+current))}>ORDER NOW</Button>
            <Button onClick={() => requestPay("kakaopay",user.currentUser.username,cart.products.map(item => item.price * item.quantity).reduce((sum, current) => sum+current))}
            style={{ backgroundColor: '#ffe164', borderColor:'#ffe164', color:'#181600'}} >KAKAO PAY</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
