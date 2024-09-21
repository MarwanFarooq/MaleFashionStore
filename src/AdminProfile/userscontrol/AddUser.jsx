import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgender] = useState("");
  const [member, setmember] = useState("");
  const [loading, setloading] = useState(false);
  const [gendervalidation, setvalidationgender] = useState(false);
  const [membervalidation, setvalidationmember] = useState(false);
  const [handelemail, sethandelEmail] = useState(false);
  const [handelname, sethandelName] = useState(false);
  const [stoploading, setstoploading] = useState(false);
  const [handelpassword, sethandelpassword] = useState(false);
  const navigation = useNavigate();

  const validtion = () => {
    sethandelEmail(false);
    sethandelpassword(false);
    sethandelName(false);
    setstoploading(true);
    setvalidationgender(false);
    setvalidationmember(false);
  };
  const Submit = () => {
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
    } else if (member == "") {
      validtion();
      setvalidationmember(true);
    } else {
      validtion();
      axios({
        method: "post",
        url: "https://products-9fkf.onrender.com/users",
        data: {
          name: name,
          email: email,
          password: password,
          gender: gender,
          member: member,
        },
      }).then(() => {
        setloading(true);
        setTimeout(() => {
          navigation("/admin/users");
        }, 3000);
      });
    }
  };
  return (
    <div className="h-[70vh]">
      <div className="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-4 my-10 dark:bg-surface-dark ">
        <h1 className="text-center text-3xl my-4 font-extrabold">
          Edit Product
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative mb-6" data-twe-input-wrapper-init>
            {handelname ? (
              <label
                htmlFor=""
                className="text-red-600 text-2xl font-bold text-center "
              >
                Invalid-_-Name
              </label>
            ) : (
              <label
                htmlFor=""
                className="text-black text-2xl font-bold text-center "
              >
                Name:
              </label>
            )}
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-warning-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput123"
              placeholder="Name"
            />
          </div>

          <div className="relative mb-6" data-twe-input-wrapper-init>
            {handelemail ? (
              <label
                htmlFor=""
                className="text-red-600 text-2xl font-bold text-center "
              >
                Invalid-_-Email
              </label>
            ) : (
              <label
                htmlFor=""
                className="text-black text-2xl font-bold text-center "
              >
                Email
              </label>
            )}
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-warning-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput124"
              aria-describedby="emailHelp124"
            />
          </div>
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          {handelpassword ? (
            <label
              htmlFor=""
              className="text-red-600 text-2xl font-bold text-center "
            >
              Invalid-_-password
            </label>
          ) : (
            <label
              htmlFor=""
              className="text-black text-2xl font-bold text-center "
            >
              Password
            </label>
          )}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-warning-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput125"
            placeholder="password"
          />
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          {membervalidation ? (
            <label
              htmlFor=""
              className="text-red-600 text-2xl font-bold text-center "
            >
              Invalid-_-member
            </label>
          ) : (
            <label
              htmlFor=""
              className="text-black text-2xl font-bold text-center "
            >
              member
            </label>
          )}

          <select
            onChange={(e) => setmember(e.target.value)}
            value={member}
            className="peer block min-h-[auto] w-full rounded border-0 bg-warning-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          >
            <option label="Member"></option>
            <option label="Member">M</option>
            <option label="Admin">A</option>
          </select>
        </div>

        <div className="relative mb-6" data-twe-input-wrapper-init>
          {gendervalidation ? (
            <label
              htmlFor=""
              className="text-red-600 text-2xl font-bold text-center "
            >
              Invalid-_-gender
            </label>
          ) : (
            <label
              htmlFor=""
              className="text-white text-2xl font-bold text-center "
            >
              Gender
            </label>
          )}
          <select
            onChange={(e) => setgender(e.target.value)}
            value={gender}
            className="peer block min-h-[auto] w-full rounded border-0 bg-warning-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          >
            <option label="Gender"></option>
            <option>Male</option>
            <option>Famale</option>
          </select>
        </div>
        <button className="btn btn-outline mb-[2em]" onClick={Submit}>
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

export default AddUser;
