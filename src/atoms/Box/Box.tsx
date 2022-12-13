import React from 'react';
import {} from './box.module.css'

interface BoxProps {
   children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
   return <div>{children}</div>;
};

export default Box;
