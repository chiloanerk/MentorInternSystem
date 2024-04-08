import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const baseUrl = 'https://gec-api.azurewebsites.net';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + '/users')
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            If it works, the users will appear below.
          </p>
          <ul>
            {users.map((user, index) => (
                <li key={index}>{user}</li>
            ))}
          </ul>
        </header>
      </div>
  );
}

export default App;
