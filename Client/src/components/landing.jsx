import React from "react";
import Paper from "@mui/material/Paper";
import Image from "../assets/img/landing-background.png";
import { Typography } from "@mui/material";
import Steps from "./steps";
import { Grid } from "@mui/material";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};
export default function Landing() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "140px",
          marginTop: "100px",
        }}
      >
        Connect. Share. Inspire: Your World, Your Voice
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              height: "300px",
              width: "500px",
              marginRight: "40px",
              backgroundSize: "cover",
              borderRadius: "0px",
              boxShadow: "none",
              marginLeft: "40%",
            }}
            style={styles.paperContainer}
          ></Paper>
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginLeft: { xs: "0", md: "auto" } }}>
          <Steps />
        </Grid>
      </Grid>
    </>
  );
}
