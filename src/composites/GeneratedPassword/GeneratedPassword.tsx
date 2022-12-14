import React, { useState } from 'react';
import { BodyText } from '../../atoms/BodyText/BodyText';
import { Heading } from '../../atoms/Heading/Heading';
import Icon from '../../icons/fa-regular.svg';
import IconHover from '../../icons/fa-regular-hover.svg';

import styles from './GeneratedPassword.module.scss';

interface GeneratedPasswordProps {
   password: string;
   snackBar?: boolean;
   handleSnackBar: (param: boolean) => void;
}

export const GeneratedPassword: React.FC<GeneratedPasswordProps> = ({
   password,
   snackBar,
   handleSnackBar,
}) => {
   const [copyButtonHovered, setCopyButtonHovered] = useState(false);

   function handleClick() {
      navigator.clipboard.writeText(password);
      handleSnackBar(true);
   }

   return (
      <div className={styles.wrapper}>
         <Heading size='large'>{password}</Heading>
         <div className={styles.copyContainer}>
            {snackBar && <BodyText type='highlight'>COPIED</BodyText>}
            <button
               onMouseEnter={() => setCopyButtonHovered(true)}
               onMouseLeave={() => setCopyButtonHovered(false)}
               onClick={handleClick}>
               <img src={copyButtonHovered ? IconHover : Icon} alt=""></img>
            </button>
         </div>
      </div>
   );
};
