import React, { FC } from 'react';
import styles from './Categories.module.css';

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = () => (
  <div className={styles.Categories}>
    Categories Component
  </div>
);

export default Categories;
