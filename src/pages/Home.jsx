import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

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
        setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    featchCartData();
  }, []);

  return (
    <div className="flex justify-center items-center mt-6 mx-auto max-w-[68rem]">
      {
        loading ? (<Spinner />) : (
            posts.length > 0 ? (
              <div>
                <div className="flex flex-wrap justify-between">
                  {
                    posts.map( (post) => {
                      return (
                        <Product key={post.id} post={post} />
                      )
                    })
                  }
                </div>
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
