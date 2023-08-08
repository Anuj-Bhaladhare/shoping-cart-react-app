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
       <div className="h-[26rem] rounded-md shadow-2xl w-[20rem] m-4 p-4 flex flex-col justify-center items-center gap-2 hover:scale-110 ">
          <div>
            <p className="font-bold text-[1.2rem]">{post.title.split(" ").slice(0, 10).join(" ") + "..."}</p>
          </div>

          <div>
            <p className="text-[0.8rem]">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
          </div>

          <div>
            <img className="h-[12rem]" src={post.image} alt={post.title} />
          </div>

          <div className="flex gap-8 justify-center items-center">
            <div>
              <p className="font-bold">${post.price}</p>
            </div>

            <div>
              {
                  itemCart === true ? 
                  (<button className="bg-green-500 font-bold border border-blue-700 rounded-full p-1 pl-5 pr-5 text-white" onClick={addToCart}>Add to Cart</button>) : 
                  (<button className="bg-green-500 border border-blue-700 rounded-full p-1 pl-5 pr-5 text-white" onClick={removeFromCart}>Remove From Cart</button>)
              }
            </div>
          </div>
        </div>
  );
};

export default Product;
