import { Grid } from "@mui/material"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import { useStepper } from "../store/Stepper"
import NextButton from "../components/SubmitButton"
import SelectComponent from "../components/SelectComponent"
import { useFileCunfiguretion } from "../store/FileConfiguretion"

//craete select branch using react-hook-form and generic select
function SelectBranches() {

    const { file: fileSettings } = useFileCunfiguretion()
    const { setStepIncrease } = useStepper()

    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm<{ branch: string }>({
        defaultValues: fileSettings.branchSelection
    })

    const onSubmit: SubmitHandler<{ branch: string }> = () => {
        setStepIncrease()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <Grid container spacing={2} width={"100%"} height={"100%"}>
                <Grid item xs={12} height={"100%"}>
                    <Controller
                        name="branch"
                        control={control}
                        render={({ field }) => (
                            <SelectComponent
                                {...field}
                                defaultValue={Object.values(fileSettings.branchSelection)[0]}
                                autoFocus={!!errors.branch}
                                formColor={"info"}
                                lable="Select Branch"
                                option={Object.values(fileSettings.branchSelection)}
                            />
                        )}
                    />
                </Grid>
                <NextButton />
            </Grid>
        </form >
    )
}

export default SelectBranches
