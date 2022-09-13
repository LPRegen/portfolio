import Link from 'next/link';
import { Icon } from './Icons';

export default function ScrollToTop() {
  return (
    <Link href="/">
      <a>
        <Icon
          iconName="arrowUp"
          size="large"
          className=" text-primary-500 rounded-lg bg-secondary-200 fixed bottom-4 right-4"
        />
      </a>
    </Link>
  );
}
