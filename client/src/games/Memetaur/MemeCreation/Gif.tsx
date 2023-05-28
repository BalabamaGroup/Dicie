import { useEffect, useRef, useState } from 'react';

interface GifProps {
  className: string;
  src: string;
  dimensions: [number, number];
  onClick: React.MouseEventHandler<HTMLImageElement>;
}

const Gif = ({ className, onClick, src, dimensions }: GifProps) => {
  const ref = useRef<HTMLImageElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => entry.isIntersecting && setInView(true));
      },
      {
        root: document.querySelector('gifs-scroll'),
      }
    );

    if (ref?.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return inView ? (
    <img
      onClick={onClick}
      className={className}
      src={src}
      style={{
        width: '100%',
        aspectRatio: `${dimensions[0]}/${dimensions[1]}`,
      }}
    />
  ) : (
    <img
      ref={ref}
      className={className}
      style={{
        width: '100%',
        aspectRatio: `${dimensions[0]}/${dimensions[1]}`,
        background: 'yellow',
      }}
    />
  );
};

export default Gif;
