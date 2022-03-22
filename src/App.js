import './App.css';
import BodyContainer from './components/body/bodycontainer';

function App() {
  return (
    <div className="App">
      <header className='app-header'>
        <div>
          <h1>Person Name</h1>
        </div>
      </header>
      <body className="app-body">
        <div>
           <BodyContainer/>
           <BodyContainer/>
           <BodyContainer/>
           <BodyContainer/>
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
