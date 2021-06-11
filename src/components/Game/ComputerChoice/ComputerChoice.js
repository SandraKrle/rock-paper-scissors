import './ComputerChoice.css';
import { GameContext } from "contexts/GameContext";
import { useContext, useEffect } from "react";
import Icon from '../../Icon/Icon';

const ComputerChoice = () => {
  const { options, computerChoice, playerChoice, setComputerChoice, winner } = useContext(GameContext);

  useEffect(() => {
    const randomBetween0and2 = Math.floor(Math.random() * 3);
    if(playerChoice) setComputerChoice(options[randomBetween0and2]);
  }, [playerChoice]);

  return (
    <>
      { playerChoice && <div className="computer-choice--selected">
          <Icon icon={computerChoice} onIconSelect={() => { }} selected={true} winner={winner}/>
          <div className="choice-text">The house picked</div>
      </div> }
    </>
  )
}

export default ComputerChoice;