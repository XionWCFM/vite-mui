import '@/App.css';
import { ReactComponent as ReactIcon } from '@/assets/react.svg';
import React from 'react';
function App() {
  return (
    <div>
      <React.Suspense fallback={<div>로딩중입니다.</div>}>
        <div>암</div>
        <ReactIcon />
      </React.Suspense>
    </div>
  );
}

export default App;
