import { create } from "zustand";

interface StepProps {
    step: number;
    setStepIncrease: () => void;
    setStepDecrease: () => void;
    resetStepper: () => void;
}
//create state menagment for get active step
export const useStepper = create<StepProps>((set) => ({
    step: 0,
    setStepIncrease: () => {
        set((state) => ({
            step: state.step + 1,
        }));
    },
    setStepDecrease: () => {
        set((state) => ({
            step: state.step - 1,
        }));
    },
    resetStepper: () => {
        set(() => ({
            step: 0
        }));
    },
}));
