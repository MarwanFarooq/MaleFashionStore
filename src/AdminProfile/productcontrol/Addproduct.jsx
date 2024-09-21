import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);
  const navigation = useNavigate();

  const Submit = () => {
    axios({
      method: "post",
      url: "https://products-9fkf.onrender.com/products",
      data: {
        title: title,
        price: price,
        description: description,
        category: category,
        image: image,
        rating: {
          rate: 0,
          count: 0,
        },
      },
    }).then(() => {
      setloading(true);
      setTimeout(() => {
        navigation("/admin/products");
      }, 3000);
    });
  };
  return (
    <div className="h-[70vh]">
      <div className="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-4 my-10 dark:bg-surface-dark ">
        <h1 className="text-center text-3xl my-4 font-extrabold">
          Add New Product
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <input
              onChange={(e) => settitle(e.target.value)}
              value={title}
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput123"
              placeholder="Title"
            />
            <label
              htmlFor="emailHelp123"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
            >
              Title
            </label>
          </div>

          <div className="relative mb-6" data-twe-input-wrapper-init>
            <input
              onChange={(e) => setprice(e.target.value)}
              value={price}
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput124"
              aria-describedby="emailHelp124"
              placeholder="price"
            />
            <label
              htmlFor="exampleInput124"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
            >
              price
            </label>
          </div>
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          <input
            onChange={(e) => setdescription(e.target.value)}
            value={description}
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput125"
            placeholder="description"
          />
          <label
            htmlFor="exampleInput125"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
          >
            description
          </label>
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          <input
            onChange={(e) => setcategory(e.target.value)}
            value={category}
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput126"
            placeholder="category"
          />
          <label
            htmlFor="exampleInput126"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
          >
            category
          </label>
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          <input
            onChange={(e) => setimage(e.target.value)}
            value={image}
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput126"
            placeholder="image"
          />
          <label
            htmlFor="exampleInput126"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
          >
            image
          </label>
        </div>

        <div className="flex gap-9">
          <button className="btn btn-outline" onClick={Submit}>
            {loading ? (
              <span className="loading loading-ball loading-lg"></span>
            ) : (
              <h1>Submite</h1>
            )}
          </button>
          <button
            className="btn btn-outline"
            onClick={() => navigation("/admin/products")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
{
  /* <div className="w-full bg-slate-500 ">
  <h1 className="text-center text-3xl font-extrabold">Add New Product</h1>
  <div className="flex flex-col gap-[6em] mx-10  items-center">
    <input
      onChange={(e) => settitle(e.target.value)}
      value={title}
      type="text"
      placeholder="Title"
      className="input input-bordered input-md w-full max-w-xs mt-[2em] "
    />

    <input
      onChange={(e) => setprice(e.target.value)}
      value={price}
      placeholder="price"
      type="number"
      className="input input-bordered input-md w-full max-w-xs"
    />

    <textarea
      onChange={(e) => setdescription(e.target.value)}
      value={description}
      className="textarea textarea-bordered w-[50%]  "
      placeholder="description"
    ></textarea>

    <input
      onChange={(e) => setcategory(e.target.value)}
      value={category}
      placeholder="category"
      className="  input input-bordered input-md w-full max-w-xs"
    ></input>

    <textarea
      onChange={(e) => setimage(e.target.value)}
      value={image}
      placeholder="image"
      className="textarea textarea-bordered w-[30%] h-[10vh]"
    ></textarea>

    <div className="flex gap-9">
      <button className="btn btn-outline" onClick={Submit}>
        {loading ? (
          <span className="loading loading-ball loading-lg"></span>
        ) : (
          <h1>Submite</h1>
        )}
      </button>
      <button
        className="btn btn-outline"
        onClick={() => navigation("/admin/products")}
      >
        Back
      </button>
    </div>
  </div>
</div>; */
}
