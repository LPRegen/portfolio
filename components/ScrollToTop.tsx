import Link from 'next/link';
import { Icon } from './Icons';

export default function ScrollToTop() {
  return (
    <Link href="/">
      <a className="text-black text-opacity-[0.7] rounded-lg shadow-sm bg-secondary-100 fixed bottom-4 right-2">
        <Icon iconName="arrowUp" size="large" />
      </a>
    </Link>
  );
}
