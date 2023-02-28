import "./App.css";
import { useState } from "react";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import QuestionBox from "./components/QuestionBox";
import Button from "@mui/material/Button";

//how to write style in

const App = () => {
  return (
    <Container>
      <Box
        sx={{
          padding: "10px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color="initial">
          Automation Policy Tracker
        </Typography>
      </Box>
      <Box
        sx={{
          borderWidth: "1px 1px",
          borderStyle: "solid",
          borderColor: "rgb(231,235,240)",
          borderRadius: "10px",
          width: "500px",
        }}
      >
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
      </Box>
    </Container>
  );
};

export default App;
