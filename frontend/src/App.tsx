import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GameScreen } from './features/gameScreen/GameScreen';
import { Box } from '@mui/system';

function App() {
  return (
    <Box height="100%">
      <GameScreen />
    </Box>
  );
}

export default App;
