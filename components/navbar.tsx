// prettier-ignore
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Icons } from './icons';
import TransitionWrapper from './transition-wrapper';

const NavBar = () => {
  const [asideVisibleInMobile, setAsideVisibleInMobile] = useState(false);

  return (
    <>
      <div className="hidden sm:flex h-full">
        <Aside />
      </div>
      <div className="sm:hidden flex-row justify-start flex w-full">
        <div
          className="flex h-full absolute"
          style={{
            transition: 'margin 0.5s ease-in-out',
            marginLeft: !asideVisibleInMobile ? '-1000px' : '0',
          }}
        >
          <Aside
            closeVisible={true}
            toggleAsideVisible={() =>
              setAsideVisibleInMobile((prevState) => !prevState)
            }
          />
        </div>
        <div className="py-4 px-6 flex-1">
          <h1 className="text-xl font-bold text-white">Phil Daniels</h1>
        </div>
        <div className="py-4 px-6 justify-end flex-0 flex-shrink-1 hover:cursor-pointer">
          <Icons.menu
            onClick={() => setAsideVisibleInMobile((prevState) => !prevState)}
          />
        </div>
      </div>
    </>
  );
};

type AsideProps = {
  closeVisible?: boolean;
  toggleAsideVisible?: () => void;
};

const Aside: React.FC<AsideProps> = ({
  closeVisible,
  toggleAsideVisible,
}: AsideProps) => {
  return (
    <div className="flex flex-col w-64 bg-gray-800 justify-start">
      <div
        className={`py-4 px-6 flex flex-row ${
          closeVisible === true ? 'self-end' : ''
        }`}
      >
        {closeVisible === true ? (
          <>
            <div className="flex-0 flex-shrink-1 hover:cursor-pointer">
              <Icons.close
                onClick={() => {
                  if (!toggleAsideVisible) {
                    return;
                  }
                  toggleAsideVisible();
                }}
              />
            </div>
          </>
        ) : (
          <h1 className="text-xl font-bold text-white flex-1">Phil Daniels</h1>
        )}
      </div>
      <div className="py-4 px-6">
        <ul className="text-white">
          <li className="my-2">
            <a href="#" className="hover:text-gray-400">
              Dashboard
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="hover:text-gray-400">
              Profile
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="hover:text-gray-400">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
