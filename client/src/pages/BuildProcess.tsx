import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button, Grid, TextField, Typography } from "@mui/material"

import { zodResolver } from "@hookform/resolvers/zod"
import { useStepper } from "../store/Stepper"
import { buildSchama } from "../modules/formsSchema"
import { useFileCunfiguretion } from "../store/FileConfiguretion"

type FormSchema = z.infer<typeof buildSchama>;

function BuildProcess() {

    const { setStepIncrease } = useStepper()
    const { setFile, file: fileSettings } = useFileCunfiguretion()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(buildSchama), defaultValues:
        {
            command: fileSettings.file.build.command,
            outputDirectory: fileSettings.file.build.outputDirectory,
            versionNumber: fileSettings.file.build.versionNumber
        }
    })

    const onSubmit: SubmitHandler<FormSchema> = (event) => {
        let currentFile = { ...fileSettings }
        currentFile.file.build = event
        setFile(currentFile)
        setStepIncrease()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} textAlign={"center"}>
                <Grid item xs={12}>
                    <TextField fullWidth color={errors.versionNumber ? "error" : "info"} placeholder="version"
                        {...register("versionNumber", { required: true })} />
                    {errors.versionNumber && <Typography color={"red"}>{errors.versionNumber.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth color={errors.command ? "error" : "info"} placeholder="command"
                        {...register("command", { required: true })} />
                    {errors.command && <Typography color={"red"}>{errors.command.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth color={errors.outputDirectory ? "error" : "info"} placeholder="out put Directory"
                        {...register("outputDirectory", { required: true })} />
                    {errors.outputDirectory && <Typography color={"red"}>{errors.outputDirectory.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" >next</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default BuildProcess
