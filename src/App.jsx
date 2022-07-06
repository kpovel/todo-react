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

// const TASKS = [
//   {priority: 'HIGH', status: 'TODO', name: 'Rewrite todo list'},
//   {priority: 'HIGH', status: 'DONE', name: 'To eat'},
//   {priority: 'LOW', status: 'TODO', name: 'Wash the dishes'}
// ];

export default App;
