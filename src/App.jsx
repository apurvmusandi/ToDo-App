import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName';
import AddToDo from './components/AddToDo';

function App() {
  
  btn.onclick = function() { 
    
  };

  return (
    <center className="todo_container">
      <AppName />
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" className="form-control" placeholder="Enter a task" />
          </div>
          <div className="col-4">
            <input type="date" className="form-control" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">Add</button>          
          </div>
        </div>

        <AddToDo />
        


        
      </div>
    </center>
  );
}

export default App;
