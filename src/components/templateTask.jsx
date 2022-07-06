import React, {useState} from 'react';

export {Task};

function Task(props) {
  const [statusTask, setStatusTask] = useState('task');
  
  function changeStatusTask(e) {
    const isTaskChecked = e.target.classList.contains('noChecked');
    if (isTaskChecked) {
      e.target.classList.replace('noChecked', 'checked');
      setStatusTask(item => item + ' taskChecked');
    } else {
      e.target.classList.replace('checked', 'noChecked');
      setStatusTask('task');
    }
  }
  
  return (
    <li className={statusTask}>
      <input type="checkbox" className="checkbox noChecked" onClick={changeStatusTask}/>
      <div className="task-name">{props.taskName}</div>
      <div className="close-icon" onClick={props.handleRemove}/>
    </li>
  );
}