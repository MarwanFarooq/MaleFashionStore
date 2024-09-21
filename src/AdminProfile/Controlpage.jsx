import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Controlpage = ({
  numberproduct,
  usersnumber,
  setnameupteded,
  nameupteded,
}) => {
  const [lastuser, setlastuser] = useState(null);
  const [lastprod, setlastprod] = useState(null);

  const navigiton = useNavigate();
  useEffect(() => {
    axios({
      method: "get",
      url: "https://products-9fkf.onrender.com/users",
    }).then((info) => {
      setlastuser(info.data[usersnumber - 1]);
    });
  }, []);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://products-9fkf.onrender.com/products",
    }).then((info) => {
      setlastprod(info.data[numberproduct - 1]);
    });
  }, []);

  return (
    <div>
      <div className="bg-slate- 400  mobile:w-[100%]  ">
        <div className="text-white text-2xl font-bold h-[4em]  text-center flex items-center  mobile:justify-evenly minmobile:flex-wrap ">
          <button
            onClick={() => navigiton("/admin/contorlpage")}
            className="btn btn-success text-white "
          >
            <h1>DashBoard</h1>
          </button>
          <button
            onClick={() => navigiton("/admin/users")}
            className="btn btn-success text-white "
          >
            <h1>User</h1>
          </button>
          <button
            className="btn btn-success text-white "
            onClick={() => navigiton("/admin/products")}
          >
            <h1>Product</h1>
          </button>
        </div>
      </div>
      <div className="mobile:w-full mobile:flex mobile:flex-col mobile:items-center mobile:gap-10 mobile:mt-10 minmobile:w-full minmobile:flex minmobile:flex-col minmobile:items-center minmobile:gap-10 minmobile:mt-10 ">
        <div className="bg-green-900 mx-10 w-[80%] rounded-3xl mobile:flex mobile:flex-col  ">
          <h1 className="text-white text-center text-4xl font-extrabold mt-6">
            User
          </h1>
          <div className="flex flex-col  mobile:gap-[3em] mobile:my-[3em] text-blue-600 text-2xl ms-6 font-semibold text-center">
            <h2>
              Number of user: <span className="text-white ">{usersnumber}</span>
            </h2>
            <h2>
              Last User Regester:{" "}
              <span className="text-white ">{lastuser?.name}</span>
            </h2>
          </div>
        </div>
        <div className="bg-green-900 w-[80%] rounded-3xl ">
          <h1 className="text-white text-center text-4xl font-extrabold mt-6 ">
            Products
          </h1>
          <div className="flex flex-col  mobile:gap-[3em] mobile:my-[3em] text-blue-600 text-2xl ms-6 font-semibold text-center">
            <h2>
              Number of Product:{" "}
              <span className="text-white ">{numberproduct}</span>
            </h2>
            <h2>
              Last Product Regester:
              <span className="text-white text-xl mx-2 ">
                {lastprod?.title}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controlpage;
