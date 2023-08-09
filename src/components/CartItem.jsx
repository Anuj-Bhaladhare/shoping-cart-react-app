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
    <div className="flex mt-6 p-4 rounded-xl shadow-2xl items-center">
      <div className="flex gap-5">
        <div className=" h-[17rem] w-[13rem] flex justify-center items-center">
          <img className="max-h-[15rem]" src={item.image} alt="product" />
        </div>
        <div className="flex flex-col max-w-[28rem] justify-between">
          <h1 className="font-bold text-[1.2rem]">{item.title}</h1>
          <p className="text-[0.8rem]">{item.description}</p> 
          <div className="flex justify-between p-5">
            <p className="font-bold text-[1.2rem]">${item.price}</p>
            <div className="text-red-500 font-bold text-[1.2rem]" onClick={removeFromCart}>
              <FaTrash /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
