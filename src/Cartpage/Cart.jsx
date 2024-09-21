import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";

const Cart = ({
  deletItems,
  incItems,
  decItems,
  setcheckCart,
  myproducts,
  setlenght,
  pricechange,
}) => {
  const [price, settheprice] = useState("");
  const [check, setcheck] = useState(false);
  useEffect(() => {
    setcheckCart(myproducts);
    const amount = myproducts.map((info) => {
      return +info.price * info.items;
    });
    console.log(amount);
    if (amount.length > 1) {
      const test = amount.reduce((x, y) => {
        return x + y;
      });
      settheprice(Math.round(test));
    } else {
      amount.map((info) => {
        settheprice(info);
      });
    }
  }, [check]);

  return (
    <div className="bg-white">
      <div className="w-full flex justify-center">
        <div className=" mobile:w-[100%] mobile:mt-10 mobile:mx-[2em]  bg-slate-300">
          <div className="mobile:ms-10 ">
            <h1 className="text-gray-800 mt-5 text-center font-semibold ">
              Credit Total
            </h1>

            <div className="w-[100%] flex justify-center">
              <input
                type="text"
                placeholder={`You can't touch this`}
                className="input text-black input-bordered minmobile:w-20 minmobile:relative minmobile:right-5 mobile:w-[100%] tablte:w-[100%] laptop:w-[15em]  max-w-xs text-start"
                disabled
                value={`${price && price} `}
              />
            </div>
          </div>
          <div className="flex justify-center gap-[1em] flex-wrap items-center mb-6 ">
            <button className="btn btn-sm  btn-active btn-success mobile:px-11  tablte:px-17 mt-7 mb-7 mobile:mt-3 mobile:mb-3 mobile:w-2 minmobile:mt-3 minmobile:mb-3 minmobile:w-1 ">
              <p className="text-white">Pay Now</p>
            </button>

            <button className="flex flex-col items-center ">
              <svg
                width="30"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 9C4 8.44772 4.44772 8 5 8H9C9.55228 8 10 8.44772 10 9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 3C1.79086 3 0 4.79086 0 7V17C0 19.2091 1.79086 21 4 21H20C22.2091 21 24 19.2091 24 17V7C24 4.79086 22.2091 3 20 3H4ZM20 5H4C2.89543 5 2 5.89543 2 7V14H22V7C22 5.89543 21.1046 5 20 5ZM22 16H2V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V16Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-xs text-center ">Pay Credit</p>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        {myproducts.length == 0 ? (
          <div className=" flex justify-center  ">
            <div className="mobile:w-[100%] tablte:w-[50%]">
              <img
                src="https://male-fashion-ten.vercel.app/static/media/empty-shopping.a10c4f68e1ba633358c1.jpg"
                alt=""
              />
            </div>
          </div>
        ) : (
          myproducts.map((info, index) => (
            <div
              key={index}
              className="block rounded-lg bg-white shadow-secondary-1 text-center"
            >
              <div className="mobile:p-16 tablte:p-10">
                <div className="text-black">
                  <h5 className="mb-2 text-xl font-medium leading-tight">
                    {info.category}
                    <br />
                    {info.title}
                  </h5>
                </div>

                <div className="avatar flex justify-between">
                  <div className="w-20 rounded  ">
                    <img src={info.image} alt="Tailwind-CSS-Avatar-component" />
                  </div>
                  <div className="flex">
                    <p className="text-2xl text-red-400">
                      {Math.round(info.price * info.items)}$
                    </p>
                    <p className="text-2xl text-blue-600">
                      Items:
                      {info.items}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex  flex-wrap gap-2">
                  <button
                    type="button"
                    href="#"
                    className="inline-block rounded bg-info-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    onClick={() => {
                      incItems(info);
                      setcheck(!check);
                    }}
                  >
                    increase
                  </button>
                  {info.items <= 1 ? (
                    <button
                      className="btn"
                      disabled="disabled"
                      onClick={() => {
                        decItems(info);
                      }}
                    >
                      Decrease
                    </button>
                  ) : (
                    <button
                      type="button"
                      href="#"
                      className="inline-block rounded bg-info-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      onClick={() => {
                        decItems(info);
                        setcheck(!check);
                      }}
                    >
                      decrease
                    </button>
                  )}
                  <button
                    className="mx-6"
                    onClick={() => {
                      deletItems(info, setlenght(myproducts.length - 1));
                      setcheck(!check);
                    }}
                  >
                    <BsTrash3Fill className="text-2xl text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
