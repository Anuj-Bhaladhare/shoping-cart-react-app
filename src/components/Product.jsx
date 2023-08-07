import React, { useState } from "react";
import { useSelector } from "react-redux";


const Product = ({post}) => {

   const {Cart} = useSelector((state) => state);


  return (
    <div>

       <div>
        <p>{post.title}</p>
       </div>

       <div>
        <p>{post.description}</p>
       </div>

       <div>
        <img src={post.image}/>
       </div>

       <div>
        <p>{post.price}</p>
       </div>

       <button>
          {
             Cart.some((p) => p.id == post.id ) ? (<p>Remove From Cart</p>) : (<p>Add to Cart</p>)
          }
       </button>
    </div>
  )
};

export default Product;
