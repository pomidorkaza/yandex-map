import React from 'react';
import { Box, Heading, Button, Text, Image, Stack, PseudoBox, Icon } from '@chakra-ui/core';
import favicon from '../img/favicon.png'

export const NavMenu = () => {
    return (
        <Box
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
        </Box>);
}