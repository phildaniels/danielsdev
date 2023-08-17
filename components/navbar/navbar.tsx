'use client';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '../icons/icons';
import './navbar.scss';
import { AsideContext, AsideProps, NavBarContext, Pages } from './navbar.types';
import { useTheme } from 'next-themes';

const NavBarContext = React.createContext<NavBarContext>({
  toggleAsideVisible: () => {},
  currentlySelectedSection: 'home',
  setCurrentlySelectedSection: () => {},
});

const NavBar: React.FC = () => {
  const [asideVisibleInMobile, setAsideVisibleInMobile] = useState(false);
  const [currentlySelectedSection, setCurrentlySelectedSection] =
    useState<Pages>('home');
  const { theme } = useTheme();
  const navBarContextValue = {
    toggleAsideVisible: () =>
      setAsideVisibleInMobile((prevState) => !prevState),
    currentlySelectedSection,
    setCurrentlySelectedSection,
  };
  return (
    <NavBarContext.Provider value={navBarContextValue}>
      <div className="hidden sm:flex">
        <Aside />
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
          <Aside closeVisible={true} />
        </div>
        <div className="py-4 px-6 flex-1">
          <ProfileAvatarAndTitle />
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

const AsideContext = React.createContext<AsideContext>({
  currentlySelectedSection: 'home',
  currentlyHoveredPage: null,
  setCurrentlyHoveredPage: () => {},
  setCurrentlySelectedSection: () => {},
  toggleAsideVisible: () => {},
});
const Aside: React.FC<AsideProps> = ({ closeVisible }) => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const backgroundColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const {
    toggleAsideVisible,
    currentlySelectedSection,
    setCurrentlySelectedSection,
  } = useContext(NavBarContext);
  const [currentlyHoveredPage, setCurrentlyHoveredPage] =
    useState<Pages | null>(null);
  const asideContextValue = {
    currentlySelectedSection,
    currentlyHoveredPage,
    setCurrentlyHoveredPage,
    setCurrentlySelectedSection,
    toggleAsideVisible,
  };
  return (
    <AsideContext.Provider value={asideContextValue}>
      <div
        className={`flex flex-col ${backgroundColor} justify-start h-full z-50 ${
          theme === 'dark' ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="flex flex-row p-4">
          <div className="flex-1 flex-shrink-0">
            <ProfileAvatarAndTitle />
          </div>
          <div
            className={`flex-0 flex-shrink-1 hover:cursor-pointer ${
              closeVisible ? '' : 'hidden'
            }`}
          >
            <div
              className={`p-2 bg-gray-${
                theme === 'dark' ? '700' : '100'
              } rounded-full`}
            >
              <Icons.close
                onClick={() => {
                  if (closeVisible) {
                    toggleAsideVisible();
                  }
                }}
              />
            </div>
          </div>
        </div>
        <Divider />
        <div className="px-6">
          <ul className={textColor}>
            <NavigationListItem
              icon={<Icons.home />}
              text="Home"
              href="/"
              page="home"
            />
            <NavigationListItem
              icon={<Icons.about />}
              text="About"
              href="/about"
              page="about"
            />
            <NavigationListItem
              icon={<Icons.message />}
              text="Contact"
              href="/contact"
              page="contact"
            />
          </ul>
        </div>
        <Divider />
      </div>
    </AsideContext.Provider>
  );
};

type NavigationListItemProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
  page: Pages;
};
const NavigationListItem: React.FC<NavigationListItemProps> = ({
  icon,
  text,
  page,
  href,
}) => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const {
    currentlySelectedSection,
    currentlyHoveredPage,
    setCurrentlyHoveredPage,
    setCurrentlySelectedSection,
    toggleAsideVisible,
  } = useContext(AsideContext);
  return (
    <li
      className={`my-2 flex flex-row transition-fast hover:cursor-pointer ${
        currentlySelectedSection === page
          ? 'text-blue-500'
          : currentlyHoveredPage != null && currentlyHoveredPage !== page
          ? 'text-gray-400'
          : textColor
      }`}
      onMouseEnter={() => {
        setCurrentlyHoveredPage(page);
      }}
      onMouseLeave={() => {
        setCurrentlyHoveredPage(null);
      }}
      onClick={() => {
        setCurrentlyHoveredPage(null);
        setCurrentlySelectedSection(page);
        toggleAsideVisible();
      }}
    >
      <Link href={href} className="flex flex-row">
        <div className="flex-shrink">{icon}</div>
        <div className="flex-1 mx-2">
          <div>{text}</div>
        </div>
      </Link>
    </li>
  );
};

const Divider: React.FC = () => (
  <div className="flex flex-row justify-center">
    <div className="w-4/5 border-b border-gray-700"></div>
  </div>
);

const ProfileAvatarAndTitle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  return (
    <div className="flex flex-row">
      <Image
        alt="profile picture"
        src="https://avatars.githubusercontent.com/u/11820265?v=4"
        className="rounded-full w-16 h-16 flex-shrink-1 align-middle"
      />
      <div className="flex flex-col self-center px-4">
        <h1 className={`text-xl font-bold ${textColor}`}>Phil Daniels</h1>
        <h4>
          <i className={textColor}>Software Engineer and Architect</i>
        </h4>
      </div>
    </div>
  );
};
export default NavBar;
