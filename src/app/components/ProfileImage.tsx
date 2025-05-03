'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProfileImage() {
  const pathname = usePathname();
  
  return pathname === '/' ? (
    <Link className="pfp-link" href="/">
      <img className="pfp" src="/Mihir.jpg" alt="Mihir" />
    </Link>
  ) : (
    <Link className="hover-expand" href="/">
      M<span className="expand-text">ihir&nbsp;</span>S<span className="expand-text">ahu</span>
    </Link>
  );
} 