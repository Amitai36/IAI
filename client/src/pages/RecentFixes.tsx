import { toast } from "react-toastify";
import { Add, Delete } from "@mui/icons-material"
import { useForm, useFieldArray, Controller, SubmitHandler } from "react-hook-form"
import { Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material"

import { useStepper } from "../store/Stepper";
import SubmitButton from "../components/SubmitButton";
import { useFileCunfiguretion } from "../store/FileConfiguretion";
import { useUpdateFileConfiguration } from "../api/file/QueryFile";


interface FixesProps {
    fixes: { fix: string }[],
}
//create form to add recent fixes and after close the dialog
function RecentFixes({ setOpen }: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}) {

    const { file: fileSttings, setFile } = useFileCunfiguretion()
    const { mutate } = useUpdateFileConfiguration()
    const { resetStepper } = useStepper()
    const { control, handleSubmit, formState: { errors } }
        = useForm<FixesProps>({
            defaultValues: {
                fixes: fileSttings.vdd.recentFixes.map((fix) => { return { fix } })
            }
        });

    //beacse i have multi field that can to be here
    const { fields, append, remove } = useFieldArray<{ fixes: { fix: string }[] }>({
        control,
        name: "fixes"
    });

    const onSubmit: SubmitHandler<FixesProps> = (event) => {
        const currentFile = fileSttings
        currentFile.vdd.recentFixes = event.fixes.map((item) => item.fix)
        currentFile.vdd.releaseDate = new Date()
        mutate({ file: currentFile }, {
            onSuccess: (data) => {
                setFile(data)
                setOpen(prev => !prev)
                resetStepper()
                toast.success("File update")
            }
        }
        )
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
                <div style={{ width: "10%" }}>
                    <IconButton
                        onClick={() => append({ fix: "" })}>
                        <Add />
                    </IconButton>
                </div>
                <Grid container columnSpacing={1} rowSpacing={2}>
                    {fields.map((item, index) => (
                        <Grid item xs={6} key={item.id}>
                            <Controller
                                rules={{ required: "This field can't be empty", }}
                                name={`fixes.${index}.fix`}
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <TextField
                                            {...field}
                                            label="Fix"
                                            error={!!errors.fixes?.[index]}
                                            InputProps={{
                                                endAdornment: (
                                                    <Button onClick={() => remove(index)}><Delete /></Button>
                                                )
                                            }}
                                        />
                                        <Typography component={"span"} >
                                            {errors.fixes?.[index]?.fix?.message}
                                        </Typography>
                                    </>
                                )}
                            />
                        </Grid>
                    ))}
                </Grid>
                <div style={{ width: "10%" }}>
                    <SubmitButton text="update" />
                </div>
            </Stack>
        </form >
    )
}

export default RecentFixes