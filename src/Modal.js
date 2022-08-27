import React, { useEffect } from "react";

const Modal = (props) => {
  const { modalContent, closeModal } = props;

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });

  return (
    <React.Fragment>
      <p>{modalContent}</p>
    </React.Fragment>
  );
};

export default Modal;
