import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import { Button } from '@mui/material';


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
            {activeStep < steps.length - 1 &&
                <Button onClick={() => setActiveStep(prev => prev = prev + 1)}>next</Button>}
            {activeStep === steps.length - 1 && <Button>save/edit</Button>}
            {components[activeStep]}
        </Box>
    )
}

export default StepperMui



