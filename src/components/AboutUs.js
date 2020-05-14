import React from 'react';
import {Box, Heading, Image,Text, Stack, Button, PseudoBox, Icon } from '@chakra-ui/core';


import {FaFacebookF,FaTwitter,FaGooglePlusG,FaBasketballBall} from 'react-icons/fa';

import worker1 from '../img/worker1.png';
import worker2 from '../img/worker2.png';
import worker3 from '../img/worker3.png';



export const AboutUs=()=>{

const dataAbout =[
    {
        id: 1,
        workerName:'John Doe',
        workerTitle: 'Project Manager',
        text: 'Ut wisi enim ad minim veniam ,quis nostrud exerci tation',
        img: worker1
    },
    {
        id: 2,
        workerName:'Jhonie Doe',
        workerTitle: 'Graphic Designer',
        text: 'Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        img: worker2
    },
    {
        id: 3,
        workerName:'John Doe',
        workerTitle: 'Project Manager',
        text: 'Ut wisi enim ad minim veniam ,quis nostrud exerci tation',
        img: worker3
    }
]
    return  <Box w="100%"
        
        display="flex"
        justifyContent="center"
        margin="60px auto"
        bg="#16a086"

    >
<Stack w="100%"> 
    <Heading 
    w="100%"
    fontWeight="300"
    fontSize="3.5rem"
    textAlign="center"
    color="#fff"

    
    > About Us</Heading>
    <Text size="0.6rem"
    w="100%"
    textAlign="center"
    color="#fff"
    margin="10px  auto"
    >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Text>
    <Stack direction="row" margin="50px auto">
        {
            dataAbout.map(item=>{
                return  <Box 
                key={item.id}
                className="box-about"
                w="300px"
                bg="#fff"

                paddingBottom="50px"

                >
                
                    <Box w="100%"

                    display="flex"
                    position="relative"
                    >
                         <PseudoBox
                        w="100%"
                        h="100%"
                        transition="0.3s"
                        opacity="0"
                        _hover={{
                            opacity:1
                        }}
                        zIndex="2"
                        position="absolute"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        >
                        <Stack w="60%"
                        direction="row"
                        justifyContent="center"
                        > 
                        <Box w="50px" h="50px"
                        padding="2px"bg="#68a694"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="#fff"
                        >                         <Box   w="100%"

                            
                        as={FaFacebookF}></Box>
                        </Box>
                        <Box w="50px" h="50px"
                        padding="2px"bg="#68a694"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="#fff"
                        >                         <Box   w="100%"

                        className="social-icon-box"   
                        as={FaTwitter}></Box>
                        </Box>
                        <Box w="50px" h="50px"
                        padding="2px"bg="#68a694"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="#fff"
                        >                         <Box   w="100%"

                           
                        as={FaBasketballBall}></Box>
                        </Box>
                        <Box w="50px" h="50px"
                        padding="2px"
                            
                        bg="#68a694"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="#fff"
                        >                         <Box   w="100%"

                            
                        as={FaGooglePlusG}></Box>
                        </Box>
                        </Stack>
                        </PseudoBox>
                        <Image flex="1" 
                    src={item.img}></Image>
                    </Box>
                    <Stack spacing={4}>
                        <Box> 
                        <Heading  w="100%"
                        fontWeight="400"
                        marginTop="10px"
                        textAlign="center"> 
                            {item.workerName}
                        </Heading>
                        <Text w="100%"
                        textAlign="center"
                        fontStyle="italic"
                        >{item.workerTitle}</Text>
                        </Box>
                        <Text  padding="5px"> {item.text}
            </Text>
                    </Stack>
                </Box>
            })
        }
        
    
    </Stack>
    </Stack>
    </Box> 
}