import './App.css';
import TitlePage from './components/title/title'
import ElevatorPitch from './components/elevatorPitch/elevatorPitch';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <nav>
        <Link to='/'></Link>
      </nav>

      <Routes>
        <Route exact path='/' 
        element={<div>
          <TitlePage />
          <ElevatorPitch />
          <Experience />
          <Projects />
        </div>}></Route>
      </Routes>
    </BrowserRouter>
    // <div>
    //     <TitlePage />
    //     <ElevatorPitch />
    //     <Experience />
    //     <Projects />
    // </div>
  );
}

export default App;
