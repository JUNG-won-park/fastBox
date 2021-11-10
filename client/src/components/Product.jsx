import {
  SearchOutlined
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f5f7;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;


const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5ec;
    transform: scale(1.1);
  }
`;

// const Stripe = styled.div`
//   width: 100px;
//   height: 100px;
//   background: repeating-linear-gradient(
//     -45deg,
//     #f85b23,
//     #f85b23 13px,
//     #f4f5f7 13px,
//     #f4f5f7 26px
//   );
//   margin-right:80px;
//   margin-bottom:120px;
//   position: absolute;
// `;

// const Stripe2 = styled.div`
//   width: 100px;
//   height: 100px;
//   margin-right: 20vw;
//   margin-top: 350px;
//   z-index:99;
//   position: absolute;
//   font-family: BordaW00-Bold;
//   font-size: 20px;
//   color: #f85b23;
//   font-weight:800;
// `;

const Product = ({ item }) => { 
  return (
     
    <Container>
      {/* {(item.categories=="Cloth")? <Stripe /> : ""} */}
      <Image src={item.img} />
      
      
      <Info>
    
        <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchOutlined style={{ color: 'black', textDecoration: 'inherit'}} />
          </Link>
        </Icon>
    
      </Info>
    </Container>
  );
};

export default Product;
