import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'outline-dark' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  to?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const cls = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
