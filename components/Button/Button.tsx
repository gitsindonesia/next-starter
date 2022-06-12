import { useMemo } from '@storybook/addons';
import React from 'react';

export type ButtonVariants =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'warning'
  | 'error';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  outlined?: boolean;
  text?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  block?: boolean;
  onClick?: () => void;
};

export const variants: Record<string, Record<ButtonVariants, string>> = {
  default: {
    default:
      'bg-white text-slate-800 border-slate-400 hover:border-slate-600 hover:text-slate-800',
    primary:
      'text-white bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:text-white',
    secondary:
      'text-white bg-gray-800 border-gray-800 hover:bg-gray-900 hover:border-gray-900 hover:text-white',
    info: 'text-white bg-sky-600 border-sky-600 hover:bg-sky-700 hover:border-sky-700 hover:text-white',
    warning:
      'text-white bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 hover:text-white',
    error:
      'text-white bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 hover:text-white',
  },
  outlined: {
    default:
      'bg-transparent text-slate-800 border-slate-400 hover:border-slate-600 hover:bg-slate-800 hover:text-white',
    primary:
      'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:text-white',
    secondary:
      'bg-transparent text-gray-800 border-gray-800 hover:bg-gray-900 hover:border-gray-900 hover:text-white',
    info: 'bg-transparent text-sky-600 border-sky-600 hover:bg-sky-700 hover:border-sky-700 hover:text-white',
    warning:
      'bg-transparent text-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 hover:text-white',
    error:
      'bg-transparent text-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 hover:text-white',
  },
  text: {
    default: 'text-slate-800 hover:text-slate-800',
    primary: 'text-blue-600 hover:text-blue-700',
    secondary: 'text-gray-600 hover:text-gray-700',
    info: 'text-sky-600 hover:text-sky-700',
    warning: 'text-orange-600 hover:text-orange-700',
    error: 'text-red-600 hover:text-red-700',
  },
};

export function getVariants() {
  return Object.keys(variants.default);
}

function getVariantClass(variant: ButtonVariants, style = 'default') {
  return variants[style][variant];
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

function getStyle(props: Partial<ButtonProps>) {
  let style = 'default';
  if (props.outlined) {
    style = 'outlined';
  } else if (props.text) {
    style = 'text';
  }
  return style;
}

const baseClass =
  'transition duration-300 font-medium inline-flex justify-center items-center';

const disabledClass =
  'disabled:text-gray-400 disabled:border-gray-200 disabled:bg-gray-200 disabled:cursor-not-allowed';

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  type = 'button',
  className,
  ...props
}: ButtonProps) => {
  const style = getStyle(props);
  const variantClass = getVariantClass(variant, style);
  const sizeClass = getSizeClass(size);
  const borderClass = !props.text ? 'border' : '';
  const roundedClass = props.rounded ? 'rounded-full' : 'rounded-md';
  const blockClass = props.block ? 'w-full' : '';

  return (
    <button
      type={type}
      className={[
        baseClass,
        borderClass,
        roundedClass,
        variantClass,
        sizeClass,
        disabledClass,
        blockClass,
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
