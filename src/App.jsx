import React, {useState} from 'react';
import './App.css';

function Task(props) {
  return (
    <div className="border">
      <input type="checkbox" className="checkbox" status="noChecked"/>
      <div className="task-name">{props.taskName}</div>
      <div className="close-icon"/>
    </div>
  );
}

function Lists(props) {
  return (
    <ul className="tasks">
      {props.taskList.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

function Header(props) {
  const placeholder = props.priority === 'HIGH' ? 'Додати важливу задачу' : 'Додати задачу';
  
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask();
    props.clearInput('');
  }
  
  function handleChange(e) {
    props.onHandleChange(e.target.value);
  }
  
  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input className="input text" placeholder={placeholder} autoComplete="off"
        onChange={handleChange} value={props.taskName}/>
      <button type="submit" className="add-icon"/>
    </form>
  );
}

function PriorityRow(props) {
  const [taskName, setName] = useState('');
  const [taskList, addTask] = useState([]);
  
  function setTaskName(e) {
    setName(e);
  }
  function clearInput() {
    setName('');
  }
  
  
  function addTaskToList() {
    addTask(list => [...list, <Task taskName={taskName}></Task>]);
  }
  
  return (
    <div className="priorities">
      <div className="text">{props.priority}</div>
      <Header priority={props.priority} onHandleChange={setTaskName} addTask={addTaskToList} clearInput={clearInput}
        taskName={taskName}/>
      <Lists taskList={taskList}/>
    </div>
  );
}

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
