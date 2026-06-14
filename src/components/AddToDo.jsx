function AddToDo() {

    let todoname = "Complete Assignment";
    let date = "2026-06-14";


  return (
    <div className="container text-center">
        <div className="row">
          <div className="col-6">
            {todoname}
          </div>
          <div className="col-4">
            {date}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">Delete</button>          
          </div>
        </div>
    </div>
  );
}

export default AddToDo;