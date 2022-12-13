import React from 'react';
import styles from './Heading.module.scss';
import classnames from 'classnames';

interface HeadingPropsType {
   size?: 'medium' | 'large';
   type?: 'primary' | 'secondary' | 'highlight';
   headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
   children?: React.ReactNode;
}

export const Heading: React.FC<HeadingPropsType> = ({
   size = 'medium',
   headingLevel = 'h2',
   children,
   type = 'primary',
}) => {
   const classNames = classnames([
      { [styles.medium]: size === 'medium' },
      { [styles.large]: size === 'large' },
      { [styles.primary]: type === 'primary' },
      { [styles.secondary]: type === 'secondary' },
      { [styles.highlight]: type === 'highlight' },
      styles.heading,
   ]);
   const CustomTag = headingLevel;
   return <CustomTag className={classNames}>{children}</CustomTag>;
};
