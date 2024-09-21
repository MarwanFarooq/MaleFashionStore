import React, { useEffect, useState } from "react";
import HeaderPage from "./HeaderPage";
import { Route, Routes } from "react-router-dom";
import Shop from "./ShopPage/Shop";
import Fotteer from "./Fotteer";
import Cart from "./Cartpage/Cart";
import Signin from "./SignupPage/Signin";
import Creataccount from "./SignupPage/Creataccount";
import axios from "axios";
import Userlayout from "./UserProfile/Userlayout";
import Adminlayout from "./AdminProfile/Adminlayout";
import AdminHeader from "./AdminProfile/AdminHeader";
import UserHeader from "./UserProfile/UserHeader";

const App = () => {
  const [userloged, setuserloged] = useState(true);
  const [check, setmycheck] = useState(false);
  const [checkChangeGender, setCheckChangeGender] = useState(false);
  const [length, setlenght] = useState(0);
  const [checkCart, setcheckCart] = useState([]);
  const [myproducts, setmyproducts] = useState([]);
  const [pricechange, setpricechange] = useState(false);
  useEffect(() => {
    if (localStorage.K) {
      setmycheck(true);
    } else if (localStorage.K == "") {
      setmycheck(false);
    }
  }, [userloged]);

  const handelpost = (theproduct) => {
    const check = checkCart.some((info) => {
      return info.id == theproduct.id;
    });

    if (check) {
      incItems(theproduct);
    } else {
      setlenght(length + 1);
      axios({
        method: "get",

        url: `https://products-9fkf.onrender.com/products/${theproduct.id}`,
      }).then((info) => {
        setmyproducts([...myproducts, { ...info.data, items: 1 }]);
      });
    }
  };
  const test = () => {
    const total = products.map((info) => {
      return +info.price;
    });
    total.reduce((x, y) => {
      return x + y;
    });
  };

  const incItems = (product) => {
    setpricechange(!pricechange);
    let newprod = myproducts.map((theproduct) => {
      if (theproduct.id == product.id) {
        theproduct.items++;
      }
      return theproduct;
    });
    setmyproducts(newprod);
  };
  const decItems = (product) => {
    let newprod = myproducts.map((theproduct) => {
      if (theproduct == product) {
        theproduct.items--;
      }
      return theproduct;
    });

    setmyproducts(newprod);
  };
  const deletItems = (product) => {
    const thedeleted = myproducts.filter((info) => {
      return info.id != product.id;
    });
    setmyproducts(thedeleted);
    {
      length > 0 && setlenght(myproducts.length - 1);
    }
  };
  return (
    <div>
      {localStorage.U == "A" ? (
        <AdminHeader
          check={check}
          setuserloged={setuserloged}
          userloged={userloged}
          length={length}
          checkChangeGender={checkChangeGender}
        />
      ) : localStorage.U == "M" ? (
        <UserHeader
          check={check}
          setuserloged={setuserloged}
          userloged={userloged}
          length={length}
        />
      ) : (
        <HeaderPage />
      )}
      <Routes>
        {/* sign in pages */}
        <Route
          path="/*"
          element={<Signin userloged={userloged} setuserloged={setuserloged} />}
        />
        <Route path="/createaccount" element={<Creataccount />} />
        <Route path="/sign/userlayout/*" element={<Userlayout />} />
        {/*  */}

        {/* admin */}
        {localStorage.U == "A" && (
          <Route
            path="/admin/*"
            element={
              <Adminlayout
                checkChangeGender={checkChangeGender}
                setCheckChangeGender={setCheckChangeGender}
              />
            }
          />
        )}
        {/*  */}

        <Route
          path="/shop"
          element={
            <Shop
              deletItems={deletItems}
              handelpost={handelpost}
              setlenght={setlenght}
              length={length}
              pricechange={pricechange}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              setlenght={setlenght}
              deletItems={deletItems}
              decItems={decItems}
              incItems={incItems}
              checkCart={checkCart}
              setcheckCart={setcheckCart}
              myproducts={myproducts}
              pricechange={pricechange}
            />
          }
        />
      </Routes>
      <Fotteer />
    </div>
  );
};

export default App;
