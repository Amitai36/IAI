import { create } from "zustand";

interface StepProps {
    step: number;
    setStepIncrease: () => void;
    setStepDecrease: () => void;
}

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
}));
