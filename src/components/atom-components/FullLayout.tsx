import { Box } from '@mui/material';

interface FullLayoutProps {
  alignCentered?: boolean;
  justifyCentered?: boolean;
  children: React.ReactNode;
}

const FullLayout = ({
  children,
  alignCentered = false,
  justifyCentered = false,
}: FullLayoutProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        p: 3,
        ...(justifyCentered ? { justifyContent: 'center' } : {}),
        ...(alignCentered ? { alignItems: 'center' } : {}),
      }}
    >
      {children}
    </Box>
  );
};

export default FullLayout;
