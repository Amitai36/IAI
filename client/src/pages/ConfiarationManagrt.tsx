import { Button, Grid, TextField } from "@mui/material"
import { useForm } from "react-hook-form"

import { useStepper } from "../store/Stepper"
import { File } from "../api/file/types"

function ConfiarationManagrt() {

    const { setStepIncrease } = useStepper()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<File["file"]["configurationManager"]>()

    const onSubmit = () => {
        setStepIncrease()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField color={errors.url ? "error" : "info"}
                        placeholder="url"  {...register("url")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField color={errors.user_name && "error"}
                        placeholder="user_name" {...register("user_name", { required: true })} />
                </Grid>
                <Grid item xs={12}>
                    <TextField color={errors.password && "error"}
                        placeholder="password" {...register("password", { required: true })} />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" >submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default ConfiarationManagrt
