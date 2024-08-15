import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import { ArrowBack } from '@mui/icons-material';
import { Button, Grid, Stack } from '@mui/material';

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
            <Stack spacing={2}>
                {step > 0 && <Button sx={{ width: "10%" }} variant='contained' color='warning' onClick={() => setStepDecrease()}><ArrowBack /></Button>}
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
                </Grid>
            </Stack>
        </Box>
    )
}

export default StepperMui



