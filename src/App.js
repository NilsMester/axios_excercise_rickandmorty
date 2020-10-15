import React from 'react';

import './App.css';
import CharacterList from "./components/CharacterList";
import HeaderSet from "./components/Header";

function App() {
  return (
    <div className="App">
     <HeaderSet></HeaderSet>
     <CharacterList></CharacterList>
    </div>
  );
}

export default App;
