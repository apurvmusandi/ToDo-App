function AddToDo({ todoname, date, onDeleteClick }) {
  return (
    <div className="container text-center my-2">
        <div className="row ap-row">
          <div className="col-6 text-start">
            {todoname}
          </div>
          <div className="col-4">
            {date}
          </div>
          <div className="col-2">
            <button 
              type="button" 
              className="btn btn-danger ap-btn"
              onClick={() => onDeleteClick(todoname)}
            >
              Delete
            </button>          
          </div>
        </div>
    </div>
  );
}

export default AddToDo;
