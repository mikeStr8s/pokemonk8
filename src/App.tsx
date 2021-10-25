import K8ListItemComponent from './components/k8-list-item/k8-list-item'
import './App.css'
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
        <K8ListComponent items={ featureList } />
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App
