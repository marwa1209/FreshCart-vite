import  { FC } from 'react';
import notfoundimg from "../../assets/images/error.svg";
interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => (
  <>
    <picture className="my-5">
      <img src={notfoundimg} alt="NotFound" className="w-3/5 m-auto" />
    </picture>
  </>
);

export default NotFound;
