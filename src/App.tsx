import './App.css'
import palet_town from './assets/palet-town-screenshot.png'
import pokemon_logo from './assets/Pokemon_logo.png'
import K8ListComponent from './components/k8-list/k8-list'

function App() {

  const featureList = [
    { key: 0, text: 'Modern Pokemon statistics, learnsets, typings.' },
    { key: 1, text: 'Addition of newer Pokemon evolutions.' },
    { key: 2, text: 'Updated core systems like reusable TM\'s and the addition of the Physical/Special split.' },
    { key: 3, text: 'And more...' }
  ]

  return (
    <div className="container">
      <div className="header">
        <img className="pokemon-logo" src={ pokemon_logo } />
        <span className="pokemon-logo-text">K8</span>
      </div>
      <div className="leftside"></div>
      <div className="rightside"></div>
      <div className="main">
        <img className="screenshot" src={palet_town} />
        <h1 className="text-xl font-medium">What is Pokemon K8?</h1>
        <p>
          Pokemon K8 (ˈkeɪt) stands for: <strong>Kanto</strong> in the <strong>8th</strong> generation.
          It is a built-from-scratch Pokemon game using the Godot game engine.
          The purpose of this project is to remake Pokemon Fire Red and Leaf Green into a "definitive edition",
          much like Pokemon Emerald and Platnum did for their respective generations. 
          Keeping with the original story and feel but to reflect all of the core changes introduced in newer generations.
        </p>
        <p>The most notable changes being:</p>
        <K8ListComponent items={ featureList } />
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App
