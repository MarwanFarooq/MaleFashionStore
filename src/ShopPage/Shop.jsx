import axios from "axios";
import React, { useEffect, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { TbShoppingCartHeart } from "react-icons/tb";
import { MdRemoveShoppingCart } from "react-icons/md";

const Shop = ({ deletItems, handelpost, pricechange }) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://products-9fkf.onrender.com/products",
    }).then((info) => {
      setproducts(info.data);
    });
  }, []);

  return (
    <div className=" desktop:grid desktop:grid-cols-4 desktop:gap-[1em] desktop:mx-0  laptop:grid laptop:grid-cols-2 laptop:gap-4 laptop:ms-[5em] tablte:grid tablte:grid-cols-2 tablte:ms-[3em] mobile:grid mobile:grid-cols-1 mobile:ms-[3em]">
      {products.map((prod, index, last) => (
        <div
          key={index}
          className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark"
        >
          <div className="flex justify-center p-5 ">
            <img
              width={100}
              className="rounded-t-lg"
              src={`${prod.image}`}
              alt=""
            />
          </div>

          <div className="p-6  dark:text-white">
            <h5 className="my-5 text-center text-black  text-xl font-bold leading-tight">
              {prod.category}
            </h5>
            <p className="mb-4 text-base text-center text-surface ">
              {prod.description}
            </p>
            <div className="flex  flex-col gap-[1em]">
              <p className="  text-center text-black font-bold text-2xl ">
                {prod.price}$
              </p>
              <div className="flex justify-center text-yellow-300 text-2xl">
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
              </div>
              <div className="flex justify-between">
                <button
                  className="btn btn-success"
                  onClick={() => handelpost(prod)}
                >
                  <TbShoppingCartHeart className="text-4xl text-white" />
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => deletItems(prod)}
                >
                  <MdRemoveShoppingCart className="text-4xl text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
