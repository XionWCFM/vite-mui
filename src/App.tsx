import * as S from '@/components/atom-components';
import { Typography } from '@mui/material';
const App = () => {
  return (
    <S.FullLayout justifyCentered alignCentered>
      <Typography variant="h3">무언가 잘못되었습니다.</Typography>
      <Typography variant="h5">잠시 후 다시 시도하세요.</Typography>
    </S.FullLayout>
  );
};

export default App;
