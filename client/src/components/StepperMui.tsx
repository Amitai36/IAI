import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { Button } from '@mui/material';
import Step from '@mui/material/Step';
import Box from '@mui/material/Box';
import { useState } from 'react';


interface StepperProps {
    steps: string[],
    components: JSX.Element[]
}

function StepperMui(props: StepperProps) {
    const { steps, components } = props
    const [activeStep, setActiveStep] = useState(0)

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {components[activeStep]}
            {activeStep === steps.length - 1 && <Button>save/edit</Button>}
            {activeStep < steps.length - 1 &&
                <Button onClick={() => setActiveStep(prev => prev = prev + 1)}>next</Button>}
            {activeStep &&
                <Button onClick={() => setActiveStep(prev => prev = prev - 1)}>back</Button>}
        </Box>
    )
}

export default StepperMui



