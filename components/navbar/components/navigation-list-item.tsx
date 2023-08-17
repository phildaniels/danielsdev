import { useContext } from 'react';
import { AsideContext } from '../navbar.contexts';
import { type NavigationListItemProps } from '../navbar.types';
import Link from 'next/link';

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
    toggleAsideVisible,
    textColor,
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
          <div className={textColor}>{text}</div>
        </div>
      </Link>
    </li>
  );
};

export default NavigationListItem;
