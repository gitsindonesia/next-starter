import React from 'react';

export type ButtonVariants = 'default' | 'primary';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariants;
};

const variants = {
  default:
    'bg-white text-slate-800 border-slate-400 hover:border-slate-600 hover:text-slate-800',
  primary:
    'text-white bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700',
};

function getVariantClass(variant: ButtonVariants) {
  return variants[variant];
}

const Button = ({ children, variant = 'default' }: ButtonProps) => {
  const variantClass = getVariantClass(variant);

  const defaultClass =
    'px-4 py-2 border transition duration-300 font-medium text-sm rounded-md';

  return (
    <button className={[defaultClass, variantClass].join(' ')}>
      {children}
    </button>
  );
};

export default Button;
