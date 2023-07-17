import { Fade } from '@mui/material';

interface FadeInProps {
  index: number;
  children: React.ReactElement;
}

const FadeIn = ({ children, index }: FadeInProps) => {
  return (
    <Fade in timeout={500} style={{ transitionDelay: `${500 * index}ms` }}>
      {children}
    </Fade>
  );
};

export default FadeIn;
