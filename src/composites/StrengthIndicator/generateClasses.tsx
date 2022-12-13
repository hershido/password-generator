import styles from './StrengthIndicator.module.scss';
import classnames from 'classnames';

export function generateBars(score: 0 | 1 | 2 | 3) {
   let bars = [];
   let indicationClass = [styles.tooWeak, styles.weak, styles.medium, styles.strong];

   for (let i = 0; i < 4; i++) {
      const classNames = classnames([
         styles.indicatorBar,
         { [styles.full]: i <= score },
         { [indicationClass[score]]: i <= score },
      ]);
      bars.push(<div key={i} className={classNames} />);
   }
   return bars;
}
