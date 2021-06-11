import { useEffect, useState } from 'react';
import './Icon.css';

const Icon = ({ icon, onIconSelect, selected, winner }) => {
  const [isPlayerWinner, setWinner] = useState('');

  useEffect(() => {
   if(winner === 'You win') {
     return setWinner('player-winner');
   }
   if(winner === 'You lose') {
     return setWinner('computer-winner')
   }
  }, [winner]);

  return (
    <div role="button" className={`icon icon-${icon} ${selected ? 'selected' : 'not-selected'} ${isPlayerWinner}`} onClick={(e) => onIconSelect(icon)} >
        <img src={`./images/icon-${icon}.svg`} alt={icon} label={isPlayerWinner}/>
    </div> 
  )
}

export default Icon;