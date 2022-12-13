import React from 'react';
import { BodyText } from '../../atoms/BodyText/BodyText';
import { Heading } from '../../atoms/Heading/Heading';
import { generateBars } from './generateClasses';
import styles from './StrengthIndicator.module.scss';

interface StrengthIndicatorProps {
   score: 0 | 1 | 2 | 3;
}


export const StrengthIndicator: React.FC<StrengthIndicatorProps> = ({ score }) => {
   
   const scoreTitle = [
      'TOO WEAK!', 
      'WEAK',
      'MEDIUM',
      'STRONG'
   ]
   

   return (
      <div className={styles.strengthIndicator}>
         <BodyText type='secondary'>STRENGTH</BodyText>
         <div className={styles.indication}>
            <Heading>{scoreTitle[score]}</Heading>
            <div className={styles.indicatorBars}>{generateBars(score)}</div>
         </div>
      </div>
   );
};
