
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import CartItem from "../components/CartItem";

// const Cart = () => {

//   const {cart} = useSelector( (state) => state);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect( () => {
//     setTotalAmount( cart.reduce( ( acu, curr ) => acu + curr.price, 0))
//   }, [cart]);

//   return (
//     <div>
//        {
//          cart.length > 0 ? (
//           <div>
//              <div>
//                 {
//                   cart.map( (item, index) => {
//                     return(
//                       <CartItem item={item} itemIndex={index} key={item.id}/>
//                     )
//                   })
//                 }
//              </div>
//              <div>
//                 <div>
//                   <p>YOUR CART</p>
//                   <h2>SUMMARY</h2>
//                   <p>total item : {item.length}</p>
//                 </div>
//                 <div>
//                   <p>Total Ammount {`$${totalAmount}`}</p>
//                   <button>Checkout Now</button>
//                 </div>
//              </div>
//           </div>
         
//          ) : (
//           <div>
//             <p>Your Cart Is Empty</p>
//             <NavLink to="/">
//               <button>Shop Now</button>
//             </NavLink>
//           </div>
//          ) 
//        }
//     </div>
//   )
// };

// export default Cart;




// ========================================================================================================================














import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acu, curr) => acu + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem item={item} itemIndex={index} key={item.id} />;
            })}
          </div>
          <div>
            <div>
              <p>YOUR CART</p>
              <h2>SUMMARY</h2>
              <p>Total items: {cart.length}</p> {/* Fix typo here */}
            </div>
            <div>
              <p>Total Amount: {`$${totalAmount}`}</p>
              <button>Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Your Cart Is Empty</p>
          <NavLink to="/">
            <button>Shop Now</button>
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
