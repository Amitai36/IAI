import { z } from "zod"
import { Button, TextField } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"

import { useStepper } from "../store/Stepper"
import { copyToTargetSchama } from "../modules/formsSchema"
import { useFileCunfiguretion } from "../store/FileConfiguretion"

type FormSchema = z.infer<typeof copyToTargetSchama>;

function CopyToTarget() {

    const { file: fileSettings, setFile } = useFileCunfiguretion()
    const { setStepIncrease } = useStepper()
    const {
        register,
        handleSubmit,
    } = useForm<FormSchema>({
        defaultValues: {
            targetDirectory: fileSettings.file.copyToTarget.targetDirectory
        }
    })

    const onSubmit: SubmitHandler<FormSchema> = (event) => {
        let currentFile = { ...fileSettings }
        currentFile.file.copyToTarget = { targetDirectory: event.targetDirectory }
        setFile(currentFile)
        setStepIncrease()
    }

    return (
        <form style={{ textAlign: "center" }} onSubmit={handleSubmit(onSubmit)}>
            <TextField fullWidth
                {...register("targetDirectory")}
                label={"copy to target"} />
            <Button type="submit" >next</Button>
        </form>
    )
}

export default CopyToTarget
