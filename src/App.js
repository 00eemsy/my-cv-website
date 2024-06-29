import './App.css';
import TitlePage from './components/title/title'
import ElevatorPitch from './components/elevatorPitch/elevatorPitch';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';

function App() {
  return (
    <div>
        <TitlePage />
        <ElevatorPitch />
        <Experience />
        <Projects />
    </div>
  );
}

export default App;
