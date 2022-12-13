import React from 'react';

interface HeadingPropsType {
   size?: 'medium' | 'large';
   headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
   children?: React.ReactNode;
}

const Heading: React.FC<HeadingPropsType> = ({ headingLevel, children, size }) => {
   const CustomTag = headingLevel || 'h2';
   size = size || 'medium';
   console.log(size);

   return <CustomTag>{children}</CustomTag>;
};

export default Heading;
