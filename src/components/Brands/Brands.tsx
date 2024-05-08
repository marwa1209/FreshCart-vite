import React, { FC } from 'react';
import styles from './Brands.module.css';

interface BrandsProps {}

const Brands: FC<BrandsProps> = () => (
  <div className={styles.Brands}>
    Brands Component
  </div>
);

export default Brands;
