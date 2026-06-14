function AddToDo() {
  return (
    <div className="row">
          <div className="col-6">
            Complete Assignment
          </div>
          <div className="col-4">
            2026-06-14
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">Delete</button>          
          </div>
        </div>
  );
}

export default AddToDo;