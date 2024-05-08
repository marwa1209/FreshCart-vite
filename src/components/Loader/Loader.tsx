/** @format */

import { FC } from "react";
import { BallTriangle } from "react-loader-spinner";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => (
  <div className="flex justify-center my-36">
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      visible={true}
    />
  </div>
);

export default Loader;
