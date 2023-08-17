import { type Dispatch, type SetStateAction, type ReactNode } from 'react';

export type Pages = 'home' | 'about' | 'resume' | 'contact';

export type NavBarContextType = {
  toggleAsideVisible: () => void;
  currentlySelectedSection: Pages;
  setCurrentlySelectedSection: Dispatch<SetStateAction<Pages>>;
};

export type AsideContextType = {
  currentlySelectedSection: Pages;
  currentlyHoveredPage: Pages | null;
  setCurrentlyHoveredPage: Dispatch<SetStateAction<Pages | null>>;
  setCurrentlySelectedSection: Dispatch<SetStateAction<Pages>>;
  toggleAsideVisible: () => void;
  textColor: string;
};

export type AsideProps = {
  closeVisible?: boolean;
  theme: string | undefined;
};

export type NavigationListItemProps = {
  icon: ReactNode;
  text: string;
  href: string;
  page: Pages;
};
