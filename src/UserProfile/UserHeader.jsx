import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const UserHeader = ({ check, userloged, setuserloged, length }) => {
  const [user, setuser] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://products-9fkf.onrender.com/users/${localStorage.K}`,
    }).then((info) => {
      setuser(info.data);
    });
  }, [check]);
  const signOut = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn bg-red-700",
        cancelButton: "btn  bg-green-600 ",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Sign Out!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your Account deleted :(.",
            icon: "success",
          });
          localStorage.removeItem("K");
          localStorage.removeItem("U");
          setuserloged(!userloged);
          setTimeout(() => {
            navigation("/");
          }, 500);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: `You still here :)`,

            icon: "error",
          });
        }
      });
  };
  return (
    <div className="bg-slate-400 sticky top-0  z-[1]">
      <div className="navbar  text-black bg-white ">
        <div className="flex-1">
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAAXCAMAAABj0hDYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABPlBMVEUAAAAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREAAAAAAAAAAAAAAAAAAAAREREREREREREAAAAAAAAREREREREREREREREAAAAREREREREREREREREREREAAAAAAAAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREAAAAAAAAAAAAREREREREREREREREREREREREREREREREREREAAAAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREAAADlNjd6DDkBAAAAZ3RSTlMAou0kF83g29CLBsHZEgjHrQGm3AO7EXdEZiagf+7dPfp7WCIYXVc495mqYIM5H+ha6iEN0fb5PMXXD7TfdsxViOwiFd67BY7xKzPAKPCbZ/1IQ2xjlYm5rNYKyuvhLFmWURO9VNgn6wEA2gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAANbSURBVFjD1ZdpW9QwEMcjHiCXojTpCq1oUUnxxBu1XW9dvG+879bv/wXs5L62rKwPPuYFtNNM8v8lM5Ms2lY1bWQ7ctqOnbtGx8Z2o/+jjU8AxeSUbZ3eA9a94/9a3aBtahL0Tlh6Z/aBbf9s0CGq6zraYFBMBukVN33q2LR0wEI2QXFgBBTPmaZ5sFRj4f4DyIsTEFOnWweBDi6A5EPacLgaDiKreUu2DGJxBh1hmo9Ky7GlISEoSMkJ2UjN34NYnkfoOGheOsENJ09VQ0JAMNEBpvYhNtuWq9Mikc+swPvZc/B8fggIPOhy/k2ICxfR9CVQfnkVodkr8HT1mglBCMxWEA+ihMBJCDbHS2vVMs+3cenCOyUaApMEBvGwWIGru6WelaIyh0CNAxDV9Rvo5i3QfvsOugv/791fVhBZV4lKehYEjuSHuA+E56tdklJIJryS1QW2IMpE9owyBUGFqROAqNYQevAQ1D96DH+fPEUaAidaVWpBFPpDLwzh+eb6PRKSVSMmRGl8SLGYVa8IDkCA3GcLlWzPkQGBmtWMmkrD5i8NCCJqkJMjhLDlBxfs+mL5JWVSOURCCJUFWUJw+i4hbKGogsiZq59xSu4LyfASWRCZkQtdAyKRg0X2VvBjgoR8Y3V4xFRKZuvMKLCGIHLF+N5lAoLI0bv9INArzvB61oaQDSbKNUQp5uXFvROGcHyduhWr146ISQkBG1CwPj3RJ1L8qdARhph5Awzrq7a1GZmogIw0BPECOgTh+OYygDRErCBibUn0aotHHbRp7Zd4Q+7bd1X1fsW1Gsn4xxCuL1YG2gphDJnyziGIX6LZa774oTkzHAgmFpaO+hDhy5GG8Hzhfivo8+F3IgyBPn7y9qeQ4+U2RFk7+RyA8HxFIzyf+kOEc2JAiECQie3koxkQrAoWQlQvDOH55iJGCqa1P0S4OrVDfPYgvigINgoVQWBA8IlSws4FGoZwfTNe6vm50WuBUOdEZJ4TrRBrgZ+hcxIilqmYOBDmiW0doRrC9TWLQdGWE+ETuw1i9GsgsMe/ySATMxfUhTBqD7/feBCub6nvJGnWCiF/HIIfW6B2iO8/foayE62uq3MiZ6J8CNRjt7fUTgn7nLB9Ucnve7lxiw1DhG6x/SB+AyOSargdPjyNAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA4LTE2VDAwOjQ0OjEyKzA2OjAwFmZEQwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOC0xNlQwMDo0NDoxMiswNjowMGc7/P8AAAAASUVORK5CYII="
              alt=""
            />
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <Link to="/shop">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          {/*  */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{length}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body  bg-white">
                <span className="font-bold text-lg"></span>
                <span className="text-info"></span>
                <div className="card-actions">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => navigation("/cart")}
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user.gender == "Male" ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
                  />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2 shadow  bg-white text-black rounded-box w-52"
            >
              <li>
                <button onClick={() => navigation("/sign/userlayout/")}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigation("/sign/userlayout/profile")}>
                  Profile
                  <span className="badge">New</span>
                </button>
              </li>
              <li>
                <button onClick={signOut}>
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
