//The proper way of making components is like this below --- simple as that
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../App.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

//Adding extra theme colors and stuff -- let's look into it
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/3Falls_Niagara.jpg"
            className="img"
          />
          <Box paddingX={1}>
            <Typography variant="subtitle1" color="initial">
              Niagara Falls
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTimeIcon sx={{ width: 12.5 }} />
            <Typography variant="p" color="initial" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
            <Rating
              name="simple-controlled"
              value={3.5}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography variant="body2" color="initial" marginLeft={0.5}>
              3.5
            </Typography>
            <Typography variant="body3" color="initial" marginLeft={1.5}>
              (655 reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="initial">
              From $123
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
