import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState();
  const [posts, setPosts] = useState([]);

  const featchCartData = async() => {
    setLoading(true);
    try{
        const responce = await fetch(API_URL);
        const data = await responce.json();

        setPosts(data);
    }
    catch(error) {
        console.log(error);
    }
    setLoading(false);
  }

  useEffect( () => {
    featchCartData();
  }, []);

  return (
    <div>
      {
        loading ? (<Spinner />) : (
            posts.length > 0 ? (
              <div>
                 {
                   posts.map( (post) => {
                    return (
                      <Product key={post.id} post={post} />
                    )
                   })
                 }
              </div>
            ) : (
              <div>No Post Found</div>
            )
        )
      }
    </div>
  )
};

export default Home;
