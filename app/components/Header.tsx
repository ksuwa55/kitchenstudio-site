"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // replace with your real URLs
  const STORES_BOOK_URL = 'https://stores.jp/your-shop/booking';
  const INSTAGRAM_URL = 'https://www.instagram.com/miyabi_sai/';

  // helper to set active link
  const isActive = (href: string) => pathname === href;

  return (
    <header className="header">
      {/* mobile menu button */}
      <button className="menuBtn" onClick={() => setOpen(true)} aria-label="Open menu">≡</button>

      {/* desktop nav */}
      <nav className="navbar" aria-label="Primary">
        <ul className="navlist">
          <li><Link className={isActive('/') ? 'active' : ''} href="/">Home</Link></li>
          <li><Link className={isActive('/rental') ? 'active' : ''} href="/rental">レンタルスペース</Link></li>
          <li><Link className={isActive('/deli') ? 'active' : ''} href="/deli">デリ</Link></li>
          <li><Link className={isActive('/lesson') ? 'active' : ''} href="/lesson">レッスン</Link></li>
          <li><Link className={isActive('/access') ? 'active' : ''} href="/access">アクセス</Link></li>
          <li><Link className={isActive('/contact') ? 'active' : ''} href="/contact">問い合わせ</Link></li>
        </ul>
      </nav>

      {/* mobile overlay menu */}
      <div className={`overlay ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu" onClick={() => setOpen(false)}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/rental">Rental Space</Link></li>
          <li><Link href="/deli">Deli</Link></li>
          <li><Link href="/lesson">Lesson</Link></li>
          <li><Link href="/access">Access</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}
