import { Link, NavLink } from "react-router-dom";
import defaultUser from "../../assets/userDefault.png";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            icon: "success",
            title: "Log Out successful",
          });
        });
      }
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#f7f7f7]">
      <div className="navbar container mx-auto py-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="ul menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              <div className="ml-4 text-lg text-[#878f97] hover:text-[#242d3b] font-medium">
                {user ? (
                  <button onClick={handleSignOut}>Log Out</button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </div>
            </ul>
          </div>
          <h3 className="font-bold text-lg lg:text-4xl">StyleCanvas</h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="ul menu menu-horizontal px-1">{navLinks}</ul>
          <div className="ml-4 text-lg text-[#878f97] hover:text-[#242d3b] font-medium">
            {user ? (
              <button onClick={handleSignOut}>Log Out</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
        <div className="navbar-end">
          <h3 className="mr-4 font-semibold text-sm lg:text-lg">
            {user?.displayName}
          </h3>
          <div>
            {user ? (
              <div className="w-8 lg:w-12 h-8 lg:h-12 border border-[#403F3F] rounded-full">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={`${user?.photoURL}`}
                  alt="profile picture of user"
                />
              </div>
            ) : (
              <div className="w-8 lg:w-12 h-8 lg:h-12 border border-[#403F3F] rounded-full">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={defaultUser}
                  alt="default picture of user"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
