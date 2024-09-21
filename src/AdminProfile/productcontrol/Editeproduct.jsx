import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Editeproduct = () => {
  const [myProduct, setProduct] = useState("");
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const navigation = useNavigate();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://products-9fkf.onrender.com/products/${id}`,
    }).then((info) => setProduct(info.data));
  }, []);
  const handeledite = () => {
    axios({
      method: "put",
      url: `https://products-9fkf.onrender.com/products/${id}`,
      data: myProduct,
    }).then(() => {
      setloading(true);
      setTimeout(() => {
        navigation("/admin/contorlpage");
      }, 1000);
    });
  };

  return (
    <div className="h-[70vh]">
      <div className="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-4 my-10 dark:bg-surface-dark ">
        <h1 className="text-center text-3xl my-4 font-extrabold">
          Edit Product
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <input
              onChange={(e) =>
                setProduct({ ...myProduct, title: e.target.value })
              }
              value={myProduct && myProduct.title}
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput123"
              placeholder="Title"
            />
          </div>

          <div className="relative mb-6" data-twe-input-wrapper-init>
            <input
              onChange={(e) =>
                setProduct({ ...myProduct, price: e.target.value })
              }
              value={myProduct && myProduct.price}
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput124"
              aria-describedby="emailHelp124"
              placeholder="price"
            />
          </div>
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          <input
            onChange={(e) =>
              setProduct({ ...myProduct, description: e.target.value })
            }
            value={myProduct && myProduct.description}
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput125"
            placeholder="description"
          />
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          <input
            onChange={(e) =>
              setProduct({ ...myProduct, category: e.target.value })
            }
            value={myProduct && myProduct.category}
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput126"
            placeholder="category"
          />
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          <input
            onChange={(e) =>
              setProduct({ ...myProduct, image: e.target.value })
            }
            value={myProduct && myProduct.image}
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput126"
            placeholder="image"
          />
        </div>
        <button className="btn btn-outline mb-[2em]" onClick={handeledite}>
          {loading ? (
            <span className="loading loading-ball loading-lg"></span>
          ) : (
            <h1>Submite</h1>
          )}
        </button>
      </div>
    </div>
  );
};

export default Editeproduct;
