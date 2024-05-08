/** @format */

import { FC } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./LayOut.module.css";

interface LayOutProps {}

const LayOut: FC<LayOutProps> = () => (
  <>
    <div className={styles.host}>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  </>
);

export default LayOut;
