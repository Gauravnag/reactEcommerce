import React from "react";
// import { useContext } from "react";
import HeroSection from "./components/HeroSection";
// import {productContext} from "./context/productcontext"
import {useProductContext} from "./context/productcontext";

const About = () => {
    // const myName = useContext(productContext);
    const myName = useProductContext();
    const data ={
        name: "Contact Page"
    }
    return(
        <>
        {/* {myName} */}
           <HeroSection dataInput={data} />
        </>
    )
 }
 export default About;