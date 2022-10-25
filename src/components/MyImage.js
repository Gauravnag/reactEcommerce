import { useState } from "react";
import styled from "styled-components";

const MyImage = ({imgs =[{ url: '' }] }) => {
    //console.log(imgs);
    const [mainImage, setMainImage] = useState(imgs[0]);
    const imgChange = (curr) => {
        setMainImage(curr);
    }
    return(
        <Wrapper>
            <div className="grid grid-four-column flex-dir-row">
               { imgs.map((curr, index) => {
                return(
                    <figure key={index}>
                        <img 
                        src={curr.url} 
                        alt={curr.filename} 
                        className="box-image--style"
                        onClick={() => imgChange(curr)}
                        />
                    </figure>
                )
               }) }
            </div>
           <div className="main-screen">
               <img src={mainImage.url} />
           </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    display: flex;
    .flex-dir-row {
        display: flex;
        flex-direction: column;

        img {
            width: 200px;
        }
    }
    .main-screen {
        img {
            width: 500px;
            margin-left: 20px;
        }
    }
`;
export default MyImage;