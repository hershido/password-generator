import React, { useState } from 'react';
import styles from './SliderInput.module.scss';
import { calculateWidth } from './helpers';

interface SliderInputProps {
   value?: number;
   min?: number;
   max?: number;
   set(value: number): void;
}

export const SliderInput: React.FC<SliderInputProps> = ({ value=50, min = 30, max = 50, set }) => {
   const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);
      set(value);
   };

   return (
      <div className={styles.sliderContainer}>
         <div
            className={styles.progress}
            style={{ width: calculateWidth(value, min, max) }}
         />
         <input
            min={min.toString()}
            max={max.toString()}
            onChange={handleSliderChange}
            className={styles.slider}
            type='range'
            value={value}
         />
      </div>
   );
};
