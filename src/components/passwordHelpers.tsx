import { Score } from './types';

export function checkPasswordStrength(
   characterCount: number,
   upperCase: boolean,
   lowerCase: boolean,
   numbers: boolean,
   symbols: boolean,
): Score {
   let calculatedScore = 0;
   upperCase && lowerCase && calculatedScore++;
   symbols && numbers && calculatedScore++;
   characterCount > 8 && calculatedScore++;
   return calculatedScore as Score;
}

export function generatePassword(
   length: number,
   useUpperCase: boolean,
   useLowerCase: boolean,
   useNumbers: boolean,
   useSymbols: boolean
): string {
   // Create an empty string that will hold the password
   let password = '';

   // Create a string that includes all the characters we want to use in the password
   let characterSet = '';

   // Add upper case characters to the character set if the useUpperCase option is true
   if (useUpperCase) {
      characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   }

   // Add lower case characters to the character set if the useLowerCase option is true
   if (useLowerCase) {
      characterSet += 'abcdefghijklmnopqrstuvwxyz';
   }

   // Add numbers to the character set if the useNumbers option is true
   if (useNumbers) {
      characterSet += '0123456789';
   }

   // Add symbols to the character set if the useSymbols option is true
   if (useSymbols) {
      characterSet += "!@#$%^&*()_+-=[]{}|:;'<>,.?/";
   }

   // If the character set is empty (i.e. none of the options were true), return an empty string
   if (characterSet.length === 0) {
      return '********';
   }

   // Otherwise, generate a password by picking characters from the character set at random
   for (let i = 0; i < length; i++) {
      password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
   }


   // Return the generated password
   return password;
}
