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
      <body className="app-body">
        <div>
           <BodyContainer title="Biography"/>
           <BodyContainer title="Hard Skills"/>
           <BodyContainer title="Resume"/>
           <BodyContainer title="Portfolio"/>
        </div>
      </body>

      <footer className='app-footer'>
        <div>
          <h3>Footer</h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
