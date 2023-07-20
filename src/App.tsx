import * as S from '@/components/atom-components';
import { Typography } from '@mui/material';
import DarkToggleButton from './components/helper-components/DarkToggleButton';
import React from 'react';
import axios from 'axios';

const fetcher = async () => {
  const response = await axios.get<string[]>('/example');
  return response;
};

const App = () => {
  const [data, setData] = React.useState<string[]>();
  React.useEffect(() => {
    fetcher()
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <S.FullLayout justifyCentered alignCentered>
      <Typography variant="h3">무언가 잘못되었습니다.</Typography>
      <Typography variant="h5">잠시 후 다시 시도하세요.</Typography>
      <div>엄준식</div>
      <DarkToggleButton>엄준석</DarkToggleButton>
      <div>{data?.map((e) => <li key={e}>{e}</li>)}</div>
    </S.FullLayout>
  );
};

export default App;
