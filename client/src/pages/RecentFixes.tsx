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
        <form style={{ width: "100%", height: "100%", overflow: "hidden" }} onSubmit={handleSubmit(onSubmit)}>
            <Stack height={"90%"} spacing={2} mb={10}>
                <div style={{ width: "10%", }}>
                    <IconButton
                        onClick={() => append({ fix: "" })}>
                        <Add />
                    </IconButton>
                </div>
                <Grid sx={{ width: "100%", height: "10%", overflow: "auto" }} container columnSpacing={1} rowSpacing={2}>
                    {fields.map((item, index) => (
                        <Grid item xs={6} key={item.id} width={"100%"} >
                            <Controller
                                rules={{ required: "This field can't be empty", }}
                                name={`fixes.${index}.fix`}
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <TextField
                                            fullWidth
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
            </Stack>
            <div style={{ height: "15%", boxSizing: "content-box", width: "90%", zIndex: 1, backgroundColor: "#383838", position: "absolute", bottom: 0 }}>
            </div>
            <div style={{ zIndex: 2, position: "absolute", bottom: 0, right: 100 }}>
                <SubmitButton text="update" />
            </div>
        </form >
    )
}

export default RecentFixes