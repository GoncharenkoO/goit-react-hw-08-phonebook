import { memo } from 'react';
import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './loader.module.css';

const LoaderComponent = () => {
  return (
    <div className={styles.overlay}>
      <Loader
        type="Circles"
        color="#3f51b5"
        height={80}
        width={80}
        ariaLabel="loading-indicator"
      />
    </div>
  );
};

export default memo(LoaderComponent);
