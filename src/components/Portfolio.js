import React, { useState } from 'react';
import { Box, Image, PseudoBox, Icon, Heading, Text, Stack, Button } from '@chakra-ui/core';

import phoneIcon from '../img/phoneIcon.png';
import bubbleIcon from '../img/bubbleIcon.png';
import musicIcon from '../img/musicIcon2.png';
import settings from '../img/settingsIcon.png';
export const Portfolio = () => {
        const [filteredData, setFilterFields] = useState([]);


        const photoData = [
                {
                        id: 1,
                        img: phoneIcon,
                        type: "WEB",
                },
                {
                        id: 2,
                        img: bubbleIcon,
                        type: "WEB",
                },
                {
                        id: 3,
                        img: musicIcon,
                        type: "WEB",
                },
                {
                        id: 4,
                        img: settings,
                        type: "GRAPHIC"
                },
                {
                        id: 5,
                        img: musicIcon,
                        type: "FLAT"
                },
                {
                        id: 6,
                        img: musicIcon,
                        type: "FLAT"
                },
                {
                        id: 7,
                        img: musicIcon,
                        type: "FLAT"
                },
                {
                        id: 8,
                        img: musicIcon,
                        type: "WEB"
                }
        ];
        const checkFilteres = (filter_type) => {
                if (filter_type === 'ALL') {
                        setFilterFields([]);
                        return;
                }
                let newArray = [...photoData];
                newArray = newArray.filter((item) => item.type === filter_type);
                setFilterFields([...newArray]);
        }
        return (
                <Box bg="#fff"
                        w="100%"
                        display="flex"
                        justifyContent="center"
                >
                        <Stack spacing={6}>
                                <Heading size="lg"
                                        margin="40px auto"
                                        fontWeight="500" textAlign="center">Portfolio</Heading>
                                <Text textAlign="center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Text>
                                <Stack direction="row" justifyContent="center"
                                        w="100%"
                                >
                                        <Button color="#fff" borderRadius="0" bg="#92dfcf"
                                                onClick={(e) => checkFilteres("ALL")}

                                        >ALL</Button>
                                        <Button color="#fff" borderRadius="0" bg="#92dfcf"
                                                onClick={(e) => checkFilteres("WEB")}
                                        >Web Design</Button>
                                        <Button color="#fff" borderRadius="0"

                                                onClick={(e) => checkFilteres("GRAPHIC")}
                                                bg="#92dfcf">Graphic Design</Button>
                                        <Button color="#fff" borderRadius="0"
                                                onClick={(e) => checkFilteres("FLAT")}
                                                bg="#92dfcf">Flat Design</Button>

                                </Stack>
                                <Stack spacing={5}
                                        direction="row"
                                        flexWrap="wrap"

                                        className="icon-box-container"
                                >

                                        {
                                                filteredData.length ?
                                                        filteredData.map((item) => {
                                                                return <Box

                                                                        key={item.id}
                                                                        m="5px 10px"
                                                                        className="icon-box"
                                                                        bg="#fff"
                                                                        display="flex"
                                                                        position="relative"
                                                                >
                                                                        <PseudoBox
                                                                                zIndex="1"
                                                                                w="100%"
                                                                                opacity="0"
                                                                                h="100%"
                                                                                borderRadius="50%"
                                                                                position="absolute"
                                                                                bg="#000"
                                                                                display="flex"
                                                                                justifyContent="center"
                                                                                alignItems="center"
                                                                                _hover={{
                                                                                        opacity: 0.7,
                                                                                        bg: '#4eab8d'
                                                                                }}
                                                                        >
                                                                                <Box display="flex"
                                                                                        justifyContent="center"
                                                                                        alignItems="center"
                                                                                        borderRadius="50%"
                                                                                        bg="#000"
                                                                                        w="60px"
                                                                                        h="60px"


                                                                                >
                                                                                        <Icon
                                                                                                size="32px"
                                                                                                color="#fff"
                                                                                                name="search" />
                                                                                </Box>
                                                                        </PseudoBox>

                                                                        <Image

                                                                                width="80%"
                                                                                margin="auto"
                                                                                src={item.img} />

                                                                </Box>
                                                        })
                                                        :
                                                        photoData.map((item) => {
                                                                return <Box

                                                                        key={item.id}
                                                                        m="5px 10px"
                                                                        className="icon-box"
                                                                        bg="#fff"
                                                                        display="flex"
                                                                        position="relative"
                                                                >
                                                                        <PseudoBox
                                                                                zIndex="1"
                                                                                w="100%"
                                                                                opacity="0"
                                                                                h="100%"
                                                                                borderRadius="50%"
                                                                                position="absolute"
                                                                                bg="#000"
                                                                                display="flex"
                                                                                justifyContent="center"
                                                                                alignItems="center"
                                                                                _hover={{
                                                                                        opacity: 0.7,
                                                                                        bg: '#4eab8d'
                                                                                }}
                                                                        >
                                                                                <Box display="flex"
                                                                                        justifyContent="center"
                                                                                        alignItems="center"
                                                                                        borderRadius="50%"
                                                                                        bg="#000"
                                                                                        w="60px"
                                                                                        h="60px"


                                                                                >
                                                                                        <Icon
                                                                                                size="32px"
                                                                                                color="#fff"
                                                                                                name="search" />
                                                                                </Box>
                                                                        </PseudoBox>

                                                                        <Image

                                                                                width="80%"
                                                                                margin="auto"
                                                                                src={item.img} />

                                                                </Box>
                                                        })
                                        }



                                </Stack>
                        </Stack>
                </Box>);
}