import React, { useEffect, useState } from 'react';
import { Box } from '../atoms/Box/Box';
import { Button } from '../atoms/Button/Button';
import { Heading } from '../atoms/Heading/Heading';
import Layout from '../atoms/Layout/Layout';
import { Spacer01 } from '../atoms/Spacer/Spacer01';
import { CheckBox } from '../composites/CheckBox/CheckBox';
import { CheckBoxGroup } from '../composites/CheckBoxGroup/CheckBoxGroup';
import { GeneratedPassword } from '../composites/GeneratedPassword/GeneratedPassword';
import { InputWithLabel } from '../composites/InputWithLabel/InputWithLabel';
import { Label } from '../composites/Label/Label';
import { SliderInput } from '../composites/SliderInput/SliderInput';
import { StrengthIndicator } from '../composites/StrengthIndicator/StrengthIndicator';
import Arrow from '../icons/arrow.svg';
import ArrowHover from '../icons/arrowHover.svg';
import { checkPasswordStrength, generatePassword } from './passwordHelpers';
import { Score } from './types';

export const PasswordGenerator = () => {
   const [password, setPassword] = useState<string>('********');
   const [characterCount, setCharacterCount] = useState<number>(8);
   const [upperCase, setUpperCase] = useState<boolean>(false);
   const [lowerCase, setLowerCase] = useState<boolean>(false);
   const [numbers, setNumbers] = useState<boolean>(false);
   const [symbols, setSymbols] = useState<boolean>(false);
   const [score, setScore] = useState<Score>(0);
   const [snackBar, setSnackBar] = useState<boolean>(false);

   useEffect(() => {
      setScore(checkPasswordStrength(characterCount, upperCase, lowerCase, numbers, symbols));
   }, [characterCount, upperCase, lowerCase, numbers, symbols]);

   function handleGenerateClick() {
      setPassword(generatePassword(characterCount, upperCase, lowerCase, numbers, symbols));
      handleSnackBar(false);
   }

   function handleSnackBar(param: boolean) {
      setSnackBar(param);
   }

   return (
      <div className='PasswordGenerator'>
         <Layout>
            <div>
               <Heading type='secondary'>Password Generator</Heading>
               <Spacer01 />
            </div>
            <Box>
               <GeneratedPassword
                  password={password}
                  snackBar={snackBar}
                  handleSnackBar={handleSnackBar}
               />
            </Box>
            <Box>
               <div>
                  <InputWithLabel
                     label={<Label text={'Character Length'} value={characterCount} />}
                     input={
                        <SliderInput
                           value={characterCount}
                           set={setCharacterCount}
                           min={6}
                           max={20}
                        />
                     }
                  />
                  <Spacer01 />
                  <Spacer01 />
               </div>
               <CheckBoxGroup>
                  <CheckBox
                     label='Include Uppercase Letters'
                     checked={upperCase}
                     setChecked={setUpperCase}
                  />
                  <CheckBox
                     label='Include Lowercase Letters'
                     checked={lowerCase}
                     setChecked={setLowerCase}
                  />
                  <CheckBox label='Include Numbers' checked={numbers} setChecked={setNumbers} />
                  <CheckBox label='Include Symbols' checked={symbols} setChecked={setSymbols} />
               </CheckBoxGroup>
               <StrengthIndicator score={score} />
               <div>
                  <Button
                     label='GENERATE'
                     icon={Arrow}
                     iconHover={ArrowHover}
                     onClick={handleGenerateClick}
                  />
                  <Spacer01 />
                  <Spacer01 />
               </div>
            </Box>
         </Layout>
      </div>
   );
};
