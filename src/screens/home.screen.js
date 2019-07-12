import React from 'react';

const HomeScreen = () => {
  return (
    <div className="root">
      <h2>react-boilerplate</h2>
      <span>
        Fork of create-react-app with Bootstrap, Font Awesome and jQuery
      </span>

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary mt-3"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal{' '}
        <span>
          <i className="fa fa-fire" />
        </span>
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
