'use client';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type PageWithTransitionProps = {
  children: React.ReactNode;
};

const PageWithTransition: React.FC<PageWithTransitionProps> = ({
  children,
}) => {
  const last = useRef(children);
  const [transitioning, setTransitioning] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    setTransitioning(true);
    setTimeout(() => {
      last.current = children;
      setTransitioning(false);
    }, 280);
  }, [pathname, searchParams]);
  return (
    <div
      className={`transition-very-slow ${
        transitioning ? 'off-screen-left' : 'on-screen'
      }`}
    >
      {children}
    </div>
  );
};

export default PageWithTransition;
