import { useEffect, useState } from "react";

//You can configure on the basis of what props you are getting basically
const useCounter = () => {
  const [counter, setCounter] = useState(0);

  //pta ni kya logic hua hai yaha
  useEffect(() => {
    console.log("I am from useEffect ");
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
