'use client';
import React, { useState } from 'react';
import './theme-slider.css';
import { useTheme } from 'next-themes';

const ThemeSlider: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const themeColor = theme ?? 'dark';
  const isDark = themeColor === 'dark';
  const sliderClassName = `slider ${isDark ? 'night' : ''}`;
  const starsClassName = `stars ${isDark ? 'active' : ''}`;
  const sphereClassName = `sphere ${isDark ? 'night' : ''}`;
  const moonClassName = `moon ${isDark ? 'night' : ''}`;
  const cloudsClassName = `clouds ${isDark ? 'night' : ''}`;

  return (
    <div
      className={sliderClassName}
      onClick={() => {
        setTheme(themeColor === 'dark' ? 'light' : 'dark');
      }}
    >
      <div className={starsClassName}>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className={cloudsClassName}>
        <div className="cloud-front">
          <div className="cloud-piece"></div>
          <div className="cloud-piece"></div>
          <div className="cloud-piece"></div>
          <div className="cloud-piece"></div>
          <div className="cloud-piece"></div>
        </div>
        <div className="cloud-back">
          <div className="cloud-piece"></div>
          <div className="cloud-piece"></div>
          <div className="cloud-piece"></div>
          <div className="cloud-piece"></div>
          <div className="cloud-piece"></div>
        </div>
      </div>
      <div className="slideable-area">
        <div className={sphereClassName}>
          <div className="sphere-bg-wrapper">
            <div className="sun"></div>
            <div className={moonClassName}>
              <div className="moon-crater"></div>
              <div className="moon-crater"></div>
              <div className="moon-crater"></div>
            </div>
          </div>
          <div className={`${sphereClassName} glow`}></div>
          <div className={`${sphereClassName} glow`}></div>
          <div className={`${sphereClassName} glow`}></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSlider;
