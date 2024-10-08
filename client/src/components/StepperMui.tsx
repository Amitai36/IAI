import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import { ArrowBack } from '@mui/icons-material';
import { Grid, IconButton, Stack } from '@mui/material';

import { useStepper } from '../store/Stepper';


interface StepperProps {
    steps: string[],
    components: JSX.Element[]
}

function StepperMui(props: StepperProps) {
    const { steps, components } = props
    const { setStepDecrease, step } = useStepper()

    return (
        <Box sx={{ width: '100%', height: "100%" }}>
            <Stack height={"100%"} spacing={2}>
                <Stepper activeStep={step} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Grid height={"90%"} container spacing={2}>
                    <Grid item xs={12} height={"100%"}>
                        <div style={{ width: "95%", display: "flex", alignItems: "center" }}>
                            {components[step]}
                        </div>
                    </Grid>

                    <Grid sx={{ left: 25, bottom: 30, position: "absolute" }} item xs={10.5}>
                        {step > 0 &&
                            <IconButton sx={{ zIndex: 2 }}>
                                <ArrowBack onClick={() => setStepDecrease()} />
                            </IconButton>}
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    )
}

export default StepperMui



