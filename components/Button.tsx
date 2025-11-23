import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-pink-600 text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02]",
    secondary: "bg-white text-slate-900 hover:bg-slate-100 hover:shadow-lg hover:scale-[1.02]",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};