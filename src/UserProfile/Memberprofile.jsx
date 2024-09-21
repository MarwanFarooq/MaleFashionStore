import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Memberprofile = ({ check }) => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://products-9fkf.onrender.com/users/${localStorage.K}`,
    }).then((info) => {
      setuser(info.data);
    });
  }, [check]);
  const navigation = useNavigate();
  return (
    <div>
      {user && (
        <div className="flex justify-center">
          {" "}
          <div className="avatar online w-[30%]">
            <div className="w-30 rounded-full">
              {user.gender == "Male" ? (
                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" />
              ) : user.gender == "Famale" ? (
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  width="10%"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
      <hr className="mt-[4em] text-center" />
      <h1 className="text-green-500 text-3xl text-center font-bold">
        {user && user.name}
      </h1>
      <div>
        <p className="text-2xl text-center ">
          {localStorage.U == "A" ? `Admin` : `Member`} in These website
          <br />
          Gender : {user && user.gender}
        </p>
      </div>
      <hr className="mt-[4em]" />

      <div className="bg-gray-700 mt-[4em]">
        <h1 className="text-center mt-[3em] text-white text-4xl mb-7 font-extrabold">
          Profile Detailes
        </h1>
        <div className="w-full h-[50vh]  flex items-center  justify-center ">
          <div className="w-[50%]">
            <div className="mt-5 mb-5">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  disabled
                  defaultValue={user.name}
                  type="text"
                  className="grow"
                  placeholder="name"
                />
              </label>
            </div>
            <div>
              {" "}
              <label className="input input-bordered flex items-center gap-2">
                <input
                  disabled
                  defaultValue={user && user.email}
                  type="text"
                  className="grow"
                  placeholder="email"
                />
              </label>
            </div>
            <div className="mt-5 mb-5">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  disabled
                  defaultValue={user && user.password}
                  type="password"
                  className="grow"
                  placeholder="password"
                />
              </label>
            </div>
            <div className="mt-5 mb-5">
              {" "}
              <label className="input input-bordered flex items-center gap-2">
                <input
                  disabled
                  defaultValue={user && user.gender}
                  type="text"
                  className="grow"
                  placeholder="gender"
                />
              </label>
            </div>
            <div className="mt-5 mb-5">
              <label className="input input-bordered flex items-center gap-2">
                {localStorage.U == "M" ? (
                  <input
                    disabled
                    type="text"
                    defaultValue={"Member"}
                    className="grow"
                    placeholder="member"
                  />
                ) : localStorage.U == "A" ? (
                  <input
                    disabled
                    type="text"
                    defaultValue={"Admin"}
                    className="grow"
                    placeholder="member"
                  />
                ) : (
                  ""
                )}
              </label>
            </div>
            <div className="flex justify-center">
              <button
                className="btn btn-outline btn-error"
                onClick={() => navigation(`/sign/userlayout/`)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memberprofile;
