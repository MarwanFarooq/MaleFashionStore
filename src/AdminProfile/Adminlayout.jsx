import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Mainpage/Home";
import Adminprofile from "./Adminprofile";
import EditeAdminProfile from "./EditeAdminProfile";
import Controlpage from "./Controlpage";
import axios from "axios";
import UsersDetails from "./userscontrol/UsersDetails";
import ProductsDetails from "./productcontrol/ProductsDetails";
import EditeUser from "./userscontrol/EditeUser";
import ViewUser from "./userscontrol/ViewUser";
import AddUser from "./userscontrol/AddUser";
import Editeproduct from "./productcontrol/Editeproduct";
import Viewproduct from "./productcontrol/Viewproduct";
import Addproduct from "./productcontrol/Addproduct";
const Userlayout = ({ checkChangeGender, setCheckChangeGender }) => {
  const [check, setcheck] = useState(true);
  const [numberproduct, setnumberproduct] = useState(0);
  const [usersnumber, setusernumber] = useState(0);
  const [nameupteded, setnameupteded] = useState(true);
  const [nameproduct, setproductupteded] = useState(true);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://products-9fkf.onrender.com/products",
    }).then((info) => {
      setnumberproduct(info.data.length);
    });
  }, [numberproduct]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://products-9fkf.onrender.com/users",
    }).then((info) => {
      setusernumber(info.data.length);
    });
  }, [usersnumber]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Adminprofile check={check} />} />
        <Route
          path="/contorlpage"
          element={
            <Controlpage
              usersnumber={usersnumber}
              numberproduct={numberproduct}
              nameupteded={nameupteded}
              setnameupteded={setnameupteded}
            />
          }
        />
        <Route
          path="edite/:id"
          element={
            <EditeAdminProfile
              setcheck={setcheck}
              check={check}
              checkChangeGender={checkChangeGender}
              setCheckChangeGender={setCheckChangeGender}
            />
          }
        />
        {/* user */}
        <Route
          path="/users"
          element={
            <UsersDetails
              checkChangeGender={checkChangeGender}
              setCheckChangeGender={setCheckChangeGender}
            />
          }
        />
        <Route
          path="editeuser/:id"
          element={
            <EditeUser
              checkChangeGender={checkChangeGender}
              setCheckChangeGender={setCheckChangeGender}
            />
          }
        />
        <Route path="view/:id" element={<ViewUser />} />
        <Route path="/addnewuser" element={<AddUser />} />

        {/* product */}
        <Route path="/products" element={<ProductsDetails />} />
        <Route path="editeproduct/:id" element={<Editeproduct />} />
        <Route path="viewproduct/:id" element={<Viewproduct />} />
        <Route path="/addnewproduct" element={<Addproduct />} />
      </Routes>
    </div>
  );
};

export default Userlayout;
