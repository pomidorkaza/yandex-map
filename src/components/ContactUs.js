import React, { useState, useRef,useEffect } from 'react';
import { Box, Heading, Input, Image, Text, Stack, Button, PseudoBox, Icon, Textarea } from '@chakra-ui/core';


import { FaFacebookF, FaTwitter, FaGooglePlusG, FaBasketballBall } from 'react-icons/fa';
import { Map, YMaps, GeoObject } from 'react-yandex-maps';
import worker1 from '../img/worker1.png';
import worker2 from '../img/worker2.png';
import worker3 from '../img/worker3.png';


const mapState = { center: [55.750625, 37.626], zoom: 7 };

export const ContactUs = () => {

  const routes = useRef(null);
  const [ymaps, setYmaps] = useState(null);

 
 const getRoute = ref => {
  if (ymaps) {
    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        // Описание опорных точек мультимаршрута.
        referencePoints: [[55.734876, 37.59308], "Москва, ул. Мясницкая"],
        // Параметры маршрутизации.
        params: {
          // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
          results: 2
        }
      },
      {
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        boundsAutoApply: true,
        // Внешний вид линии маршрута.
        routeActiveStrokeWidth: 6,
        routeActiveStrokeColor: "#fa6600"
      }
    );

   // Кладем полученный маршрут в переменную
    routes.current = multiRoute;
    ref.geoObjects.add(multiRoute);
  }
};

  
  return  <YMaps  
  enterprise
  
  
  ><Box w="100%"
    h="100vh"
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
    <Stack w="100%" direction="row" margin="40px auto">


      <Stack    >
        <Stack direction="row"><Input placeholder="Your name" /> <Input placeholder="your email" /></Stack>
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
      <Stack w="600px" margin="0 auto 0 40px"><Box flex="1" bg="#c0c0c0">
          <Map width="100%"
          modules={["multiRouter.MultiRoute"]}
          onLoad={ymaps => setYmaps(ymaps)}
          state={mapState}
          instanceRef={ref => ref && getRoute(ref)}
          >

            <GeoObject
              geometry={{
                type: 'Point',
                coordinates: [55.799046568938905, 37.6954025]
              }}
              options={{
                geodesic: true,
                strokeWidth: 5,
                strokeColor: '#F008',
              }}
            ></GeoObject>
          </Map>
        
      </Box></Stack>
    </Stack>
  </Box>
  </YMaps>

}