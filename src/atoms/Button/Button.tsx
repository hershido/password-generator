import React, { ReactNode, useState } from 'react';
import styles from './Button.module.scss';

interface ButtonPropTypes {
   label?: ReactNode;
   icon?: string;
   iconHover?: string;
   onClick?: () => void;
}

export const Button: React.FC<ButtonPropTypes> = ({ label, icon, iconHover, onClick }) => {
   const [hovered, setIsHovered] = useState(false);

   return (
      <button
         onClick={onClick}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         className={styles.button}>
         {label && label}
         {icon && <img src={hovered ? iconHover : icon} />}
      </button>
   );
};
