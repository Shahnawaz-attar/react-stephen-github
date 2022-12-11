import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 bg-white p-10 ">Iam Modal</div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
