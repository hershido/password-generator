import React, { ReactNode } from 'react';
import styles from './CheckBoxGroup.module.scss';

interface CheckBoxGroup {
   children: ReactNode[] | ReactNode;
}

export const CheckBoxGroup: React.FC<CheckBoxGroup> = ({ children }) => {
   return <div className={styles.checkboxGroup}>{children}</div>;
};
