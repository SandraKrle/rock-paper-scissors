import './App.css'
import GameContextProvider from 'contexts/GameContext'
import Header from 'components/Header/Header'
import Game from 'components/Game/GameContainer'
import Footer from 'components/Footer/Footer'

const App = () => {
  return (
    <div className="App">
        <GameContextProvider>
          <Header />
          <Game />
        </GameContextProvider>
        < Footer />
    </div>
  );
}

export default App;
