import React, { useState } from 'react';
import styles from './CheckBox.module.scss';
import classnames from 'classnames';

interface CheckBoxProps {
   label: string;
   checked?: boolean;
   setChecked: (checked: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, setChecked }) => {
   const classNames = classnames([styles.container]);

   return (
      <label className={classNames}>
         {label}
         <input type='checkbox' defaultChecked={checked} onClick={() => setChecked(!checked)} />
         <span className={styles.checkmark}></span>
      </label>
   );
};
