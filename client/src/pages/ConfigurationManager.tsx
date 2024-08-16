import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from "react-hook-form"
import { Grid, TextField, Typography } from "@mui/material"

import { useStepper } from "../store/Stepper"
import NextButton from "../components/SubmitButton";
import PassWordButton from "../components/PasswordButton";
import { useFileCunfiguretion } from "../store/FileConfiguretion"
import { configurationManagerSchema } from "../modules/formsSchema";


//checking with zod to reacr-hook-form
type FormSchema = z.infer<typeof configurationManagerSchema>;

function ConfiarationManagrt() {

    const { setStepIncrease } = useStepper()
    const { setFile, file: fileSettings } = useFileCunfiguretion()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(configurationManagerSchema), defaultValues:
        {
            confirmPassword: fileSettings.configurationManager.password,
            password: fileSettings.configurationManager.password,
            url: fileSettings.configurationManager.url,
            userName: fileSettings.configurationManager.user_name
        }
    })

    const onSubmit: SubmitHandler<FormSchema> = (event) => {
        let currentFile = { ...fileSettings }
        currentFile.configurationManager = {
            password: event.password,
            url: event.url, user_name: event.userName
        }//changing only configurationManager
        setFile(currentFile)//update state managment
        setStepIncrease()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} textAlign={"center"}>
                <Grid item xs={12}>
                    <TextField fullWidth color={errors.url ? "error" : "info"}
                        placeholder="url"  {...register("url")} />
                    {errors.url && <Typography color={"red"}>{errors.url.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth color={errors.userName && "error"}
                        placeholder="userName" {...register("userName", { required: true })} />
                    {errors.userName && <Typography color={"red"}>{errors.userName.message}</Typography>}
                </Grid>
                <Grid item xs={6}>
                    <PassWordButton title="password" Register={{ ...register("password", { required: true }) }}
                        color={errors.password && "error"} />
                    {errors.password && <Typography color={"red"}>{errors.password.message}</Typography>}
                </Grid>
                <Grid item xs={6}>
                    <PassWordButton title="confirm Password" Register={{ ...register("confirmPassword", { required: true }) }}
                        color={errors.confirmPassword && "error"} />
                    {errors.confirmPassword && <Typography color={"red"}>{errors.confirmPassword.message}</Typography>}
                </Grid>
                <NextButton />
            </Grid>
        </form>
    )
}

export default ConfiarationManagrt
