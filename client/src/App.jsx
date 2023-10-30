import React from 'react';
import Map from './components/Map';
import Header from './components/Header';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Map />
    </div>
  );
}

export default App;
