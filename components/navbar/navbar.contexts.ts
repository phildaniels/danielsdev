import React from 'react';
import { type NavBarContextType, type AsideContextType } from './navbar.types';

export const AsideContext = React.createContext<AsideContextType>({
  currentlySelectedSection: 'home',
  currentlyHoveredPage: null,
  setCurrentlyHoveredPage: () => {},
  setCurrentlySelectedSection: () => {},
  toggleAsideVisible: () => {},
  textColor: 'text-white',
});

export const NavBarContext = React.createContext<NavBarContextType>({
  toggleAsideVisible: () => {},
  currentlySelectedSection: 'home',
  setCurrentlySelectedSection: () => {},
});
