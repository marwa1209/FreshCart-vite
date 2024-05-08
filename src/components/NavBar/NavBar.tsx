/** @format */

import { FC, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import { TokenContext } from "@/context/tokenContext";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  let navigate = useNavigate();
  const { token, setToken } = useContext(TokenContext);
  function logOut() {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate("/login");
  }
  return (
    <>
      <nav className="py-4 w-full relative z-30">
        <div className="container mx-auto flex justify-between items-center px-2">
          <Link className="logo me-10" to={"/home"}>
            <img src={logo} alt="Logo" />
          </Link>
          <ul className="flex gap-4 me-auto text-gray-500 list-none">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li className={`${token ? "block" : "hidden"}`}>
              <Link to={"/cart"}>Cart</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/categories"}>Categories</Link>
            </li>
            <li>
              <Link to={"/brands"}>Brands</Link>
            </li>
          </ul>
          <ul className="flex gap-4 ms-auto list-none ">
            <li>
              <Link
                className="nav-link"
                to={"https://www.instagram.com/"}
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"https://www.facebook.com/"}
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"https://www.tiktok.com/"}
                target="_blank"
              >
                <i className="fab fa-tiktok"></i>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"https://www.twitter.com/"}
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"https://www.linkedin.com/"}
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"https://www.youtube.com/"}
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </Link>
            </li>
            <li className={`${!token ? "block" : "hidden"}`}>
              <Link className="text-capitalize cursor-pointer" to={"register"}>
                Register
              </Link>
            </li>
            <li className={`${!token ? "block" : "hidden"}`}>
              <Link className="text-capitalize cursor-pointer" to={"login"}>
                Login
              </Link>
            </li>
            <li onClick={logOut} className={`${token ? "block" : "hidden"}`}>
              <span className="text-capitalize cursor-pointer">SignOut</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
