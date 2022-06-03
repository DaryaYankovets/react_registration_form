import React, {useState} from 'react'
import RegistrationUsers from "./components/RegistrationUsers/RegistrationUsers.js";
import {CurrentUserContext} from './context/CurrentUserContext.js';
import { getLSData} from './localstorage/localstorage.js';
import './normalize.css';

function App() {

  const [currentUser, setCurrentUser] = useState(getLSData('activeUser'));

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <RegistrationUsers />
    </CurrentUserContext.Provider>
  );
}

export default App;
