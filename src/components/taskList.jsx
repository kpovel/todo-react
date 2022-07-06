import React from 'react';
import {Task} from './templateTask';

export {List};

function List(props) {
  function handleRemove(id){
    props.handleRemove(id);
  }
  
  return (
    <ul className="tasks">
      {/*todo: rewrite this*/}
      
      {props.taskList.map((item) => {
          return <Task handleRemove={() => handleRemove(item)} taskName={item} key={item}/>;
        })}
    </ul>
  );
}