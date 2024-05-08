import { FC } from 'react';
import styles from './ProductInfo.module.css';

interface ProductInfoProps {}

const ProductInfo: FC<ProductInfoProps> = () => (
  <div className={styles.ProductInfo}>
    ProductInfo Component
  </div>
)
export default ProductInfo;
