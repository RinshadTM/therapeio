import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost', 'danger', 'light'
  size = 'md',        // 'sm', 'md', 'lg'
  className = '',
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2 shadow-sm',
    lg: 'text-base px-6 py-3.5 rounded-2xl gap-2.5 shadow-md font-semibold',
    icon: 'p-2 rounded-xl'
  };

  const variantClasses = {
    primary: 'bg-brand-500 hover:bg-brand-600 text-white shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 focus:ring-brand-400 active:translate-y-0',
    secondary: 'bg-skybrand-500 hover:bg-skybrand-600 text-white shadow-skybrand-500/25 hover:shadow-skybrand-500/40 hover:-translate-y-0.5 focus:ring-skybrand-400 active:translate-y-0',
    outline: 'border border-brand-500/30 text-brand-700 bg-brand-50/50 hover:bg-brand-50 hover:border-brand-500 focus:ring-brand-400',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-300',
    danger: 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/20 focus:ring-rose-400',
    light: 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm focus:ring-slate-300'
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  const renderContent = () => (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 flex-shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
