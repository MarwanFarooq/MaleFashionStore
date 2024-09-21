import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Mainpage/Home";
import Memberprofile from "./Memberprofile";
// import EditeProfile from "./EditeProfile";
const Userlayout = () => {
  const [check, setcheck] = useState(true);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Memberprofile check={check} />} />
      </Routes>
    </div>
  );
};

export default Userlayout;
