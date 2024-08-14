import { useForm } from "react-hook-form"

import { File } from "../api/file/types"
import { Button, Grid, TextField } from "@mui/material"

function ConfiarationManagrt() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<File["file"]["configurationManager"]>()
    const onSubmit = () => {

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField placeholder="url"  {...register("url")} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder="user_name" {...register("user_name", { required: true })} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder="password" {...register("password", { required: true })} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" >submit</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default ConfiarationManagrt
