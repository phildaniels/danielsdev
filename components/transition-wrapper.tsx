import React, { useState, useEffect } from 'react';
import './transition-wrapper.scss';

interface Props {
  children: React.ReactNode;
}

const TransitionWrapper: React.FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in-component${isVisible ? ' visible' : ''}`}>
      {children}
    </div>
  );
};

export default TransitionWrapper;
