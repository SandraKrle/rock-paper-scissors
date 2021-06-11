import './GameContainer.css';
import PlayerChoice from './PlayerChoice/PlayerChoice';
import ComputerChoice from './ComputerChoice/ComputerChoice';
import Winner from './Winner/Winner';
import { GameContext } from 'contexts/GameContext';

function Game() {
  return(
    <div className="game">
      <GameContext.Consumer>
        {(context) => {
          return (
            <>
              <PlayerChoice />
              <ComputerChoice />
              <Winner />
            </>
          )
        }
        }
      </GameContext.Consumer>
    </div>
  )
}

export default Game;