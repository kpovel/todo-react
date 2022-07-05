import './App.css';

function TemplateTask() {
  return (
    <div className="border">
      <input type="checkbox" className="checkbox" status="noChecked"/>
      <div className="task-name">New task</div>
      <div className="close-icon"/>
    </div>
  );
}

function Tasks() {
  return (
    <div className="tasks">
      <TemplateTask/>
    </div>
  );
}

function AddTasks(props) {
  const placeholder = props.priority === 'HIGH' ? 'Додати важливу задачу' : 'Додати задачу';
  return (
    <div className="add-task">
      <input className="input text" type="text" placeholder={placeholder} autoComplete="off"/>
      <div className="add-icon"/>
    </div>
  );
}

function TaskList(props) {
  return (
    <div className="high-priority">
      <div className="text">{props.priority}</div>
      <AddTasks priority={props.priority}/>
      <Tasks/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="priority">
        <TaskList priority='HIGH'/>
        <TaskList priority='LOW'/>
      </div>
    </div>
  );
}

export default App;
