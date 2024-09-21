import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditeUser = ({ checkChangeGender, setCheckChangeGender }) => {
  const [myuser, setuser] = useState("");
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const navigation = useNavigate();
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
      setloading(true);
      setTimeout(() => {
        setCheckChangeGender(!checkChangeGender);
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
              onChange={(e) => setuser({ ...myuser, name: e.target.value })}
              value={myuser && myuser.name}
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-warning-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput123"
              placeholder="Name"
            />
          </div>

          <div className="relative mb-6" data-twe-input-wrapper-init>
            <input
              onChange={(e) => setuser({ ...myuser, email: e.target.value })}
              value={myuser && myuser.email}
              placeholder="Email"
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-warning-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput124"
              aria-describedby="emailHelp124"
            />
          </div>
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          <input
            onChange={(e) => setuser({ ...myuser, password: e.target.value })}
            value={myuser && myuser.password}
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-warning-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput125"
            placeholder="password"
          />
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          <select
            onChange={(e) => setuser({ ...myuser, member: e.target.value })}
            value={myuser && myuser.member}
            className="peer block min-h-[auto] w-full rounded border-0 bg-warning-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          >
            <option label="Member"></option>
            <option label="Member">M</option>
            <option label="Admin">A</option>
          </select>
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          <select
            onChange={(e) => setuser({ ...myuser, gender: e.target.value })}
            value={myuser && myuser.gender}
            className="peer block min-h-[auto] w-full rounded border-0 bg-warning-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          >
            <option label="Gender"></option>
            <option>Male</option>
            <option>Famale</option>
          </select>
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

export default EditeUser;
