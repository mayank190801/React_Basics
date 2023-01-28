import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { Input } from "./Input";

//so basically when we group together a lot of states and we want the latest updates of the last previous states
//We kind of spend our time in here, trying to process and practise this shit for sure
//Really annoying

//Grouping email state together and using it as one entity, pretty dope shit
//This helps in always reciveing the most updated state function -- simple

const emailReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return { value: action.val, isValid: action.val.includes("@") };
    case "UPDATE_VALIDITY":
      return { value: state.value, isValid: state.value.includes("@") };
  }

  return state;
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PASSWORD":
      return { value: action.val, isValid: action.val.trim().length > 6 };
    case "UPDATE_VALIDITY":
      return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return state;
};

const Login = (props) => {
  //So like below enteredEmail and emailIsValid are a part of one thing right??? They be doing there own part, we be using only reducers
  //So what do you want to happen in here!! Think about it and work on it
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();

  //Gotta write one more reducers for this bitch for sure
  //Really not enjoying it that much cause I currently don't see much of a use case
  //But yeah makes sense brother
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  const emailIsValid = emailState.isValid;
  const passwordIsValid = passwordState.isValid;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(
        emailState.value.includes("@") && passwordState.value.trim().length > 6
      );
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "UPDATE_EMAIL", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "UPDATE_PASSWORD", val: event.target.value });

    // setFormIsValid(
    //   emailState.value.includes("@") && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.val.includes("@"));
    dispatchEmail({
      type: "UPDATE_VALIDITY",
      validity: emailState.value.includes("@"),
    });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.value.trim().length > 6);
    dispatchPassword({
      type: "UPDATE_VALIDITY",
      validity: passwordState.value.trim().length > 6,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailState.isValid}
          id="email"
          label="E-Mail"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input
          isValid={passwordState.isValid}
          id="password"
          label="Password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
