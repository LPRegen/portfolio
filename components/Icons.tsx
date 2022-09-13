import { GiPoolTriangle } from 'react-icons/gi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiArrowSmUp, HiMenu } from 'react-icons/hi';

const supportedIcons = {
  arrowUp: HiArrowSmUp,
  menu: HiMenu,
  logo: GiPoolTriangle,
  linkedin: BsLinkedin,
  github: BsGithub,
};

const iconSize = {
  small: 'w-4 h-4',
  medium: 'w-6 h-6',
  large: 'w-8 h-8',
  extraLarge: 'w-12 h-12',
};

interface IconProps {
  'aria-hidden'?: false | true;
  iconName: keyof typeof supportedIcons;
  size?: keyof typeof iconSize;
  className?: string;
}

export const Icon = ({
  'aria-hidden': ariaHidden = true,
  iconName,
  size = 'medium',
  className,
}: IconProps) => {
  const SelectedIcon = supportedIcons[iconName];

  return (
    <SelectedIcon
      aria-hidden={ariaHidden}
      className={`${iconSize[size]} ${className}`}
    />
  );
};
