import Square from './components/Square'
import Reset from './components/Reset'
import './App.css'

const App = () => {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square />
      <button onClick={Reset}>Restart Game</button>
    </>
  )
}

export default App



