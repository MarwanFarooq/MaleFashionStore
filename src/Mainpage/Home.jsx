import React from "react";
import "../Mainpage/Home.css";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-white ">
      <div className="main mobile:bg-center tablte:bg-center laptop:bg-top  ">
        {/* First page */}
        <div className="">
          <div className="mx-[1em] text-[#EF4444] text-center  tablte:flex tablte:flex-col tablte:justify-evenly tablte:items-center tablte:h-[80vh] tablte:w-[30%] ">
            <div className=" flex flex-col gap-[1em] mobile:h-[60vh] mobile:justify-end laptop:justify-center ">
              <h1 className="">Summer Collection</h1>
              <h1 className="text-5xl">Fall-Winter Collections 2023</h1>
              <p className="text-[#384354] laptop:font-extralight tablte:font-semibold tablte:text-2xl mobile:font-extrabold mobile:text-xl">
                A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.
              </p>
              <div className="mt-3">
                <Link
                  to="/shop"
                  className="btn btn-error text-white text-2xl  "
                >
                  Shop Now
                  <div className="ps-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9164 7.75739L23.1662 11.9929L18.9305 16.2426L17.5139 14.8308L19.3325 13.0061L2.8338 13.0285V15.0299H0.833801V9.02988H2.8338V11.0285L19.3429 11.0061L17.5046 9.17398L18.9164 7.75739Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* //////// */}
      </div>
      {/* second page */}

      <div className=" mobile:flex mobile:flex-col mobile: tablte:grid tablte:grid-cols-3 laptop:grid laptop:grid-cols-3 ">
        <div className="mobile:ms-[4em]">
          <h1 className="text-2xl font-extrabold w-52 ">
            Clothing Collections 2023
          </h1>
          <Link to="/shop" className="link link-error text-2xl ">
            Shop Now
          </Link>

          <img
            src="https://male-fashion-ten.vercel.app/static/media/banner-1.45fe2b268cef81900571.jpg"
            width="70%"
          />
        </div>
        <div className="mobile:ms-[4em] mobile:mt-[4em] tablte:mt-0 ">
          <img
            src="https://male-fashion-ten.vercel.app/static/media/banner-2.09aec17ea3a36d2e2a44.jpg"
            width="70%"
            alt=""
          />

          <h1 className="text-2xl font-extrabold w-52   ">
            acssories Collections 2023
          </h1>
          <Link to="/shop" className="link link-error text-2xl ">
            Shop Now
          </Link>
        </div>
        <div className="mobile:flex mobile:flex-col-reverse mobile:ms-[4em] mobile:mt-[4em] tablte:flex tablte:flex-col  tablte:mt-4">
          <h1 className="text-2xl font-extrabold w-52">
            spring Collections 2023
          </h1>

          <Link to="/shop" className="link link-error text-2xl ">
            Shop Now
          </Link>

          <img
            src="https://male-fashion-ten.vercel.app/static/media/banner-3.902e072bfedc4a1cabdf.jpg"
            width="70%"
            alt=""
          />
        </div>
        <div />
      </div>
      {/*  */}
      <div className="bg text-4xl text-white my-14  flex items-center justify-center text-center ">
        <h1 className="">Free shipping, 30-day return or refund guarantee.</h1>
      </div>
      {/*  */}
      <div className="mobile:gride mobile:gride-col-1 tablte:grid tablte:grid-cols-2 laptop:grid laptop:grid-cols-4 laptop:mx-[4em]">
        <div className="card card-compact mobile:w-[80%] mobile:ms-[2em] mobile:mb-[2em] tablte:ms-[4em] tablte:mb-[4em] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://male-fashion-ten.vercel.app/static/media/1.51632eafdeaa828f5207.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-white ">
            <div className="card-actions justify-start text-2xl text-yellow-500">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
            </div>
            <h1 className="text-2xl font-semibold">$400</h1>
          </div>
        </div>
        <div className="card card-compact  mobile:w-[80%] ms-6 mobile:ms-[2em] mobile:mb-[2em]  tablte:ms-[4em] tablte:mb-[4em] bg-base-100 shadow-xl">
          <figure>
            <img
              src=" https://male-fashion-ten.vercel.app/static/media/2.0654d29911db1fb90896.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-white ">
            <div className="card-actions justify-start text-2xl text-yellow-500">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
            </div>
            <h1 className="text-2xl font-semibold">$400</h1>
          </div>
        </div>
        <div className="card card-compact mobile:w-[80%] mobile:ms-[2em] mobile:mb-[2em] tablte:mb-[4em] tablte:ms-[4em] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://male-fashion-ten.vercel.app/static/media/3.1077aed96e883e0a7a00.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-white ">
            <div className="card-actions justify-start text-2xl text-yellow-500">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
            </div>
            <h1 className="text-2xl font-semibold">$1000</h1>
          </div>
        </div>
        <div className="card card-compact  mobile:w-[80%] mobile:ms-[2em] mobile:mb-[2em]  tablte:mb-[4em] tablte:ms-[4em] bg-base-100 shadow-xl">
          <figure>
            <img
              src=" https://male-fashion-ten.vercel.app/static/media/4.4376b13ee596258fb3ac.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-white  ">
            <div className="card-actions justify-start text-2xl text-yellow-500">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
            </div>
            <h1 className="text-2xl font-semibold">$500</h1>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Home;
