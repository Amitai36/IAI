import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { Button } from '@mui/material';
import Step from '@mui/material/Step';
import Box from '@mui/material/Box';

import { useStepper } from '../store/Stepper';


interface StepperProps {
    steps: string[],
    components: JSX.Element[]
}

function StepperMui(props: StepperProps) {
    const { steps, components } = props
    // const [activeStep, setActiveStep] = useState(0)
    const { setStepDecrease, setStepIncrease, step } = useStepper()

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {components[step]}
            {step === steps.length - 1 && <Button>save/edit</Button>}
            {/* {step < steps.length - 1 &&
                <Button onClick={() => setStepIncrease()}>next</Button>} */}
            {step &&
                <Button onClick={() => setStepDecrease()}>back</Button>}
        </Box>
    )
}

export default StepperMui



