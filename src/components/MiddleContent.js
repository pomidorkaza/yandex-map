import React from 'react';
import {Box, Heading, Image,Text, Stack, Button } from '@chakra-ui/core';

import middleImg from '../img/middleImg.png';

export const MiddleContent=()=>{
    return <Box
        w="100%"
        h="60vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        
    >
        <Image
        zIndex="-1"
        position="absolute"
        w="100%"
        h="100%"
        src={middleImg}/>
        <Stack spacing={16}> 
        <Heading w="100%"
        textAlign="center"
        color="#fff"
        fontSize="4.5rem"
        fontWeight="500"
        >We Build Brand</Heading>
        <Text textAlign="center" color="#fff" fontSize="1.5rem">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy<br/>
nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </Text>
        <Button
        bg="#92dfcf"
        color="#fff"  
        w="200px"
        borderRadius={0}
        margin="0 auto"      
        textTransform="uppercase">Learn More</Button>
        </Stack>
    </Box>
}