import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const QuestionBox = () => {
  return (
    <Box sx={{ padding: "10px" }}>
      <Typography>Q. What is the name of the CEO of your company?</Typography>
      <TextField
        id="outlined-basic"
        label="Genl_1"
        variant="outlined"
        multiline
        maxRows={4}
      />
    </Box>
  );
};

export default QuestionBox;
