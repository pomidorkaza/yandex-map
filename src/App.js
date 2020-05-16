import React,{useEffect, useRef} from 'react';
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";

import { NavMenu } from './components/NavMenu';
import { MiddleContent } from './components/MiddleContent'
import {AboutUs} from './components/AboutUs';
import { Portfolio } from './components/Portfolio';
import {ContactUs} from './components/ContactUs';


import { YMaps, Map } from "react-yandex-maps";



import './main.css';

const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
    },
};
function App() {

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
    //https://github.com/gribnoysup/react-yandex-maps/issues/182
     return <ThemeProvider theme={customTheme}>
         <CSSReset />
        <NavMenu />
        <MiddleContent />
        <Portfolio />
        <AboutUs/>
    <ContactUs dimensions={dimensions}/>
     
    </ThemeProvider>;
}

export default App;