import { useInView } from 'react-intersection-observer'
import SVG from 'react-inlinesvg'

const LazyLoadedSVG = ({height, width, src, className}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
  return (

  <div ref={ref}>
    {inView &&
    <SVG 
        className={className}
        height={height}
        width={width}
        src={src} 
    />}
  </div>
  );
};

export default LazyLoadedSVG;
