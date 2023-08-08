import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa"; // Import the specific icon from react-icons/fa
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();
   const removeFromCart = () => {
     dispatch(remove(item.id));
     toast.success("Item Removed");
  }


  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="product" />
        </div>
        <div>
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
