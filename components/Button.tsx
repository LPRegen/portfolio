import { ButtonHTMLAttributes, MouseEvent } from 'react';

interface ButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'aria-label' | 'aria-controls' | 'type'
  > {
  children: React.ReactNode;
  variant: 'primary';
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  children,
  variant,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const disabledStyles = disabled
    ? 'disabled:bg-lime-200/60 disabled:text-primary-700 disabled:cursor-not-allowed'
    : '';

  const hoverStyles =
    variant === 'primary' ? 'hover:bg-primary-500/70' : 'hover:bg-primary-300';

  const focusStyles = 'focus:outline-none focus:ring focus:ring-primary-400';

  const mode = {
    primary: `bg-primary-200/80 rounded-lg px-8 py-2 text-lg mr-auto mt-2 ${disabledStyles} ${hoverStyles} ${focusStyles}`,
  };

  return (
    <button
      className={`flex justify-center align-center  ${mode[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
