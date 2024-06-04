import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import Button from '../Button/Button';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession()
console.log(session)
  const pages = [
    { name: 'Home', url: '/' },
    { name: 'Dashboard', url: '/dashboard', protected: true },
    { name: 'Analytics', url: '/analytics', protected: true },
    { name: 'Report', url: '/report', protected: true },
  ];
  return (
    <div className="sticky left-0 top-0 z-50 mx-auto flex w-full items-center bg-neutral-80 px-4 text-shades-white">
      <Image
        src={'/img/companylogo.png'}
        width={85}
        height={85}
        alt="company logo"
        priority={true}
      />

      <nav className="ml-[15%] hidden w-full items-center justify-between lg:flex">
        {session && (
          <div className="flex items-center">
            {pages
              .filter((page) => !page.protected || session)
              .map((navLink, i) => (
                <Link href={navLink.url} key={i}>
                  <p
                    className={`${pathname === navLink.url ? 'font-medium' : ''} relative m-4 tracking-[0.105em]`}
                  >
                    {navLink.name}
                    {pathname === navLink.url && (
                      <div className="absolute -bottom-2 left-1/2 h-[7px] w-[45px] -translate-x-1/2 rounded-[20px] bg-neutral-30" />
                    )}
                  </p>
                </Link>
              ))}
          </div>
        )}
      </nav>

      {session ? (
        <div className="relative mr-[20px] w-fit p-5">
          <Image
            src={'/img/profile.png'}
            width={44}
            height={44}
            alt="profile"
            className="relative w-9 overflow-hidden rounded-full lg:w-11"
            onClick={() => setMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <div className="absolute right-0 mt-3 w-[200px] rounded-md border-2 border-solid border-primary-60 bg-primary-70 py-4 text-shades-white">
              {session.user?.name}
              <div className="mx-1 p-2 hover:bg-primary-60">Profile</div>
              <div className="mx-1 p-2 hover:bg-primary-60">Settings</div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  signOut()
                }}
                className="mx-1 p-2 hover:bg-primary-60"
              >
                Logout
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-5">
          <Button type="secondary" onClick={() => signIn()}>
            <Link href={'/auth/login'}> Login</Link>
          </Button>
          <Button type="secondary"> <Link href={'/auth/register'}>Register</Link></Button>
        </div>
      )}
      <div
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="z-20 flex w-full justify-end md:hidden"
      >
        {isMenuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          false
            ? 'border-r-gray-900 fixed left-0 top-0 z-10 h-full w-full border-r bg-shades-white duration-500 ease-in-out'
            : 'fixed left-[-100%] duration-500 ease-in-out'
        }
      >
        {pages.map((navLink, i) => (
          <Link href={navLink.url} key={i}>
            <li className="border-b border-neutral-40 p-4">{navLink.name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
