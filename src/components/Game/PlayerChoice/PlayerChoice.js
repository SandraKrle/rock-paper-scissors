import './PlayerChoice.css';
import { GameContext } from "contexts/GameContext";
import React, { useContext } from "react";
import Icon from '../../Icon/Icon';
import triangle from 'assets/svg/bg-triangle.svg';

const PlayerChoice = ()  => {
  const { options, playerChoice, setPlayerChoice, winner } = useContext(GameContext);
 
  if (!playerChoice) {
    return (
      <div className="player-choice--not-selected">
        <img src={triangle} alt="triangle" />
          {options.map((option) => {
            return <Icon icon={option} onIconSelect={setPlayerChoice} key={option} selected={false}/>
          })}
      </div>
    )} 
  else {
    return (
      <div className="player-choice--selected">
        <Icon icon={playerChoice} onIconSelect={() => { }} selected={true} winner={winner}/>
        <div className="choice-text">You picked</div>
      </div>
    )}
}

export default PlayerChoice;