import React from "react";
import "./modal.css";
import Input from "../Input/Input";

const Modal = ({ modal, onPost, onChange }) => {
  return (
    <div
      className="modal fade"
      id={modal.id}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              {modal.title}
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
          <div className="modal-body">
            {modal.input.map(input => (
              <Input onChange={onChange} key={input.label} input={input} />
            ))}
          </div>
          <div className="modal-footer">
            <button type="button" onClick={onPost} className="btn btn-primary">
              {modal.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
