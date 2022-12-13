import React, { ReactNode, useState } from 'react';
import styles from './InputWithLabel.module.scss';

interface SliderInputWithLabelProps {
   label?: ReactNode;
   input: ReactNode;
}

export const InputWithLabel: React.FC<SliderInputWithLabelProps> = ({ label, input }) => {
   return (
      <div className={styles.inputWithLabel}>
         {label}
         {input}
      </div>
   );
};
