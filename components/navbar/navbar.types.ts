export type Pages = 'home' | 'about' | 'resume' | 'contact';

export type NavBarContext = {
  toggleAsideVisible: () => void;
  currentlySelectedSection: Pages;
  setCurrentlySelectedSection: React.Dispatch<React.SetStateAction<Pages>>;
};

export type AsideContext = {
  currentlySelectedSection: Pages;
  currentlyHoveredPage: Pages | null;
  setCurrentlyHoveredPage: React.Dispatch<React.SetStateAction<Pages | null>>;
  setCurrentlySelectedSection: React.Dispatch<React.SetStateAction<Pages>>;
  toggleAsideVisible: () => void;
};

export type AsideProps = {
  closeVisible?: boolean;
};
