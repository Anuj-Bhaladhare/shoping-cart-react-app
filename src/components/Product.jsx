import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
//   const { cart } = useSelector((state) => state); // Ensure that cart is an array
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    setItemCart(false)
    toast.success("Item Added To Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    setItemCart(true)
    toast.error("Item removed from Cart");
  };

//   const isItemInCart = cart.some((item) => item.id === post.id);
     const[itemCart, setItemCart] = useState(true);

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>

      <div>
        <img src={post.image} alt={post.title} />
      </div>

      <div>
        <p>${post.price}</p>
      </div>

      <div>
        {
            itemCart === true ? 
            (<button onClick={addToCart}>Add to Cart</button>) : 
            (<button onClick={removeFromCart}>Remove From Cart</button>)
        }
      </div>
    </div>
  );
};

export default Product;
