import { z } from "zod"
import { TextField } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"

import { useStepper } from "../store/Stepper"
import NextButton from "../components/SubmitButton"
import { copyToTargetSchama } from "../modules/formsSchema"
import { useFileCunfiguretion } from "../store/FileConfiguretion"

//checking ith zod to reacr-hook-form
type FormSchema = z.infer<typeof copyToTargetSchama>;

//create form to CopyToTarget for editing
function CopyToTarget() {

    const { file: fileSettings, setFile } = useFileCunfiguretion()
    const { setStepIncrease } = useStepper()
    const {
        register,
        handleSubmit,
    } = useForm<FormSchema>({
        defaultValues: {
            targetDirectory: fileSettings.copyToTarget.targetDirectory
        }
    })

    const onSubmit: SubmitHandler<FormSchema> = (event) => {
        let currentFile = { ...fileSettings }
        currentFile.copyToTarget = { targetDirectory: event.targetDirectory }
        setFile(currentFile)
        setStepIncrease()
    }

    return (
        <form style={{ textAlign: "center" }} onSubmit={handleSubmit(onSubmit)}>
            <TextField fullWidth
                {...register("targetDirectory")}
                label={"copy to target"} />
            <NextButton />
        </form>
    )
}

export default CopyToTarget
