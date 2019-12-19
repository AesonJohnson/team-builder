import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import MemberList from "./components/MemberList";

function App() {

  const [members, setMembers] = useState([
    {
      name: "Rebecca",
      email: "rebeccasmith92@gmail.com",
      role: "Ambassador to Reacttown"
    },
    {
      name: "Mille",
      email: "millie@woof.com",
      role: "Very Cute Dog"
    },
    {
      name: "Bubbles the Clown",
      email: "lookbehindyou@murder.com",
      role: "The World's Most Haunted Doll"
    }
  ]);


  return (
    <div className="App">

    </div>
  );
}

export default App;
