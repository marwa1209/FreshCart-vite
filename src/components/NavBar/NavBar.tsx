/** @format */

import React, { FC, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import { TokenContext } from "@/context/tokenContext";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return<></>
  // const [openNav, setOpenNav] = React.useState(false);
  // let navigate = useNavigate();
  // const { token, setToken } = useContext(TokenContext);
  // function logOut() {
  //   localStorage.removeItem("userToken");
  //   setToken(null);
  //   navigate("/login");
  // }
  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false)
  //   );
  // }, []);
  // const navList = (
  //   <>
  //     <ul className=" text-gray-500 mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
  //       <li>
  //         <Link to={"/home"}>Home</Link>
  //       </li>
  //       <li className={`${token ? "block" : "hidden"}`}>
  //         <Link to={"/cart"}>Cart</Link>
  //       </li>
  //       <li>
  //         <Link to={"/products"}>Products</Link>
  //       </li>
  //       <li>
  //         <Link to={"/categories"}>Categories</Link>
  //       </li>
  //       <li>
  //         <Link to={"/brands"}>Brands</Link>
  //       </li>
  //     </ul>
  //   </>
  // );

  // return (
  //   <>
  //     <Navbar
  //       className=" h-max max-w-full rounded-none px-4 py-5 justify-center align-middle lg:px-8 lg:py-4 "
  //       placeholder=""
  //       onPointerEnterCapture={() => {}}
  //       onPointerLeaveCapture={() => {}}
  //     >
  //       <div className="container m-auto">
  //         <div className="flex items-center justify-between text-blue-gray-900">
  //           <Link className="logo me-10" to={"/home"}>
  //             <img src={logo} alt="Logo" />
  //           </Link>
  //           <div className="flex items-center justify-between w-3/4 gap-4 ">
  //             <div className="me-auto hidden lg:block">{navList}</div>
  //             <div className="flex ms-auto items-center justify-between gap-x-1">
  //               <ul className=" gap-4  list-none hidden lg:flex">
  //                 <li>
  //                   <Link
  //                     className="nav-link"
  //                     to={"https://www.instagram.com/"}
  //                     target="_blank"
  //                   >
  //                     <i className="fab fa-instagram"></i>
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link
  //                     className="nav-link"
  //                     to={"https://www.facebook.com/"}
  //                     target="_blank"
  //                   >
  //                     <i className="fab fa-facebook"></i>
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link
  //                     className="nav-link"
  //                     to={"https://www.tiktok.com/"}
  //                     target="_blank"
  //                   >
  //                     <i className="fab fa-tiktok"></i>
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link
  //                     className="nav-link"
  //                     to={"https://www.twitter.com/"}
  //                     target="_blank"
  //                   >
  //                     <i className="fab fa-twitter"></i>
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link
  //                     className="nav-link"
  //                     to={"https://www.linkedin.com/"}
  //                     target="_blank"
  //                   >
  //                     <i className="fab fa-linkedin"></i>
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link
  //                     className="nav-link"
  //                     to={"https://www.youtube.com/"}
  //                     target="_blank"
  //                   >
  //                     <i className="fab fa-youtube"></i>
  //                   </Link>
  //                 </li>
  //                 <li className={`${!token ? "block" : "hidden"}`}>
  //                   <Link
  //                     className="text-capitalize cursor-pointer"
  //                     to={"register"}
  //                   >
  //                     Register
  //                   </Link>
  //                 </li>
  //                 <li className={`${!token ? "block" : "hidden"}`}>
  //                   <Link
  //                     className="text-capitalize cursor-pointer"
  //                     to={"login"}
  //                   >
  //                     Login
  //                   </Link>
  //                 </li>
  //                 <li
  //                   onClick={logOut}
  //                   className={`${token ? "block" : "hidden"}`}
  //                 >
  //                   <span className="text-capitalize cursor-pointer">
  //                     SignOut
  //                   </span>
  //                 </li>
  //               </ul>
  //             </div>
  //             <IconButton
  //               variant="text"
  //               className="m-auto w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
  //               ripple={false}
  //               onClick={() => setOpenNav(!openNav)}
  //               placeholder=""
  //               onPointerEnterCapture={() => {}}
  //               onPointerLeaveCapture={() => {}}
  //             >
  //               {openNav ? (
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   className="h-full w-6"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                   strokeWidth={2}
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     d="M6 18L18 6M6 6l12 12"
  //                   />
  //                 </svg>
  //               ) : (
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   className="h-full w-10"
  //                   fill="none"
  //                   stroke="currentColor"
  //                   strokeWidth={2}
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     d="M4 6h16M4 12h16M4 18h16"
  //                   />
  //                 </svg>
  //               )}
  //             </IconButton>
  //           </div>
  //         </div>
  //         <Collapse open={openNav} className="">
  //           {navList}
  //           <div className="flex gap-2">
  //             <ul className=" gap-4 list-none">
  //               <li className={`${!token ? "block" : "hidden"}`}>
  //                 <Link
  //                   className="text-capitalize cursor-pointer"
  //                   to={"register"}
  //                 >
  //                   Register
  //                 </Link>
  //               </li>
  //               <li className={`${!token ? "block" : "hidden"}`}>
  //                 <Link className="text-capitalize cursor-pointer" to={"login"}>
  //                   Login
  //                 </Link>
  //               </li>
  //               <li
  //                 onClick={logOut}
  //                 className={`${token ? "block" : "hidden"}`}
  //               >
  //                 <span className="text-capitalize cursor-pointer">
  //                   SignOut
  //                 </span>
  //               </li>
  //             </ul>
  //           </div>
  //         </Collapse>
  //       </div>
  //     </Navbar>
  //   </>
  // );
};
export default NavBar;
