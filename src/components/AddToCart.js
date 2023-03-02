import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import  {Button}  from "../styles/Button";
import { NavLink } from "react-router-dom";

const AddToCart = ({product}) => {
    
    const {id, colors, stock} = product;
    const [activ, setActiv] = useState();
    const [amount, setAmount] = useState(1);

    const decrement = () => {
      return amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    const increment = () => {
      return amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    // Add and Remove Active Class
    return(
        <Wrapper>
           <div className="colors">
                <p> Colors:
                    { 
                        colors.map((curr, ind) => {
                            return <button type="button" 
                                    className={curr === activ ? "btnStyle active" : "btnStyle" }
                                    onClick={() => setActiv(curr) }
                                    style={{backgroundColor: curr}}
                                    key={ind}>
                                        {curr === activ ? <FaCheck className="checkStyle" /> : ""}
                                    </button>
                        })
                    }
                </p>
           </div>

           {/* Add to cart */}
            <CartAmountToggle 
              amount={amount}
              setDecrement={decrement}
              setIncrement={increment}
            />

            <NavLink to="/cart">
              <Button>Add To Cart</Button>
            </NavLink>

        </Wrapper>
    )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;