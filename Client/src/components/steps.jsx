import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4eb67f",
    },
  },
});

const steps = [
  {
    label: "Get To Know Us",
    description: `Empower your voice with Blogs, where users can seamlessly publish, craft, and distribute their unique narratives and insights.`,
  },
  {
    label: "Socialize with Blogs",
    description:
      "Write  ,Command and share your thoughts with the world.",
  },
  {
    label: "Get Started with Blogs",
    description: `Log in and continue your journey with Blogs.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };




  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button sx={{ mt: 1, mr: 1 }}>
              <Link
                to={"/signIn"}
                style={{ textDecoration: "none", color: "#4eb67f" }}
              >
                Log In
              </Link>
            </Button>
            <Button sx={{ mt: 1, mr: 1 }}>
              <Link
                to={"/signup"}
                style={{ textDecoration: "none", color: "#4eb67f" }}
              >
                Sign up
              </Link>
            </Button>
          </Paper>
        )}
      </Box>
    </ThemeProvider>
  );
}
