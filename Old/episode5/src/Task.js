import { useState } from "react";

//Trying to add an task to the picture for us
export const Task = (props) => {
  const [exist, setExist] = useState(true);
  const [currentColor, setCurrentColor] = useState("red");
  const [messageButton, setMessageButton] = useState("done");

  const handleDelete = () => {
    setExist(!exist);
  };

  const handleDone = () => {
    setCurrentColor(currentColor === "red" ? "green" : "red");
    setMessageButton(messageButton === "done" ? "undone" : "done");
  };

  return (
    exist && (
      <div>
        <h1 style={{ color: currentColor }}>{props.task}</h1>

        <button onClick={handleDone}>{messageButton}</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    )
  );
};

//so basically delete button should entirely remove this piece of shit from the face of earth
//With that piece of shit, I might have to figure something out for it to work
