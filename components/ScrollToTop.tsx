import Link from 'next/link';
import { Icons } from './Icons';

export default function ScrollToTop() {
  return (
    <Link href="/">
      <a>
        <Icons
          iconName="arrowUp"
          size="large"
          className=" text-primary-500 rounded-lg bg-secondary-200 sticky top-[90%] ml-2"
        />
      </a>
    </Link>
  );
}
