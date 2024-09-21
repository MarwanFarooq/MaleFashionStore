import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const EditeAdminProfile = ({
  setcheck,
  check,
  checkChangeGender,
  setCheckChangeGender,
}) => {
  const [myuser, setuser] = useState("");
  const navigation = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://products-9fkf.onrender.com/users/${id}`,
    }).then((info) => setuser(info.data));
  }, []);
  const handeledite = () => {
    axios({
      method: "put",
      url: `https://products-9fkf.onrender.com/users/${id}`,
      data: myuser,
    }).then(() => {
      setcheck(!check);
      setCheckChangeGender(!checkChangeGender);
      if (localStorage.U == myuser.member) {
        navigation("/admin/profile");
      } else {
        localStorage.U = "M";
        navigation("/admin/profile");
      }
    });
  };

  return (
    <div>
      <div className="bg-gray-700 mt-[4em]">
        <h1 className="text-center mt-[3em] text-white text-4xl mb-7 font-extrabold">
          Profile Detailes
        </h1>
        <div className="w-full h-[50vh]  flex items-center  justify-center ">
          <div className="w-[50%]">
            <div className="mt-5 mb-5">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  onChange={(e) => setuser({ ...myuser, name: e.target.value })}
                  value={myuser && myuser.name}
                  type="text"
                  className="grow"
                />
              </label>
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  onChange={(e) =>
                    setuser({ ...myuser, email: e.target.value })
                  }
                  value={myuser && myuser.email}
                  className="grow"
                  placeholder="email"
                />
              </label>
            </div>
            <div className="mt-5 mb-5">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  onChange={(e) =>
                    setuser({ ...myuser, password: e.target.value })
                  }
                  value={myuser && myuser.password}
                  type="text"
                  className="grow"
                  placeholder="password"
                />
              </label>
            </div>
            <div className="mt-5 mb-5">
              <div className="flex flex-col gap-3">
                <select
                  onChange={(e) =>
                    setuser({ ...myuser, gender: e.target.value })
                  }
                  value={myuser && myuser.gender}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option label="Select Gender"></option>
                  <option>Male</option>
                  <option>Famale</option>
                </select>
              </div>
            </div>
            <div className="mt-5 mb-5">
              <select
                onChange={(e) => setuser({ ...myuser, member: e.target.value })}
                value={myuser && myuser.member}
                className="select select-bordered w-full max-w-xs"
              >
                <option label="Select Member"></option>
                <option label="Member">M</option>
                <option label="Admin">A</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                className="btn btn-outline btn-error"
                onClick={handeledite}
              >
                Edite Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditeAdminProfile;
