// prettier-ignore
"use client";
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { Icons } from './icons';
import '../styles/navbar.scss';

type Pages = 'home' | 'about' | 'resume' | 'contact';

type NavBarContext = {
  toggleAsideVisible: () => void;
  currentlySelectedSection: Pages;
  setCurrentlySelectedSection: React.Dispatch<React.SetStateAction<Pages>>;
};
const NavBarContext = React.createContext({} as NavBarContext);

const NavBar: React.FC = () => {
  const [asideVisibleInMobile, setAsideVisibleInMobile] = useState(false);
  const [currentlySelectedSection, setCurrentlySelectedSection] =
    useState<Pages>('home');
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
            className="fixed inset-0 bg-black opacity-50 z-0"
            onClick={() => setAsideVisibleInMobile(false)}
          ></div>
        ) : null}
        <div
          className={`flex h-full absolute transition-slow z-50 ${
            asideVisibleInMobile ? 'on-screen' : 'off-screen'
          }`}
        >
          <Aside closeVisible={true} />
        </div>
        <div className="py-4 px-6 flex-1">
          <ProfileAvatar />
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

type AsideContext = {
  currentlySelectedSection: Pages;
  currentlyHoveredPage: Pages | null;
  setCurrentlyHoveredPage: React.Dispatch<React.SetStateAction<Pages | null>>;
  setCurrentlySelectedSection: React.Dispatch<React.SetStateAction<Pages>>;
};
const AsideContext = React.createContext({} as AsideContext);

type AsideProps = {
  closeVisible?: boolean;
};
const Aside: React.FC<AsideProps> = ({ closeVisible }) => {
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
  };
  return (
    <AsideContext.Provider value={asideContextValue}>
      <div className="flex flex-col bg-gray-800 justify-start h-full">
        <div className="flex flex-row p-4">
          <div className="flex-1 flex-shrink-0">
            <ProfileAvatar />
          </div>
          <div
            className={`flex-0 flex-shrink-1 hover:cursor-pointer ${
              closeVisible ? '' : 'hidden'
            }`}
          >
            <div className="p-2 bg-gray-700 rounded-full">
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
          <ul className="text-white">
            <NavigationListItem
              icon={<Icons.home />}
              text="Home"
              href="/"
              page="home"
            />
            <NavigationListItem
              icon={<Icons.about />}
              text="About"
              href="/"
              page="about"
            />
            <NavigationListItem
              icon={<Icons.message />}
              text="Contact"
              href="/"
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
  const {
    currentlySelectedSection,
    currentlyHoveredPage,
    setCurrentlyHoveredPage,
    setCurrentlySelectedSection,
  } = useContext(AsideContext);
  return (
    <li
      className={`my-2 flex flex-row transition-fast hover:cursor-pointer ${
        currentlySelectedSection === page
          ? 'text-blue-500'
          : currentlyHoveredPage != null && currentlyHoveredPage !== page
          ? 'text-gray-400'
          : 'text-white'
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
      }}
    >
      <div className="flex-shrink">{icon}</div>
      <div className="flex-1 mx-2">
        <div>{text}</div>
      </div>
    </li>
  );
};

const Divider = () => (
  <div className="flex flex-row justify-center">
    <div className="w-4/5 border-b border-gray-700"></div>
  </div>
);

const ProfileAvatar: React.FC = () => (
  <div className="flex flex-row">
    <img
      src="https://media.licdn.com/dms/image/C5603AQEzqcgNui7AlQ/profile-displayphoto-shrink_800_800/0/1616639874167?e=1687996800&v=beta&t=auYAesIXtN4h_w4_P8fBomq2y_AEGF24BKsmPXcoAZY"
      className="rounded-full w-16 h-16 flex-shrink-1 align-middle"
    />
    <div className="flex flex-col self-center px-4">
      <h1 className="text-xl font-bold text-white">Phil Daniels</h1>
      <h4>
        <i>Software Engineer and Architect</i>
      </h4>
    </div>
  </div>
);
export default NavBar;
