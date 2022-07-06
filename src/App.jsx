import React from 'react';
import {PriorityRow} from './components/priorityRow';
import './styles/App.css';

function App() {
  
  return (
    <div className="App">
      <div className="priority">
        <PriorityRow priority='HIGH'/>
        <PriorityRow priority='LOW'/>
      </div>
    </div>
  );
}

export default App;
