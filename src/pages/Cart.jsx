import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Ensure cart is an array before calculating totalAmount
    if (Array.isArray(cart)) {
      const calculatedTotal = cart.reduce((acu, curr) => acu + curr.price, 0);
      setTotalAmount(calculatedTotal);
    }
  }, [cart]);

  return (
    <div>
      {Array.isArray(cart) && cart.length > 0 ? (
        <div className="flex h-screen w-[100vw] justify-between mx-auto max-w-[65rem]">
          <div>
            {cart.map((item, index) => (
              <CartItem item={item} itemIndex={index} key={item.id} />
            ))}
          </div>
          <div className="flex flex-col p-6 justify-between h-[80vh]">
            <div>
              <p className="font-bold text-[2.5rem] text-green-500">YOUR CART</p>
              <h2 className="font-bold text-[1.2rem]">SUMMARY</h2>
              <p className="font-bold text-[1.5rem]">Total items: {cart.length}</p> {/* Fix typo here */}
            </div>
            <div>
              <p className="font-bold">Total Amount: ${totalAmount}</p>
              <button className="bg-blue-500 p-2 pl-12 pr-12 mt-3 rounded-md font-bold text-[1.2rem] text-white">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-5 mt-[-5rem]">
          <p className="font-bold text-[2rem] text-green-600">Your Cart Is Empty</p>
          <NavLink to="/">
            <button className="bg-blue-500 p-2 pl-5 pr-4 rounded-md font-bold text-[1.2rem] text-white">Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

// Add PropTypes for CartItem
CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemIndex: PropTypes.number.isRequired,
};

export default Cart;
