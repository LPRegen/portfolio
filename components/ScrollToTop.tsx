import { useState, useEffect } from 'react';
import { CustomLink } from './CustomLink';
import { Icon } from './Icons';

export default function ScrollToTop() {
  const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 210) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  const scrollStyles = `text-black text-opacity-[0.7] rounded-lg shadow-sm bg-secondary-100 bottom-4 right-2 sm:right-4 md:right-6 md:p-3 lg:right-9 ${
    showScrollBtn ? 'fixed' : 'hidden aria-hidden'
  }`;

  return (
    <CustomLink href="/" className={`${scrollStyles}`} title="Scroll to top.">
      <Icon iconName="arrowUp" size="large" />
    </CustomLink>
  );
}
