import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UsersDetails = ({ checkChangeGender, setCheckChangeGender }) => {
  const [myuser, setuser] = useState([]);
  const [check, setcheck] = useState(true);
  const navigation = useNavigate();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://products-9fkf.onrender.com/users`,
    }).then((info) => setuser(info.data));
  }, [check]);
  const addAdmin = (data) => {
    axios({
      method: "patch",
      url: `https://products-9fkf.onrender.com/users/${data.id}`,
      data: {
        member: "A",
      },
    }).then(() => {
      setcheck(!check);
      if (localStorage.K == data.id) {
        localStorage.U = "A";
        setCheckChangeGender(!checkChangeGender);
      }
    });
  };
  const removeAdmin = (data) => {
    axios({
      method: "patch",
      url: `https://products-9fkf.onrender.com/users/${data.id}`,
      data: {
        member: "M",
      },
    }).then(() => {
      setcheck(!check);
      if (localStorage.K == data.id) {
        localStorage.U = "M";
        setCheckChangeGender(!checkChangeGender);

        navigation("/");
      }
    });
  };
  const deletUser = (data) => {
    Swal;
    //
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons

      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        imageUrl:
          data.gender == "male"
            ? `https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png`
            : `https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg`,

        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setcheck(!check);
          axios({
            method: "delete",
            url: `https://products-9fkf.onrender.com/users/${data.id}`,
          });
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="bg-red-400    w-[100%] mx-10 ">
        <div className="text-white text-2xl font-bold h-[4em]  text-center flex items-center  mobile:justify-evenly minmobile:flex-wrap ">
          <h1>
            <button onClick={() => navigation("/admin/contorlpage")}>
              DashBoard
            </button>
          </h1>
          <h1>
            <button onClick={() => navigation("/admin/users")}>User</button>
          </h1>
          <h1>
            <button onClick={() => navigation("/admin/products")}>
              Product
            </button>
          </h1>
        </div>
      </div>
      <div className="bg-black  w-[60%] mx-10  ">
        <div className="bg-slate-600 flex justify-evenly flex-wrap ">
          <h1 className="text-white font-extrabold text-4xl mx-4 ">Users</h1>
          <button
            className="btn btn-active btn-accent"
            onClick={() => navigation("/admin/addnewuser")}
          >
            Add New User
          </button>
        </div>

        {myuser.map((data, index) => (
          <div key={index}>
            <div className="flex justify-around flex-wrap items-center">
              <div className="flex flex-col">
                <h1 className="text-white text-2xl text-center">UserName</h1>
                <h1 className="text-lime-400 text-2xl text-center ">
                  {data.name}
                </h1>
              </div>
              <div className="flex flex-col text-2xl ">
                <h1 className="text-white text-center">Role</h1>

                <h1 className="text-lime-400 text-2xl">
                  {data.member == "A" ? `Admin` : `Member`}
                </h1>
              </div>
            </div>

            <h1 className="text-white  font-extrabold text-2xl mx-1 my-2 mt-1 text-center ">
              Operation
            </h1>
            <div className="flex justify-around flex-wrap gap-7 mb-10">
              <button
                className="btn btn-info text-white"
                onClick={() => navigation(`/admin/view/${data.id}`)}
              >
                View
              </button>
              <button
                className="btn btn-success text-white"
                onClick={() => navigation(`/admin/editeuser/${data.id}`)}
              >
                Edite
              </button>
              {data.member == "A" ? (
                <button
                  className="btn text-black"
                  onClick={() => removeAdmin(data)}
                >
                  Remove Admin
                </button>
              ) : (
                <button
                  onClick={() => addAdmin(data)}
                  className="btn btn-warning text-white"
                >
                  Make Admin
                </button>
              )}
              <button
                className="btn btn-error text-white"
                onClick={() => deletUser(data)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersDetails;
