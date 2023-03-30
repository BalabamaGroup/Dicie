export const size = {
  mobile: 480,
  tablet: 768,
  desktop: 1025,
};

export const thresholds = {
  guessBoo: {
    setup: {
      sidePanelCollapse: 1400,
      sidePanelHorizontal: 1200,
    },
    main: {
      sidePanelCollapse: size.desktop + 1,
      sidePanelHorizontal: size.tablet + 1,
    },
  },
};

export const mobileAndSmaller = `(max-width: ${size.mobile}px)`;
export const mobileAndBigger = `(min-width: ${size.mobile - 1}px)`;

export const tabletAndSmaller = `(max-width: ${size.tablet}px)`;
export const tabletAndBigger = `(min-width: ${size.tablet - 1}px)`;

export const desktopAndSmaller = `(max-width: ${size.desktop}px)`;
export const desktopAndBigger = `(min-width: ${size.desktop - 1}px)`;

export const isMobile = () => {
  return window.innerWidth <= size.mobile;
};

export const isTablet = () => {
  return window.innerWidth <= size.tablet && window.innerWidth >= size.mobile;
};

export const isDesktop = () => {
  return window.innerWidth >= size.desktop;
};

export const isTouchDevice = !!(
  typeof window !== 'undefined' &&
  typeof navigator !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0)
);
