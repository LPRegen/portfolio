import { HiArrowSmUp } from 'react-icons/hi';

const supportedIcons = {
  arrowUp: HiArrowSmUp,
};

const iconSize = {
  small: 'w-4 h-4',
  medium: 'w-6 h-6',
  large: 'w-8 h-8',
  extraLarge: 'w-12 h-12',
};

interface IconsProps {
  'aria-hidden'?: false | true;
  iconName: keyof typeof supportedIcons;
  size?: keyof typeof iconSize;
  className?: string;
}

export const Icons = ({
  'aria-hidden': ariaHidden = true,
  iconName,
  size = 'medium',
  className,
}: IconsProps) => {
  const SelectedIcon = supportedIcons[iconName];

  return (
    <SelectedIcon
      aria-hidden={ariaHidden}
      className={`${iconSize[size]} ${className}`}
    />
  );
};
