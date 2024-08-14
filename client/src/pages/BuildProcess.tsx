import { Button, Grid, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { File } from "../api/file/types"

function BuildProcess() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<File["file"]["build"]>()
    const onSubmit = () => {

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField placeholder="version"  {...register("versionNumber")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField placeholder="command" {...register("command", { required: true })} />
                </Grid>
                <Grid item xs={12}>
                    <TextField placeholder="out put Directory" {...register("outputDirectory", { required: true })} />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" >submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default BuildProcess
