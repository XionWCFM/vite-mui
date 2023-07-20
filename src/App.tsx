import * as S from '@/components/atom-components';
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <S.FullLayout justifyCentered alignCentered>
      <h3 data-testid="counter">{counter}</h3>
      <button
        data-testid="minus-button"
        onClick={() => setCounter((state) => state - 1)}
        disabled={isDisabled}
      >
        -
      </button>
      <button
        data-testid="plus-button"
        onClick={() => setCounter((state) => state + 1)}
        disabled={isDisabled}
      >
        +
      </button>
      <button
        data-testid="on/off-button"
        style={{
          backgroundColor: 'blue',
        }}
        onClick={() => setIsDisabled((state) => !state)}
      >
        온오프
      </button>
    </S.FullLayout>
  );
};

export default App;
