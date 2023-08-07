import React from "react";
import { FaTrash } from "react-icons/fa"; // Import the specific icon from react-icons/fa

const CartItem = ({ item, itemIndex }) => {
  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="product" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p> {/* Use <p> for description */}
          <div>
            <p>{item.price}</p>
            <div>
              <FaTrash /> {/* Use the imported icon component */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
