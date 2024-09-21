import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router";
import axios from "axios";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const Signin = ({ setuserloged, userloged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [handelemail, sethandelEmail] = useState(false);
  const [stoploading, setstoploading] = useState(false);
  const [handelpassword, sethandelpassword] = useState(false);
  const [showthepassword, setshowpassword] = useState(false);
  const [massage, setmasssage] = useState(false);
  const navigation = useNavigate();

  const validtion = () => {
    sethandelEmail(false);
    sethandelpassword(false);
    setstoploading(false);
  };
  const handelform = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      sethandelEmail(true);
    } else if (password.length < 6 || password == "") {
      validtion();
      sethandelpassword(true);
    } else {
      validtion();
      axios({
        method: "get",
        url: "https://products-9fkf.onrender.com/users",
      }).then((info) => {
        info.data.filter((data) => {
          if (data.email == email && data.password == password) {
            setstoploading(true);
            setTimeout(() => {
              localStorage.K = data.id;
              localStorage.U = data.member;
              setuserloged(!userloged);
              {
                data.member == "M"
                  ? navigation("/sign/userlayout")
                  : data.member == "A" && navigation("/admin");
              }
            }, 3000);
          } else {
            setstoploading(true);
            setTimeout(() => {
              validtion();
              setmasssage(true);
            }, 3000);
          }
        });
      });
    }
  };
  const showpassword = () => {
    setshowpassword(!showthepassword);
  };

  return (
    <div className="sign w-full h-[70vh] flex items-center bg-white">
      <div className="mx-auto block max-w-sm rounded-lg bg-white p-6 shadow-4 mobile:w-[100%] ">
        <section>
          {massage && (
            <h1 className="text-red-500 font-semibold text-xl text-center mb-10">
              Invalid Email or Password
            </h1>
          )}
          <div className="relative mb-12" data-twe-input-wrapper-init>
            <div className="flex ">
              <input
                type="email"
                className="peer text-black block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {handelemail ? (
                <ImCross className="text-red-600 text-xl " />
              ) : (
                <FaCheck className="text-green-700 text-xl" />
              )}

              <label
                htmlFor="exampleInputEmail1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  text-transparent transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              >
                Email address
              </label>
            </div>
            <small
              id="emailHelp"
              className="absolute mt-2 w-full text-dark  "
              data-twe-input-helper-ref
            >
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="relative mb-6" data-twe-input-wrapper-init>
            <div className="flex">
              <button className="text-2xl text-blue-500" onClick={showpassword}>
                {showthepassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </button>
              <input
                type={showthepassword ? `text` : `password`}
                className="peer text-black block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none     [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* setPassword(e.target.value) */}
              <div className="flex items-center"></div>
              {handelpassword ? (
                <ImCross className="text-red-600 text-xl " />
              ) : (
                <FaCheck className="text-green-700 text-xl" />
              )}
              <label
                htmlFor="exampleInputPassword1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-transparent transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:-translate-x-[-1.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              >
                Password{" "}
              </label>
            </div>
          </div>

          <div className="mb-6 block min-h-[1.5rem] ps-[1.5rem]">
            <input
              className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
              type="checkbox"
              value=""
              id="checkboxDefault"
            />
            <label
              className="inline-block ps-[0.15rem] hover:cursor-pointer"
              htmlFor="checkboxDefault"
            >
              Check me out
            </label>
          </div>

          <div className=" mobile:gap-3 mobile:flex mobile:flex-col   tablte:gap-10 tablte:flex tablte:flex-row ">
            {localStorage.U ? (
              <button className="btn" disabled="disabled">
                Log in
              </button>
            ) : (
              <button
                type="submit"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                onClick={handelform}
              >
                {stoploading ? (
                  <span className="loading loading-ring loading-md"></span>
                ) : (
                  <h1>log in</h1>
                )}
              </button>
            )}

            <button
              type="submit"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              onClick={() => navigation("/createaccount")}
            >
              Create new acc
            </button>
          </div>
          {localStorage.U ? (
            <h1 className="text-red-600 text-center mt-4 font-extrabold">
              You Need to Sign Out First
            </h1>
          ) : (
            ""
          )}
        </section>
      </div>
      ;
    </div>
  );
};

export default Signin;
