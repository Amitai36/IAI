import { Button, Grid, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { File } from "../api/file/types"
import { useStepper } from "../store/Stepper"

function BuildProcess() {
    const { setStepIncrease } = useStepper()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<File["file"]["build"]>()

    const onSubmit = () => {
        setStepIncrease()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField color={errors.versionNumber ? "error" : "info"} placeholder="version"
                        {...register("versionNumber", { required: true })} />
                </Grid>
                <Grid item xs={12}>
                    <TextField color={errors.command ? "error" : "info"} placeholder="command"
                        {...register("command", { required: true })} />
                </Grid>
                <Grid item xs={12}>
                    <TextField color={errors.outputDirectory ? "error" : "info"} placeholder="out put Directory"
                        {...register("outputDirectory", { required: true })} />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" >submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default BuildProcess
