import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemberList from "./components/MemberList.js";

function App() {

  const [member, setMember] = useState([
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

  const addNewMember = person => {
    const newMember = {
      name: person.name,
      email: person.email,
      role: person.role
    };
    setMember([...member, newMember]);
  }

  return (
    <div className="App">
        <h1>Hello World!</h1>
        {/* <Form addNewMember={addNewMember} />
        <Member person={person} /> */}
    </div>
  );
}

export default App;
