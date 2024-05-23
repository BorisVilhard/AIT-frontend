'use client';

import '../styles/globals.css';
import '../styles/dataFlowAnimation.css';
import '../styles/particleAnimation.scss';
import Button from '@/components/Button/Button';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { ReactNode } from 'react';
import AuthProvider from './context/AuthProvider';
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: ReactNode }) => {
  const currentPath = usePathname();
  const RenderLayout = ({ children }: { children: ReactNode }) => {
    const circles = Array.from({ length: 500 }, (_, index) => (
      <div key={index} className="circle-container">
        <div className="circle"></div>
      </div>
    ));

    if (currentPath.startsWith('/auth/')) {
      return (
        <div className="flex h-[100vh] items-center justify-between">
          <div className="absolute left-[4px] top-[4px]">
            <Image src={'/img/companylogo.png'} width={85} height={85} alt="profile" />
          </div>
          <div className="relative flex w-full justify-center">
            <div className="flex w-[350px] flex-col items-center justify-center">
              <h1 className="text-[30px] font-bold">
                {currentPath.startsWith('/auth/register') ? 'Welcome!' : ' Welcome back!'}
              </h1>
              {children}
              <div className="my-[20px] flex w-full flex-row items-center justify-center">
                <div className="h-[2px] w-full bg-neutral-30" />
                <div className="mx-[3px] w-full text-center text-[15px] text-neutral-50">
                  Or {currentPath.startsWith('/auth/register') ? 'Register' : 'Log In'} With
                </div>
                <div className="h-[2px] w-full bg-neutral-30" />
              </div>
              <Button
                radius="squared"
                className="h-[55px] w-full border-neutral-50 bg-shades-white"
              >
                <div className="text-shades-black">
                  {currentPath.startsWith('/auth/register') ? 'Register' : 'Log In'} With Google
                </div>
              </Button>
            </div>
          </div>
          <div className="container m-[20px] overflow-hidden rounded-[30px] bg-primary-30 sm:hidden md:hidden lg:block">
            <Image
              src={'/img/robot.png'}
              width={1400}
              height={2000}
              alt="robot image"
              layout="responsive"
              className="h-auto w-full"
            />
            {circles}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          {children}
        </div>
      );
    }
  };

  return (
    <html lang="en">
      <head />
      <body>
        <AuthProvider>
          <RenderLayout>{children}</RenderLayout>
        </AuthProvider>
      </body>
    </html>
  );
};

export default Layout;
