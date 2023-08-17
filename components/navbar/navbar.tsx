'use client';
import React, { useState } from 'react';
import { Icons } from '../icons/icons';
import './navbar.scss';
import { type Pages } from './navbar.types';
import { useTheme } from 'next-themes';
import { NavBarContext } from './navbar.contexts';
import Aside from './components/aside';
import ProfileAvatarAndTitle from '../shared/profile-avatar-and-title';

const NavBar: React.FC = () => {
  const [asideVisibleInMobile, setAsideVisibleInMobile] = useState(false);
  const [currentlySelectedSection, setCurrentlySelectedSection] =
    useState<Pages>('home');
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const navBarContextValue = {
    toggleAsideVisible: () =>
      setAsideVisibleInMobile((prevState) => !prevState),
    currentlySelectedSection,
    setCurrentlySelectedSection,
  };
  return (
    <NavBarContext.Provider value={navBarContextValue}>
      <div className="hidden sm:flex">
        <Aside theme={theme} />
      </div>
      <div className="sm:hidden flex-row justify-start flex w-full">
        {asideVisibleInMobile ? (
          <div
            className={`fixed inset-0 bg-${
              theme === 'dark' ? 'black' : 'white'
            } opacity-50 z-0`}
            onClick={() => setAsideVisibleInMobile(false)}
          ></div>
        ) : null}
        <div
          className={`flex h-full absolute transition-slow z-50 ${
            asideVisibleInMobile ? 'on-screen-left' : 'off-screen'
          }`}
        >
          <Aside theme={theme} closeVisible={true} />
        </div>
        <div className="py-4 px-6 flex-1">
          <ProfileAvatarAndTitle textColor={textColor} />
        </div>
        <div className="py-4 px-6 justify-end flex-0 flex-shrink-1 hover:cursor-pointer">
          <Icons.menu
            onClick={() => setAsideVisibleInMobile((prevState) => !prevState)}
          />
        </div>
      </div>
    </NavBarContext.Provider>
  );
};
export default NavBar;
