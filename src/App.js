import React, { useState, useEffect } from 'react';
import './style.css';
import { UserList } from './components/UserList';

export default function App() {
  const [apiUsers, setApiUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setApiUsers(data);
      });
  }, []);

  return (
    <div className="App">
      <UserList users={apiUsers} />
    </div>
  );
}
