export const size = {
  mobile: 480,
  tablet: 768,
  desktop: 1025,
};

export const mobile = `(max-width: ${size.mobile}px)`;

export const tablet = `(max-width: ${size.tablet}px)`;

export const desktop = `(min-width: ${size.desktop}px)`;

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
  typeof window !== "undefined" &&
  typeof navigator !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0)
);
