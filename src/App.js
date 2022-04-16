import './App.css';
import BodyContainer from './components/body/bodycontainer';

function App() {
  return (
    <div className="App">
      <header className='app-header'>
        <div>
          <h1>Alexander Christopher Islip</h1>
        </div>
      </header>
      <div className="app-body">
        <div>
           <BodyContainer title="Biography" containerId="biography"/>
           <BodyContainer title="Hard Skills" containerId="hardskills"/>
           <BodyContainer title="Resume" containerId="resume"/>
           <BodyContainer title="Portfolio" containerId="portfolio"/>
        </div>
      </div>

      <footer className='app-footer'>
        <div>
          <h3>I love you malou</h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
