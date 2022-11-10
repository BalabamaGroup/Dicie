import dynamic from 'next/dynamic';

const ThemeDynamic = dynamic(() => import('./Theme'), {
  ssr: false,
});

export default ThemeDynamic;
