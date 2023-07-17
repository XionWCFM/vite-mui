import { Box, useTheme } from '@mui/material';
import { HTMLAttributes, memo } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
}

const Spacing = memo(function Spacing({
  direction = 'vertical',
  size,
  ...props
}: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 'none',
        width: direction === 'horizontal' ? theme.spacing(size) : undefined,
        height: direction === 'vertical' ? theme.spacing(size) : undefined,
      }}
      {...props}
    />
  );
});
export default Spacing;
