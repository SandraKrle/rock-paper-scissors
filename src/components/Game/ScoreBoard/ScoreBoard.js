import { GameContext } from 'contexts/GameContext';
import { useContext } from 'react';
import './ScoreBoard.css';

const ScoreBoard = () => {
  const { playerScore, computerScore } = useContext(GameContext);

  return(
    <div className="scoreboard">
      <div className="scoreboard-title">Score</div>
      <div>
        <span className="scoreboard-score">{playerScore}</span>
        <span className="scoreboard-title">vs.</span>
        <span className="scoreboard-score">{computerScore}</span>
      </div>
    </div>
  )
}

export default ScoreBoard;