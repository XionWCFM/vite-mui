import '@/App.css';
import React from 'react';
function App() {
  return (
    <div>
      <React.Suspense fallback={<div>로딩중입니다.</div>}>
        <div>암</div>
      </React.Suspense>
    </div>
  );
}

export default App;
