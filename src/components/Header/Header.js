import './Header.css';
import logo from 'assets/svg/logo.svg';
import ScoreBoard from 'components/Game/ScoreBoard/ScoreBoard';


const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo"/>
      </div>
  
      <ScoreBoard />
    </div>
  )
}

export default Header;