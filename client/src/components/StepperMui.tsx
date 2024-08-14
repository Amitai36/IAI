import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { Button, Grid } from '@mui/material';
import Step from '@mui/material/Step';
import Box from '@mui/material/Box';

import { useStepper } from '../store/Stepper';


interface StepperProps {
    steps: string[],
    components: JSX.Element[]
}

function StepperMui(props: StepperProps) {
    const { steps, components } = props
    const { setStepDecrease, step } = useStepper()

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {components[step]}
                </Grid>
                <Grid item xs={6}>
                    {step === steps.length - 1 && <Button color='success' variant='contained'>save/edit</Button>}
                </Grid>
                <Grid item xs={6}>
                    {step > 0 && <Button color='warning' onClick={() => setStepDecrease()}>back</Button>}
                </Grid>
            </Grid>
        </Box>
    )
}

export default StepperMui



