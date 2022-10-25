import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const Error = () => {
    return(
        <Wrapper>
          <div className="container">
            <div>
                <h2>404</h2>
                <h3>UH HO! You r lost</h3>
                <p>
                    The page you are looking doesn't exist
                </p>
                <Button>
                <NavLink to="/">
                Home
                </NavLink>
                </Button>
            </div>
          </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
     .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default Error;