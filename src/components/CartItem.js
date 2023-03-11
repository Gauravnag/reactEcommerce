import FormatPrice from "../Helper/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, amount, color, name, price }) => {
    const {removeItem, increment, decrement} = useCartContext();

    return <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>
            <div>
                <p> {name} </p>
                <div className="color-div">
                    <p>Color: </p>
                    <div className="color-style" style={{ backgroundColor: color, color: color }}></div>
                </div>
            </div>
        </div>
        {/* price */}
        <div className="cart">
           <p> <FormatPrice myprice={price} /> </p>
        </div>

        {/* Quantity */}
        <CartAmountToggle 
            amount={amount}
            setDecrement={() => decrement(id)}
            setIncrement={() => increment(id)}
        />

        {/* SubTotal */}
        <div>
           <p> <FormatPrice myprice={price * amount} /> </p>
        </div>

        {/* Remove */}
        <div>
            <FaTrash className="remove_icon" onClick={() => removeItem(id) } />
        </div>

    </div>
}
export default CartItem;