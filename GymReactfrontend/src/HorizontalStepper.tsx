import Stepper from "@mui/material/Stepper"
import React from 'react'
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Button from "@mui/material/Button"

const steps = ["select User","Select Plan", "confirm"]
const HorizontalStepper = () => {
    const [activeStep , setActiveStep] = React.useState(0)
  return (
    <div>
        <Stepper activeStep={activeStep}>
            {steps.map((step)=>(
                <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                </Step>
            ))}
        </Stepper>
      <br />

      <Button onClick={()=>setActiveStep(activeStep-1)}>Back</Button>
      <Button onClick={()=>setActiveStep(activeStep+1)}>next</Button>

    </div>
  )
}

export default HorizontalStepper
