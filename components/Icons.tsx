import { GiPoolTriangle } from 'react-icons/gi';
import { BsLinkedin, BsGithub, BsLink } from 'react-icons/bs';
import { HiArrowSmUp, HiMenu } from 'react-icons/hi';
import {
  SiJavascript,
  SiHtml5,
  SiCsswizardry,
  SiTailwindcss,
  SiReact,
  SiNpm,
  SiGit,
  SiJest,
  SiTypescript,
  SiWebpack,
  SiNextdotjs,
  SiStoryblok,
} from 'react-icons/si';

const supportedIcons = {
  arrowUp: HiArrowSmUp,
  menu: HiMenu,
  logo: GiPoolTriangle,
  linkedin: BsLinkedin,
  github: BsGithub,
  link: BsLink,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCsswizardry,
  tailwind: SiTailwindcss,
  react: SiReact,
  npm: SiNpm,
  git: SiGit,
  jest: SiJest,
  typescript: SiTypescript,
  webpack: SiWebpack,
  next: SiNextdotjs,
  story: SiStoryblok,
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
