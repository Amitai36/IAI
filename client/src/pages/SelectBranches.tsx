import { Button } from "@mui/material"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import { useStepper } from "../store/Stepper"
import { useGetUser } from "../api/file/QueryFile"
import SelectComponent from "../components/SelectComponent"
import { useFileCunfiguretion } from "../store/FileConfiguretion"

function SelectBranches() {

    const { data, isLoading } = useGetUser()
    const { file: fileSettings, setFile } = useFileCunfiguretion()
    const { setStepIncrease } = useStepper()

    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm<{ branch: string }>({
        defaultValues: fileSettings.branchSelection
    })

    const onSubmit: SubmitHandler<{ branch: string }> = (event) => {
        let currentFile = { ...fileSettings }
        currentFile.branchSelection = event
        setFile(currentFile)
        setStepIncrease()
    }

    if (isLoading || !data)
        return <h1>loading...</h1>

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="branch"
                control={control}
                render={({ field }) => (
                    <SelectComponent
                        {...field}
                        defaultValue={Object.values(data)[0]}
                        autoFocus={!!errors.branch}
                        formColor={"info"}
                        lable="Select Branch"
                        option={Object.values(data)}
                    />
                )}
            />
            <Button type="submit">Next</Button>
        </form >
    )
}

export default SelectBranches
