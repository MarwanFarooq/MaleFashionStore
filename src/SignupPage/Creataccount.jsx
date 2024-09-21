import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
const Creataccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgender] = useState("");
  const [gendervalidation, setvalidationgender] = useState(false);
  const [handelemail, sethandelEmail] = useState(false);
  const [handelname, sethandelName] = useState(false);
  const [stoploading, setstoploading] = useState(false);
  const [handelpassword, sethandelpassword] = useState(false);
  const [data, setdata] = useState([]);

  const navigation = useNavigate();

  const validtion = () => {
    sethandelEmail(false);
    sethandelpassword(false);
    sethandelName(false);
    setstoploading(true);
    setvalidationgender(false);
  };
  const handelform = () => {
    if (name == "" || name == " ") {
      sethandelName(true);
      setstoploading(false);
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      validtion();
      sethandelEmail(true);
      setstoploading(false);
    } else if (password.length < 6) {
      validtion();
      sethandelpassword(true);
      setstoploading(false);
    } else if (gender == "") {
      setvalidationgender(true);
    } else {
      validtion();
      const thenew = data.filter((info) => {
        return info.email == email;
      });
      if (thenew.length > 0) {
        setstoploading(true);
        setTimeout(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! The email Exist Befor ",
            footer: '<a href="#">Why do I have this issue?</a>',
          }).then(() => {
            navigation("/");
          });
        }, 2000);
      } else {
        axios({
          method: "post",
          url: "https://products-9fkf.onrender.com/users",
          data: {
            name: name,
            email: email,
            password: password,
            gender: gender,
            member: "M",
          },
        }).then(() => {
          setTimeout(() => {
            navigation("/");
          }, 3000);
        });
      }
    }
  };
  useEffect(() => {
    axios({
      method: "get",
      url: " https://products-9fkf.onrender.com/users",
    }).then((info) => setdata(info.data));
  }, []);

  return (
    <div className="h-[70vh] bg-slate-200  pt-[9em] ">
      <div className="mx-auto block max-w-sm rounded-lg bg-slate-200 p-6 shadow-4 ">
        <div className="relative mb-6" data-twe-input-wrapper-init>
          <div className="flex gap-5 items-center ">
            {handelname ? (
              <span>
                <h1 className="text-red-500 font-medium">Name:</h1>
              </span>
            ) : (
              <span>
                <h1 className="text-blue-500 font-medium">Name:</h1>
              </span>
            )}
            <input
              type="text"
              className={`input input-bordered  ${
                handelname ? "input-error" : "input-info "
              } w-full max-w-xs peer block min-h-[auto]  rounded border-0 bg-transparent px-1 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-transparent transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] peer-focus:-translate-x-[-4.9rem]  peer-focus:text-blue-700 peer-focus:scale-[0.8]  peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none `}
            >
              name
            </label>

            {handelname ? (
              <ImCross className=" text-red-600 text-xl " />
            ) : (
              <FaCheck className="text-green-700 text-xl" />
            )}
          </div>
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          <div className="flex gap-5 items-center">
            {handelemail ? (
              <span>
                <h1 className="text-red-500 font-medium">Email:</h1>
              </span>
            ) : (
              <span>
                <h1 className="text-blue-500 font-medium">Email:</h1>
              </span>
            )}
            <input
              type="text"
              className={`input input-bordered  ${
                handelemail ? "input-error" : "input-info "
              } w-full max-w-xs peer block min-h-[auto]   rounded border-0 bg-transparent px-1 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0`}
              // className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {handelemail ? (
              <ImCross className=" text-red-600 text-xl " />
            ) : (
              <FaCheck className="text-green-700 text-xl" />
            )}
            <label
              className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-transparent ${
                handelemail
                  ? "peer-focus:text-red-700"
                  : "peer-focus:text-blue-700"
              } transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-focus:-translate-x-[-4.9rem]  peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none `}
            >
              Email
            </label>
          </div>
        </div>

        {/* <!--Password input--> */}
        <div className="relative mb-6" data-twe-input-wrapper-init>
          <div className="flex gap-5 items-center">
            {handelpassword ? (
              <span>
                <h1 className="text-red-500 font-medium">password:</h1>
              </span>
            ) : (
              <span>
                <h1 className="text-blue-500 font-medium">password:</h1>
              </span>
            )}
            <input
              type="password"
              className={`input input-bordered  ${
                handelpassword ? "input-error" : "input-info "
              } w-full max-w-xs peer block min-h-[auto]   rounded border-0 bg-transparent px-1 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0`}
              // className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputPassword2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {handelpassword ? (
              <ImCross className=" text-red-600 text-xl " />
            ) : (
              <FaCheck className="text-green-700 text-xl" />
            )}
            <label
              className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-transparent ${
                handelpassword
                  ? "peer-focus:text-red-700"
                  : "peer-focus:text-blue-700"
              } transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] peer-focus:scale-[0.8] peer-focus:-translate-x-[-4.9rem]   peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none `}
            >
              password
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <select
            onChange={(e) => setgender(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option label="Select Gender"></option>
            <option>Male</option>
            <option>Famale</option>
          </select>
          {gendervalidation && (
            <h1 className="text-red-500"> must chosse gender </h1>
          )}
          <button
            type="submit"
            className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            onClick={handelform}
          >
            {stoploading ? (
              <span className="loading loading-ring loading-md"></span>
            ) : (
              <h1>Create now</h1>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Creataccount;
