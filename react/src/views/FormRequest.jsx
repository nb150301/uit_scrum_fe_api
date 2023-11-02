import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../style/style.css'; // Import your custom CSS

function FormRequest() {
  return (
    <div>
      <form className="form_container">
        <h1 className="form_title">Leave Request</h1>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Full name
          </label>
          <input type="name" className="form-control" id="nameInput" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="fromDate">From</label>
          <input type="date" id="fromDate" name="fromDate" />
          <label htmlFor="toDate">To</label>
          <input type="date" id="toDate" name="toDate" />
        </div>
        <div className="mb-3">
          <label className="form-label">Remaining days: 3 days</label>
        </div>
        <div className="mb-3">
          <label htmlFor="textareaInput" className="form-label">
            Reason
          </label>
          <textarea id="textareaInput" name="reasonInput" rows="4" cols="50"></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Submit
        </button>
      </form>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Submit Leave Request
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Are you sure to submit this leave request?</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                No
              </button>
              <button type="button" className="btn btn-primary" onClick={() => (window.location.href = 'self_history.html')}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormRequest;