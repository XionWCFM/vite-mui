import { Container, styled } from '@mui/material';
import Spacing from './Spacing';
import ProgressbarWithLabel from './ProgressbarWithLabel';
import FullLayout from './FullLayout';

const CenterContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export { Spacing, CenterContainer, FullLayout, ProgressbarWithLabel };
