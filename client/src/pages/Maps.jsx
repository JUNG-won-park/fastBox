import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import styled from "styled-components";
import Announcement from "../components/Announcement"; 
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Search } from "@material-ui/icons";
import dotenv from "dotenv";
dotenv.config();

 
const Input = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 51.5%;
  padding: 5px;
  width: 350px;
  height: 40px;
`;

const Container = styled.div`
  justify-content: space-between;
  height: 800px;
  
`; 

const Tbox = styled.div`
  font-size: 30px;
  position : relative;
  margin-left : 50%;
  display: inline; 
  width: 49%;
  height: 80%;
`;

const Tbox2 = styled.div`
  font-size: 30px; 
  margin-left : 50%;
  display: flex; 
  width: 49%; 
`;

const Info = styled.div`
  font-size: 30px;
  position : relative;
  margin-left : 52%;
  margin-top : 2%;
  margin-bottom : 2%;
  display: flex; 
`;

const Desc = styled.div`
  font-size: 20px;
  position : relative;
  margin-left : 52%;
  display: flex;
  margin-top: 0.5%;
`;

const mapStyles = {
   diplay:'flex',
  marginTop: '20px',
  marginLeft: '20px',
    width: '49%',
    height: '80%',
 };
 
function Maps(props) {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const geo = [{ lat: 41.91895644736204, lng: 2.3306152903081787 },{ lat: 33.846335444586835, lng: -118.25624100231951 }, { lat: 40.87016691025567, lng:-74.05850014560845 }]
  const from = ['Incorrect Tracking Number','US West, California', 'US East, New Jersey' ]
  const desc = ['Please Check your tracking number.','The ship is coming from California fastBox warehouse.', 'The ship is coming from New Jersey fastBox warehouse.' ]
  const estimate = ['','Estimated delivery time is 3 days. ', 'Estimated delivery time is 3 days. ' ]


  useEffect(() => {
    <Map />
  }, [text]);
 
      return (
        <div>
          <Navbar/>
          <Announcement/>

          <Container>
            <Map
              style={mapStyles}
              google={props.google}
              zoom={9}
              center={geo[text]}
            ><Marker position={geo[text]} />
            </Map>

            <Tbox>
              <Input><input style={{border: 'none', outline:'none', width: '350px', height: '40px'}} onChange={onChange}  placeholder='Tracking Numbers' /><button style={{border: 'grey', marginLeft: '3px', height: '40px'}} onClick={()=>{setText(gCheck(text))}}><Search style={{ color: "gray", fontSize: 30 }} /></button></Input>
             
              <Info>{from[text]}</Info>
              <Desc>{desc[text]}</Desc>
              <Desc>{estimate[text]}</Desc>
            </Tbox>
            <Tbox2>
            
            </Tbox2>
          </Container>
        <Newsletter/>
        <Footer/>

        

        </div>
      );
    
  }
   
  function gCheck(text){
    if(text.includes("TBX")) {
      return 1
    } else if(text.includes("CLA")) {
      return 2
    }
    else {
      return 0
    }
   }
 

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_SEC,
})(Maps);