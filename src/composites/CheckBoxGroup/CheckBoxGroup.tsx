import React, { ReactNode } from 'react';
import styles from './CheckBoxGroup.module.scss';

interface CheckBoxGroupProps {
   children: ReactNode[] | ReactNode;
}

export const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({ children }) => {
   return <div className={styles.checkboxGroup}>{children}</div>;
};
