import { Box, useTheme } from '@mui/material';

interface SpacingProps {
  size: number;
  horizontal?: boolean;
}

const Spacing = ({ size, horizontal }: SpacingProps) => {
  const theme = useTheme();
  console.log(theme.spacing);
  return (
    <Box
      sx={{
        flex: 'none',
        height: horizontal ? 0 : theme.spacing(size),
        width: horizontal ? theme.spacing(size) : 0,
      }}
    />
  );
};

export default Spacing;
