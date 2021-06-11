import React, { createContext, useState } from 'react'

export const GameContext = createContext();

const GameContextProvider = (props) => {
  const options = ['rock', 'paper', 'scissors'];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(null);

  const clearGame = () => {
    setWinner(null);
    setPlayerChoice(null);
    setComputerChoice(null);
  }

  return ( 
    <GameContext.Provider value={{ 
      options, 
      playerChoice, 
      computerChoice,
      playerScore,
      computerScore,
      winner, 
      setPlayerChoice,
      setComputerChoice,
      setPlayerScore,
      setComputerScore,
      setWinner,
      clearGame
    }}>
      { props.children }
    </GameContext.Provider>
   );
}

export default GameContextProvider;