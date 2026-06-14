import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName';
import AddToDo from './components/AddToDo';
import './App.css';

function App() {
  
  const [todoItems, setTodoItems] = useState([
    { name: "Buy Milk", dueDate: "2026-06-14" },
    { name: "Go to Gym", dueDate: "2026-06-15" }
  ]);

  
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  
  const handleAddButtonClicked = () => {
    if (taskName !== "" && taskDate !== "") {
      const newTodoItems = [...todoItems, { name: taskName, dueDate: taskDate }];
      setTodoItems(newTodoItems);
      setTaskName("");
      setTaskDate("");
    }
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo_container">
      <AppName />
      <div className="container text-center">
        
        
        <div className="row mb-3">
          <div className="col-6">
            <input 
              type="text" 
              className="form-control ap-input" 
              placeholder="Enter a task" 
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input 
              type="date" 
              className="form-control ap-input" 
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button 
              type="button" 
              className="btn btn-success ap-btn" 
              onClick={handleAddButtonClicked}
            >
              Add
            </button>          
          </div>
        </div>

        
        <div className="row">
          {todoItems.map((item) => (
            <AddToDo 
              key={item.name} 
              todoname={item.name} 
              date={item.dueDate} 
              onDeleteClick={handleDeleteItem}
            />
          ))}
        </div>
                
      </div>
      <footer style={{ textAlign: 'center', margin: '20px 0', fontSize: '14px', color: '#666' }}>
  <p>Made with ❤️ by Apurv while learning React</p>
</footer>

    </center>
    
  );
}

export default App;
