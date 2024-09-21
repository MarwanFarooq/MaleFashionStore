import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProductsDetails = () => {
  const [myproduct, setproduct] = useState([]);
  const [check, setcheck] = useState(true);
  const navigation = useNavigate();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://products-9fkf.onrender.com/products`,
    }).then((info) => setproduct(info.data));
  }, [check]);

  const deletProduct = (data) => {
    axios({
      method: "delete",
      url: `https://products-9fkf.onrender.com/products/${data.id}`,
    }).then(() => {
      setcheck(!check);
    });
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="bg-red-400    w-[100%] mx-10  ">
        <div className="text-white text-2xl font-bold h-[4em]  text-center flex items-center  mobile:justify-evenly minmobile:flex-wrap mb-4 mt-3 ">
          <h1>
            <button
              className="btn btn-success text-white font-extrabold "
              onClick={() => navigation("/admin/contorlpage")}
            >
              DashBoard
            </button>
          </h1>
          <h1>
            <button
              className="btn btn-success text-white font-extrabold "
              onClick={() => navigation("/admin/users")}
            >
              User
            </button>
          </h1>
          <h1>
            <button
              className="btn btn-success text-white font-extrabold "
              onClick={() => navigation("/admin/products")}
            >
              Product
            </button>
          </h1>
        </div>
      </div>
      <div className="bg-gray-600  w-[60%]  ">
        <div className="bg-black flex justify-evenly flex-wrap">
          <h1 className="text-white font-extrabold text-4xl mx-4 my-10 ">
            Product
            <br />
            <p className="text-center">Page</p>
          </h1>
          <button
            className="btn btn-active btn-accent mt-6"
            onClick={() => navigation("/admin/addnewproduct")}
          >
            Add New Product
          </button>
        </div>
        {myproduct.map((data, index) => (
          <div key={index}>
            <div className=" mx-[4em]  flex justify-around flex-wrap items-center">
              <div className="flex flex-col ">
                <h1 className="text-white text-center text-2xl mb-5 mt-6 me-5  font-extrabold">
                  Proudect
                </h1>
                <div className="avatar">
                  <div className="mobile:w-29 mt-3 me-4 rounded">
                    <img src={data.image} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-center text-2xl font-semibold">
                  Price
                </h1>
                <h1 className="text-lime-400 text-2xl font-semibold">
                  ${data.price}
                </h1>
              </div>
            </div>

            <h1 className="text-white  font-extrabold text-2xl mx-1 my-2 mt-1 text-center ">
              Operation
            </h1>
            <div className="flex justify-around  flex-wrap mb-10 mx-[2em]">
              <button
                className="btn btn-info text-white px-10"
                onClick={() => navigation(`/admin/viewproduct/${data.id}`)}
              >
                View
              </button>
              <button
                className="btn btn-success text-white px-10"
                onClick={() => navigation(`/admin/editeproduct/${data.id}`)}
              >
                Edite
              </button>

              <button
                className="btn btn-error text-white px-10"
                onClick={() => deletProduct(data)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDetails;
