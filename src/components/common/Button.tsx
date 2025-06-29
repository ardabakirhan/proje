import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  href,
  external = false,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-brand-yellow hover:bg-brand-yellow-dark text-brand-charcoal focus:ring-brand-yellow shadow-lg hover:shadow-xl',
    secondary: 'bg-white border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow/10 focus:ring-brand-yellow',
    ghost: 'text-brand-yellow hover:text-brand-yellow-dark hover:bg-brand-yellow/10 focus:ring-brand-yellow',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon 
          size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} 
          className="mr-2" 
        />
      )}
      
      {loading ? (
        <div className="flex items-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
          Yükleniyor...
        </div>
      ) : (
        children
      )}
      
      {Icon && iconPosition === 'right' && !loading && (
        <Icon 
          size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} 
          className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`group ${classes}`}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }
  return (
    <motion.button
      type={type}
      className={`group ${classes}`}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
