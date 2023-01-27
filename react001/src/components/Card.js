import "./Card.css";

//a wrapper component, I don't think so much of the usecase for this feature
//but definitely good to know that shit exists for sure --- really pisssed about this bad boy for sure
export const Card = (props) => {
  const currClassName = "card " + props.className;
  return <div className={currClassName}>{props.children}</div>;
};
