import React from 'react';

export type ButtonVariants = 'default' | 'primary';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariants;
  size?: ButtonSizes;
};

export const variants = {
  default:
    'bg-white text-slate-800 border-slate-400 hover:border-slate-600 hover:text-slate-800',
  primary:
    'text-white bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700',
};

function getVariantClass(variant: ButtonVariants) {
  return variants[variant];
}

export const sizes = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3',
  xl: 'text-xl px-6 py-4',
};

function getSizeClass(size: ButtonSizes) {
  return sizes[size];
}

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) => {
  const variantClass = getVariantClass(variant);
  const sizeClass = getSizeClass(size);

  const defaultClass =
    'border transition duration-300 font-medium rounded-md inline-flex justify-center items-center';

  return (
    <button
      className={[defaultClass, variantClass, sizeClass].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
