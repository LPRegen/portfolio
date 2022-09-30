import Link from 'next/link';
import { Icon } from './Icons';

export default function ScrollToTop() {
  const scrollStyles =
    'text-black text-opacity-[0.7] rounded-lg shadow-sm bg-secondary-100 fixed bottom-4 right-2 sm:right-6 sm:p-3';

  return (
    <Link href="/">
      <a className={`${scrollStyles}`}>
        <Icon iconName="arrowUp" size="large" />
      </a>
    </Link>
  );
}
