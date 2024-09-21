import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ViewUser = () => {
  const [myuser, setuser] = useState("");
  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://products-9fkf.onrender.com/users/${id}`,
    }).then((info) => setuser(info.data));
  }, []);
  return (
    <div className="flex justify-center">
      <div className="bg-gray-600 w-[50%] text-center text-white ">
        <div className="avatar">
          <div className="w-24 rounded-full">
            {myuser.gender == "Male" ? (
              <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" />
            ) : myuser.gender == "Famale" ? (
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                width="10%"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <h1 className="mb-[2em] text-2xl">
          Name: <br /> {myuser.name}
        </h1>
        <h1 className="mb-[2em]">
          Email: <br />
          {myuser.email}
        </h1>
        <h1 className="mb-[2em]">
          Password: <br />
          {myuser.password}
        </h1>
        <h1 className="mb-[2em]">
          Member: <br />
          {myuser.member}
        </h1>
        <h1 className="mb-[2em]">
          Gender: <br />
          {myuser.gender}
        </h1>
        <h1 className="mb-[2em]">
          Id: <br />
          {myuser.id}
        </h1>
        <button
          className="btn btn-outline btn-error mb-4"
          onClick={() => navigation("/admin/users")}
        >
          <h1 className="text-white text-3xl"> Back</h1>
        </button>
      </div>
    </div>
  );
};

export default ViewUser;
