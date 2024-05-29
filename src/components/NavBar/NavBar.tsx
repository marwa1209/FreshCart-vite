/** @format */

import { FC, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import { TokenContext } from "@/context/tokenContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface NavBarProps {}
const NavBar: FC<NavBarProps> = () => {
  let navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userdata } = useContext(TokenContext);
  let { name, email } = JSON.parse(userdata) || {};
  const displayMenueBars = () => {
    setShowMenu(!showMenu);
  };
  function logOut() {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate("/login");
  }
  return (
    <nav className="py-4 w-full  relative z-30">
      <div className="container mx-auto flex justify-between items-center px-2">
        <Link className={`logo me-10`} to={"home"}>
          <img src={logo} alt="Logo" />
        </Link>
        {token ? (
          <ul
            className={`lg:flex gap-4 me-auto text-gray-500 list-none hidden`}
          >
            <li>
              <Link to={"home"}>Home</Link>
            </li>
            <li>
              <Link to={"cart"}>Cart</Link>
            </li>
            <li>
              <Link to={"products"}>Products</Link>
            </li>
            <li>
              <Link to={"categories"}>Categories</Link>
            </li>
            <li>
              <Link to={"brands"}>Brands</Link>
            </li>
          </ul>
        ) : null}
        {/* Nav-icons-left */}
        <ul className="lg:flex gap-4 ms-auto list-none hidden">
          <li className={`${token ? "hidden" : "block"}`}>
            <Link className="text-capitalize cursor-pointer" to={"register"}>
              Register
            </Link>
          </li>
          <li className={`${token ? "hidden" : "block"}`}>
            <Link className="text-capitalize cursor-pointer" to={"login"}>
              Login
            </Link>
          </li>
          <div className={`${!token ? "hidden" : "block"}`}>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="capitalize text-white w-10 h-10 rounded-full bg-[#C1185A] flex items-center justify-center">
                  <span> {name ? name[0] : null}</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="right-0">
                <DropdownMenuLabel>
                  <h2>{name ? name : null}</h2>
                  <h3>{email ? email : null}</h3>
                </DropdownMenuLabel>
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button
                    onClick={logOut}
                    
                  >
                    <span className="text-capitalize cursor-pointer">
                      SignOut
                    </span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ul>
        <div className="lg:hidden flex ">
          <i
            onClick={displayMenueBars}
            className={`fa-solid ${
              showMenu ? "fa-xmark" : "fa-bars"
            } cursor-pointer text-2xl transition-opacity duration-300`}
          ></i>
          <ul
            className={`absolute end-0 top-full bg-light-color py-3 w-full text-center list-none  gap-4 flex-col ${
              showMenu ? "flex" : "hidden"
            }`}
          >
            <div className={`${token ? "flex" : "hidden"} gap-4 flex-col`}>
              <li>
                <Link to={"home"}>Home</Link>
              </li>
              <li>
                <Link to={"cart"}>Cart</Link>
              </li>
              <li>
                <Link to={"products"}>Products</Link>
              </li>
              <li>
                <Link to={"categories"}>Categories</Link>
              </li>
              <li>
                <Link to={"brands"}>Brands</Link>
              </li>
            </div>
            <li className={`${token ? "hidden" : "block"}`}>
              <Link className="text-capitalize cursor-pointer" to={"register"}>
                Register
              </Link>
            </li>
            <li className={`${token ? "hidden" : "block"}`}>
              <Link className="text-capitalize cursor-pointer" to={"login"}>
                Login
              </Link>
            </li>
            <li onClick={logOut} className={`${!token ? "hidden" : "block"}`}>
              <span className="text-capitalize cursor-pointer">SignOut</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
