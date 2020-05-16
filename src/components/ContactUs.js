import React, { useState, useRef,useEffect, Component } from 'react';
import { Box, Heading, Input, Image, Text, Stack, Button, PseudoBox, Icon, Textarea } from '@chakra-ui/core';


import { FaFacebookF, FaTwitter, FaGooglePlusG, FaBasketballBall } from 'react-icons/fa';
import { Map, YMaps, GeoObject, Placemark,Clusterer } from 'react-yandex-maps';
import worker1 from '../img/worker1.png';
import worker2 from '../img/worker2.png';
import worker3 from '../img/worker3.png';


const mapState = { center: [55.750625, 37.626], zoom: 10 };

export class ContactUs extends Component {

  constructor(props){
    super(props);
    this.POINTS=[ {
      title: "Placemark 1",
      descr: "Some description",
      coords: [55.831903, 37.411961]
    },
    {
      title: "Placemark 2",
      descr: "Some description",
      coords: [55.763338, 37.565466]
    },
    {
      title: "Placemark 3",
      descr: "Some description",
      coords: [55.763338, 37.565466]
    },
    {
      title: "Placemark 4",
      descr: "Some description",
      coords: [55.744522, 37.616378]
    },
    {
      title: "Placemark 5",
      descr: "Some description",
      coords: [55.780898, 37.642889]
    },
    {
      title: "Placemark 6",
      descr: "Some description",
      coords: [55.793559, 37.435983]
    },]
    this.onMapLoaded =  this.onMapLoaded.bind(this)
  }
  map = React.createRef();
  onMapLoaded(ymaps){
   
  }
  render(){
    const {POINTS} = this;
    const {dimensions} =this.props;
    return  <YMaps  
  
    query={{
      load: "package.full"
      }}
    
    ><Box w="100%"
      
      bg="teal"
      color="#000"
    >
      <Heading w="100%"
        fontWeight="500"
        textAlign="center">Contact Us</Heading>
      <Text fontWeight="500"
        textAlign="center" fontWeight="500"
        marginTop="20px"
      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Text>
      <Stack w="100%" direction={dimensions.width<780?"column":"row"} margin="40px auto">
  
  
        <Stack      >
          <Stack  direction={dimensions.width<780?"column":"row"} ><Input placeholder="Your name" /> <Input placeholder="your email" /></Stack>
          <Textarea
            flex="1"
            placeholder="your message"></Textarea>
          <Button alignSelf="flex-end" w="140px"
            marginTop="15px"
            bg="#21a58c"
            color="#fff"
            borderRadius="0"
          >Submit</Button>
        </Stack>
        <Stack w={dimensions.width<780? "300px":"600px"} margin="0 auto 0 40px"><Box flex="1" bg="#c0c0c0">
            <Map 
                width="100%"
                state={mapState}
            instanceRef={(ref)=>{
              this.map.current = ref;
    }}
          onLoad={(ymaps)=>{ this.onMapLoaded(ymaps)}}
  
  >
  
  <Clusterer
              
            >
              {POINTS.map((point, index) => (
                <Placemark
                  key={index}
                  geometry={point.coords} 
                />
              ))}
            </Clusterer>    
            </Map>
          
        </Box></Stack>
      </Stack>
    </Box>
    </YMaps>
  }
 

}