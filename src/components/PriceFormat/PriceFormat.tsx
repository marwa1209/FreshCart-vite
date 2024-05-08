import { FC } from 'react';

interface PriceFormatProps {
  price:number
}

const PriceFormat: FC<PriceFormatProps> = ({ price }) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EGP",
    }).format(price);

  return <div>{formattedPrice}</div>;
}


export default PriceFormat;
