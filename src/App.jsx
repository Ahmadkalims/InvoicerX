import React from 'react';
import Header from './components/Header';
import BGBlueLight from './assets/BG-Blue-light.png';

function App() {
  return (
    <div
      className="min-h-screen text-white font-sans"
      style={{
        backgroundImage: `url(${BGBlueLight})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />
    </div>
  );
}

export default App;
