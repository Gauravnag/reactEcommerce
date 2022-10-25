import styled from "styled-components";
import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
    const data ={
        name: "Home Page"
    }
    return(
        <>
            <HeroSection dataInput={data} />
            <FeatureProduct />
            <Services />
            <Trusted />
        </>
    )
}

export default Home;