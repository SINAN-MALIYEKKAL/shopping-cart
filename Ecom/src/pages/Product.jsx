import React, { useEffect, useState } from "react";
import axios from "axios";
import Relatedproduct from "../components/Relatedproduct";
import { useParams } from "react-router-dom";

export default function Product() {
  const [data, setData] = useState([]);
  const { productid } = useParams();
  console.log(productid);

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://e-commerce-backend-jt6u.onrender.com/api/product/get/${productid}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData([jsonData]);
        console.log([jsonData]);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [productid]); // Add productid as a dependency

  // Post to Cart function
  const postCart = async () => {
    const datas = {
      userId: "675a745bb02c28abec3f4673", 
      productId: productid, 
    };

    try {
      const response = await axios.post(
        "https://e-commerce-backend-jt6u.onrender.com/api/cart/add",
        datas
      );
      console.log("Added to Cart:", response.data);
      alert("Product added to cart successfully!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add product to cart!");
    }
  };

  return (
    <>
      <div className="bg-[#fff3e3] border-gray-500 opacity-60 text-sm border-0 p-5 items-center">
        <span>Home &emsp; &gt; &emsp; Shop &emsp; &gt; &emsp; ProductName</span>
      </div>

      {/* Product section */}
      <div className="flex justify-center pt-10">
        {data.map((it) => (
          <div key={it._id} className="flex flex-col md:flex-row gap-16 w-[80%]">
            <img src={it.images} className="w-[20rem] rounded-md" alt={it.name} />

            <div className="text-black flex flex-col gap-6">
              <p className="text-[30px] font-semibold">{it.name}</p>
              <p className="text-md font-semibold border-gray-500 opacity-50">
                {it.price}
              </p>
              <p className="text-yellow-500 lg:text-[20px] flex items-center">
                &#9733; &#9733; &#9733; &#9734;
                <span className="border-l-2 border-gray-600 h-6 mx-3"></span>
                <span className="text-gray-500 text-sm">4 Customer reviews</span>
              </p>

              <div className="lg:w-[30rem] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                neque molestiae in vitae, voluptatem ad tenetur numquam et
                voluptate inventore repudiandae, deleniti harum eos accusamus.
                Minima quidem qui doloribus officiis?
              </div>
              <button
                onClick={postCart} // Call the postCart function here
                className="w-32 text-sm py-2 border-2 border-black text-black rounded-lg bg-transparent hover:bg-black hover:text-white transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Relatedproduct />
    </>
  );
}
