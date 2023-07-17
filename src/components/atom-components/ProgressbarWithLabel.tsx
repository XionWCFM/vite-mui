import { Box, LinearProgress, Typography } from '@mui/material';
import Spacing from './Spacing';

interface ProgressbarWithLabelProps {
  step?: number;
  totalSteps?: number;
}

const ProgressbarWithLabel = ({
  step = 0,
  totalSteps = 10,
}: ProgressbarWithLabelProps) => {
  return (
    <Box sx={{ textAlign: 'end' }}>
      <LinearProgress
        variant="determinate"
        value={(step / totalSteps) * 100}
        sx={{ height: 10, borderRadius: 5, flex: 1 }}
      />
      <Spacing size={0.5} />

      <Typography variant="h4" color={'text.secondary'}>
        {step}/{totalSteps}
      </Typography>
    </Box>
  );
};

export default ProgressbarWithLabel;
