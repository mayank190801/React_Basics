import React from "react";
import { createPortal } from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

//I would create someshit here
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const Modal = (props) => {
  console.log(props);
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

//But we want them to render inside a totally different place in dom supppose, so how would we do that buddy?
//By learning and applying everything we can buddy!!

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
