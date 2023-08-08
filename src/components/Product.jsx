import React from "react";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";


const Product = ({post}) => {

   const {cart} = useSelector((state) => state);
   const dispatch = useDispatch();

   const addToCart= () => {
       dispatch(add(post));
       toast.success("Item Aided To Cart");
   }

   const removeFromCart = () => {
       dispatch(remove(post.id));
       toast.error("Item removed from Cart");
   }


  return (
    <div>

       <div>
        <p>{post.title}</p>
       </div>

       <div>
        <p>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
       </div>

       <div>
        <img src={post.image}/>
       </div>

       <div>
        <p>${post.price}</p>
       </div>

       <div>
          {
             cart.some((p) => p.id == post.id ) ? 
             (<button onClick={removeFromCart}>Remove From Cart</button>) : 
             (<button onClick={addToCart}>Add to Cart</button>)
          }
       </div>
    </div>
  )
};

export default Product;
