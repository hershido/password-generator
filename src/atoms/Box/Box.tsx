import React from 'react';
import styles from './Box.module.scss'

interface BoxProps {
   children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ children }) => {
   return <div className={styles.box}>{children}</div>;
};


