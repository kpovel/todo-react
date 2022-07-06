import React, {useState} from 'react';
import {Header} from './header';
import {List} from './taskList';

export {PriorityRow};


function PriorityRow(props) {
  const [taskName, setName] = useState('');
  const [taskList, setList] = useState([]);
  
  function setTaskName(e) {
    setName(e);
  }
  
  function clearInput() {
    setName('');
  }
  
  function addTaskToList() {
    const thereSuchTask = taskList.find(value => value === taskName);
    const noValidTaskName = !taskName.trim() || thereSuchTask;
    if (noValidTaskName) {
      return alert('Enter a valid task name');
    }
    
    setList(list => [...list, taskName]);
  }
  
  function handleRemove(id) {
    const newList = taskList.filter((item) => item !== id);
    setList(newList);
    
  }
  
  return (
    <div className="priorities">
      <div className="text">{props.priority}</div>
      <Header priority={props.priority}
              onHandleChange={setTaskName}
              addTask={addTaskToList}
              clearInput={clearInput}
              taskName={taskName}/>
      <List taskList={taskList} handleRemove={handleRemove}/>
    </div>
  );
}