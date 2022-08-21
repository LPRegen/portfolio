import React from 'react';
import Link from 'next/link';

import { MdArrowUpward } from 'react-icons/md';

export default function ScrollToTop() {
  return (
    <Link href="/" className="p-2">
      <a>
        <MdArrowUpward className=" sticky bottom-4 left-4 w-8 h-8  text-primary-text bg-hover-color rounded-lg" />
      </a>
    </Link>
  );
}
