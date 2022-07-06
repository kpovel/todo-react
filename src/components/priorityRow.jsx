import React, {useReducer, useState} from 'react';
import {Header} from './header';
import {List} from './taskList';

export {PriorityRow};

function listReducer(state, action) {
  switch (action.type) {
    case  'ADD_ITEM':
      return [...state, action.taskName];
    case 'REMOVE_ITEM':
      return state.filter((item) => item !== action.id);
  }
}

function PriorityRow(props) {
  const [taskName, setName] = useState('');
  const [taskList, setList] = useReducer(listReducer, []);
  
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
    
    setList({type: 'ADD_ITEM', taskName});
  }
  
  function handleRemove(id) {
    setList({type: 'REMOVE_ITEM', id});
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
