import { useContext, useState } from 'react';
import { Icons } from '../../icons/icons';
import Divider from '../../shared/divider';
import ProfileAvatarAndTitle from '../../shared/profile-avatar-and-title';
import { AsideContext, NavBarContext } from '../navbar.contexts';
import NavigationListItem from './navigation-list-item';
import { type AsideProps, type Pages } from '../navbar.types';

const Aside: React.FC<AsideProps> = ({ closeVisible, theme }) => {
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
    textColor,
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
            <ProfileAvatarAndTitle textColor={textColor} />
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

export default Aside;
