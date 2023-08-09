import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa"; // Import the specific icon from react-icons/fa
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();
   const removeFromCart = () => {
     dispatch(remove(item.id));
     toast.success("Item Removed");
  }


  return (
    <div>
      <div className="flex ">
        <div>
          <img className="h-[10rem]" src={item.image} alt="product" />
        </div>
        <div className="w-[25rem]">
          <h1>{item.title}</h1>
          <p>{item.description}</p> 
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <FaTrash /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
