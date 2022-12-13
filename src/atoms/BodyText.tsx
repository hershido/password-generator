import React from 'react';

interface BodyTextProps {
   children?: React.ReactNode;
}

const BodyText: React.FC<BodyTextProps> = ({ children }) => {
   return <p>{children}</p>;
};

export default BodyText;
