"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // replace with your real URLs
  const STORES_BOOK_URL = 'https://stores.jp/your-shop/booking';
  const INSTAGRAM_URL  = 'https://www.instagram.com/your_account/';

  // helper to set active link
  const isActive = (href: string) => pathname === href;

  return (
    <footer className='footer' style={{textAlign:'center', padding:'40px 0', color:'#666'}}>
        {/* desktop nav */}
        <nav className="navbar" aria-label="Primary">
            <ul className="navlist">
                <li><Link className={isActive('/access') ? 'active' : ''} href="/access">アクセス</Link></li>
                <li><a href={STORES_BOOK_URL} target="_blank" rel="noopener noreferrer">問い合わせ</a></li>
            </ul>
        </nav>
        &copy; {new Date().getFullYear()} Kitchen Studio
    </footer>
  );
}
