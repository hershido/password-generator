import React from 'react';
import classnames from 'classnames';
import styles from './BodyText.module.scss'

interface BodyTextProps {
   size?: 'medium' | 'large';
   type?: 'primary' | 'secondary' | 'highlight';
   children?: React.ReactNode;
}

export const BodyText: React.FC<BodyTextProps> = ({ children, size='medium',type='primary' }) => {
   const classNames = classnames([
      { [styles.medium]: size === 'medium' },
      { [styles.primary]: type === 'primary' },
      { [styles.secondary]: type === 'secondary' },
      { [styles.highlight]: type === 'highlight' },
   ]);
   return <p className={classNames}>{children}</p>;

};


