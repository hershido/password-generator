import React from 'react';
import { BodyText } from '../../atoms/BodyText/BodyText';
import { Heading } from '../../atoms/Heading/Heading';
import styles from './Label.module.scss';

export const Label: React.FC<{ text: string; value?: number }> = ({ text, value }) => {
   return (
      <label className={styles.label}>
         <BodyText>{text}</BodyText>
         {value && <Heading type='highlight'>{value}</Heading>}
      </label>
   );
};
