import React from 'react';

export {Header};

function Header(props) {
  const placeholder = props.priority === 'HIGH' ? 'Додати важливу задачу' : 'Додати задачу';
  
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask();
    props.clearInput();
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