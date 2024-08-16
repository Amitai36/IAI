import { Add, Delete } from "@mui/icons-material"
import { useForm, useFieldArray, Controller, SubmitHandler } from "react-hook-form"
import { Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material"
import { useUpdateFileConfiguration } from "../api/file/QueryFile";
import { useFileCunfiguretion } from "../store/FileConfiguretion";
import { toast } from "react-toastify";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";
import { useStepper } from "../store/Stepper";


interface FixesProps {
    fixes: { fix: string }[],
}

function RecentFixes({ setOpen }: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}) {

    const { mutate } = useUpdateFileConfiguration()

    const { file: fileSttings, setFile } = useFileCunfiguretion()
    const { resetStepper } = useStepper()
    const { control, handleSubmit, formState: { errors } }
        = useForm<FixesProps>({
            defaultValues: {
                fixes: [{ fix: "" }]
            }
        });
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
                // refetch()
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
                    <Button type="submit"
                        color='success'
                        variant='contained'
                    >save/edit
                    </Button>
                </div>
            </Stack>
        </form >
    )
}

export default RecentFixes