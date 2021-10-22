import PokeballListItemComponent from './components/pokeball-list-item'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="header"></div>
      <div className="leftside"></div>
      <div className="rightside"></div>
      <div className="main">
        <h1>What is Pokemon K8?</h1>
        <p>
          Pokemon K8 is a built-from-scratch Pokemon game using the Godot game engine.
          The purpose of this project is to remake/remaster Pokemon Fire Red, 
          keeping the original story and feel but to reflect all of the core changes introduced in newer generations.
        </p>
        <p>The most notable changes being:</p>
        <ul>
          <PokeballListItemComponent text="Modern Pokemon statistics, learnsets, typings." />
          <PokeballListItemComponent text="Addition of newer Pokemon evolutions." />
          <PokeballListItemComponent text="Updated core systems like reusable TM's and the addition of the Physical/Special split." />
          <PokeballListItemComponent text="And more..." />
        </ul>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App
