import React,{useEffect, useRef} from 'react';
import { Box, Heading, Button, Text, Image, Stack, PseudoBox, Icon } from '@chakra-ui/core';

import { slide as Menu } from 'react-burger-menu'


import favicon from '../img/favicon.png'

export const NavMenu = () => {
 
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
   useEffect(()=>{
     function handleResize() {
        console.log(window.innerWidth)
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
     }
      window.addEventListener('resize', handleResize)

   },[]);
    return (
        (dimensions.width<780)?

        (
        <Box  w="100%"
        h="80px"
        bg="#fff"> 
            <Button bg="#fff" w="60px"><svg width="44" height="44" viewBox="0 0 44 44" fill="#000" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="6" rx="3" transform="translate(2, 7) rotate(0)" />
    <rect width="40" height="6" rx="3" transform="translate(2, 19) rotate(0)" />
    <rect width="40" height="6" rx="3" transform="translate(2, 31) rotate(0)" />
</svg></Button>
        <Menu  width="100%"
             
        > 
        <Box display='flex' width="100%"
        justifyContent="center"
        > 
            <Button  width="100px" textTransform="uppercase" padding="0.25rem 0.5rem" margin="10px"
            bg="#92dfcf"
            color="#fff"
            >
            Home
            
            </Button>
            </Box>
            <Box display='flex' width="100%"
        justifyContent="center"
        > 
            <Button   bg="#92dfcf" color="#fff" width="100px" textTransform="uppercase" padding="0.25rem 0.5rem" margin="10px">
            About
            </Button>
            </Box>
            <Box display='flex' width="100%"
        justifyContent="center"
        > 
            <Button   bg="#92dfcf" color="#fff" width="100px" textTransform="uppercase" 
            padding="0.25rem 0.5rem" margin="10px">
            Contacts
            </Button>
            </Box>
            <Box display='flex' width="100%"
        justifyContent="center"
        > 
            <Button   bg="#92dfcf" color="#fff"  width="100px" textTransform="uppercase" padding="0.25rem 0.5rem" margin="10px">
            Portfolio
            </Button>
            </Box>
        </Menu>
        </Box>
        ):  <Box
        w="100%"
        h="80px"
        bg="#fff" 
    >
        <Stack direction="row" spacing={4}>
            <Stack direction="row" margin="10px 20px">
                <Box w="50px">
                    <Image w="100%" src={favicon} />
                </Box>
                <Stack spacing={0}>
                    <Heading textTransform="uppercase" size="md">Bla Bla </Heading>
                    <Text>One Page Flat Template</Text>
                </Stack>
            </Stack>



            <Box marginLeft="auto" marginRight="20px">
                <PseudoBox width="100px" textTransform="uppercase" padding="0.25rem 0.5rem" margin="8px 10px"
                    _hover={{ color: '#fff', bg: "#92dfcf" }}
                    as="button" bg="#fff">Home</PseudoBox>
                <PseudoBox width="100px" textTransform="uppercase" padding="0.25rem 0.5rem" margin="8px 10px"
                    _hover={{ color: '#fff', bg: "#92dfcf" }}
                    as="button" bg="#fff">Portfolio</PseudoBox>
                <PseudoBox width="100px" textTransform="uppercase" padding="0.25rem 0.5rem" margin="8px 10px"
                    _hover={{ color: '#fff', bg: "#92dfcf" }}
                    as="button" bg="#fff">About</PseudoBox>

                <PseudoBox width="100px" textTransform="uppercase" padding="0.25rem 0.5rem" margin="8px 10px"
                    _hover={{ color: '#fff', bg: "#92dfcf" }}
                    as="button" bg="#fff">Contact</PseudoBox>
            </Box>
        </Stack>
    </Box>
        
       );
}