import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md"
import { BsCartX } from "react-icons/bs"
import CartItem from "./CartItem/CartItem"
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";


import "./Cart.scss";
import { Context } from "../../utils/context";

const Cart = ({ setshowCart }) => {
    const navigate = useNavigate();
  const {cartItems,cartSubTotal} = useContext(Context)

    const stripePromise = loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    );

  const handlePayment = async () => {
    try {
        const stripe = await stripePromise;
        const res = await makePaymentRequest.post("/api/orders", {
            products: cartItems,
        });
        await stripe.redirectToCheckout({
            sessionId: res?.data?.stripeSession?.id,
        });
    } catch (err) {
        console.log(err);
    }
};




    return (
        <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    < span className="close-btn"
                       onClick={() => setshowCart(false) }
                    >
                        <MdClose/>
                        <span className="text">close</span>
                    </span>
                </div>
               
                {!cartItems?.length &&<div className="empty-cart">
                <BsCartX />
                <span>No product in the cart.</span>
                <button className="return-cta" onClick={()=>navigate("/")}>RETURN TO SHOP</button>
                </div>}
              {!!cartItems?.length && <>
               <CartItem />
               <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal:</span>
                    <span className="text total">&#8377;{cartSubTotal}</span>
                </div>
                <div className="button">
                    <button 
                    className="Checkout-cta"
                    onClick={handlePayment}
                    >Checkout
                    </button>
                </div>
               </div>
               </>}
        </div>
    </div>
    );
};

export default Cart;
