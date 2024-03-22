import { BrowserRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Header from './Header';


// npm i react-bootstrap bootstrap (bootstrap package lai ne aavenpm )
// npm i react-router-dom  (router node module).
// npm i -g json-server (localhost)

// json-server --watch db.json --port 4000 (dami server)

// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser (server run naa thai to aa type kri ne permission aapvanu)


function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Header></Header>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
