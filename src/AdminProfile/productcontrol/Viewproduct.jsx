import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Viewproduct = () => {
  const [myProduct, setProduct] = useState("");
  const [count, setshowcount] = useState(0);
  const [rate, setshowrate] = useState(0);
  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: ` https://products-9fkf.onrender.com/products/${id}`,
    }).then((info) => {
      setProduct(info.data);
    });
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="bg-gray-600 mobile:w-[100%] text-center text-white ">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={myProduct.image} />
            </div>
          </div>
          {/* <div className="mx-10 text-2xl"> */}
          <h1 className="mb-[2em] text-2xl text-center">
            title: {myProduct.title}
          </h1>
          <h1 className="mb-[2em]  text-center ">
            price:
            {myProduct.price}
          </h1>
          <h1 className="mb-[2em] text-center ">
            description:
            {myProduct.description}
          </h1>
          <h1 className="mb-[2em]  text-center">
            category:
            <span className="text-red-400  text-center">
              {" "}
              {myProduct.category}
            </span>
          </h1>
          <textarea cols="40" rows="5" className="text-black w-[80%] h-[25vh]">
            {myProduct.image}
          </textarea>

          <h1 className=" text-center">image:</h1>

          <div className="flex justify-center mx-[2em]">
            <h1 className="mb-[2em]  text-center">
              Id:
              <span className="">{myProduct.id}</span>
            </h1>
          </div>

          <button
            className="btn btn-outline btn-error mb-4"
            onClick={() => navigation("/admin/products")}
          >
            <h1 className="text-white text-3xl"> Back</h1>
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Viewproduct;
