import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import PageNavigation from "./components/PageNavigation";
import {useProductContext} from "./context/productcontext";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./Helper/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
import { useState } from "react";
import CartAmountToggle from "./components/CartAmountToggle";
import  {Button}  from "./styles/Button";

const SingleProduct = () => {
  const API = "https://api.pujakaitem.com/api/products";
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const {id} = useParams();
  const [amount, setAmount] = useState(1);
 
  const {
    id: alias,
    category,
    company,
    description,
    name,
    price,
    reviews,
    stock,
    stars,
    image
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if(isSingleLoading) {
    return(
      <div className="page_loading">...Loading</div>
    )
  }

  const decrement = () => {
    return amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  const increment = () => {
    return amount < stock ? setAmount(amount + 1) : setAmount(amount);
  }

  return(
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_image">
            <MyImage imgs={image} />
          </div>
          <div className="product-data">
            <h2> {name} </h2>
            <Star stars={stars} reviews={reviews} />
            {/* <p>{stars}</p>
            <p>{reviews} reviews</p> */}
            <p className="product-data-price">
              MRP:
              <del> <FormatPrice myprice={price + 250000} /> </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice myprice={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p> Delivery</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              </div>

              <div className="product-data-info">
                <p>Available: <span>{ stock>0 ? "In Stock" : "Not in Stock" }</span></p>
              </div>
              <p>ID: {id}</p>
              <p>Brand: {company}</p>
              <hr />

                { stock > 0 && <AddToCart product={singleProduct} /> }

              <CartAmountToggle
                amount={amount}
                setDecrement={decrement}
                setIncrement={increment}
               />

               <NavLink to="/cart">
                  <Button>Add To Cart</Button>
               </NavLink>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
