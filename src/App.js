import React from 'react';
import Chat from './components/Chat';
import Header from './components/Header';

function App() {
  const styles = {
    width: '70%',
    margin: '0 auto',
    height: '100vh',
    display: 'flex',
    position: 'relative',
    overflowY: 'hidden',
    backgroundColor: '#fafafa'
  };

  return (
    <div className='App' style={styles}>
      <Header />
      <Chat />
    </div>
  );
}

export default App;
