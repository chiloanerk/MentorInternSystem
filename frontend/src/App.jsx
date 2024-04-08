import logo from './logo.svg';
import './App.css';
import axios from "axios";
import * as url from "node:url";

function App() {
  const baseUrl = 'https://gec-api.azurewebsites.net';

  axios.get(  baseUrl + '/users').then((response) => {
    console.log(response);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Check console to see if it works under /users
        </p>
      </header>
    </div>
  );
}

export default App;
