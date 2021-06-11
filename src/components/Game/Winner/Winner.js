import './Winner.css';
import { GameContext } from "contexts/GameContext";
import { useContext, useEffect } from "react";

const Winner = () => {
  const { 
    playerChoice,
    computerChoice,
    playerScore,
    setPlayerScore,
    computerScore,
    setComputerScore,
    winner, 
    setWinner,
    clearGame
  } = useContext(GameContext);

  useEffect(() => {
    if (computerChoice) calculateWinner();
  }, [computerChoice]);

  const calculateWinner = () => {
    const PLAYER_WIN = 'You win';
    const PLAYER_LOSE = 'You lose';
    const TIE = 'Its a tie';

    if (playerChoice === computerChoice) {
      setWinner(TIE);
    } else if (playerChoice === "rock") {
      switch (computerChoice) {
        case "scissors":
          setWinner(PLAYER_WIN);
          setPlayerScore(playerScore + 1);
          break;
        case "paper":
          setWinner(PLAYER_LOSE);
          setComputerScore(computerScore + 1);
          break;
        default:
          break;   
      }
    } else if (playerChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          setWinner(PLAYER_WIN);
          setPlayerScore(playerScore + 1);
          break;
        case "scissors":
          setWinner(PLAYER_LOSE);
          setComputerScore(computerScore + 1);
          break;
        default:
          break;  
      }
    } else {
      switch (computerChoice) {
        case "rock":
          setWinner(PLAYER_LOSE);
          setComputerScore(computerScore + 1);
          break;
        case "paper":
          setWinner(PLAYER_WIN);
          setPlayerScore(playerScore + 1);
          break;
        default: 
          break;
      }
    }
  };

  if(winner) {
    return(
      <div className="winner">
        <div className="winner-text">{winner}</div>
        <div className="play-again" role="button" onClick={clearGame}>Play again</div>
      </div>
   
    )
  }
  return null;
}

export default Winner;