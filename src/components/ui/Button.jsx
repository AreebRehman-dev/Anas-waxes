import { cn } from '@/lib/cn';
import styles from './Button.module.css';

/* Renders a link when given `href`, otherwise a button. */
export default function Button({ href, variant = 'outline', className, children, ...props }) {
  const classes = cn(styles.button, styles[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
