import { render, screen } from '@testing-library/react';
import { GameContext } from 'contexts/GameContext';
import PlayerChoice from './PlayerChoice';

function renderPlayerChoice(playerChoice) {
  const options = ['rock', 'paper', 'scissors'];
  const setPlayerChoice = () => { };
  const winner = '';

  return render(
  <GameContext.Provider value={{ options, playerChoice, setPlayerChoice, winner }}>
      <PlayerChoice />
    </GameContext.Provider>
  );
}

test('renders all three options when the player has not selected anything', () => {
  renderPlayerChoice(null);

  expect(screen.getByAltText(/rock/i)).toBeInTheDocument();
  expect(screen.getByAltText(/paper/i)).toBeInTheDocument();
  expect(screen.getByAltText(/scissors/i)).toBeInTheDocument();
});

test('renders only the selected option', () => {
  renderPlayerChoice('rock');

  expect(screen.getByAltText(/rock/i)).toBeInTheDocument();
  expect(screen.queryByAltText(/paper/i)).toBeNull();
  expect(screen.queryByAltText(/scissors/i)).toBeNull();
});