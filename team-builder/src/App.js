import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Member";
import MemberList from "./components/MemberList";

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

  const newMember = person => {
    const newPerson = {
      name: person.name,
      email: person.email,
      role: person.role
    }
  }


  return (
    <div className="App">

    </div>
  );
}

export default App;
