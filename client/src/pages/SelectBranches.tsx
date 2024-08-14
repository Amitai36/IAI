import { useState } from "react"
import { useGetUser } from "../api/file/QueryFile"
import SelectComponent from "../components/SelectComponent"
import { Button } from "@mui/material"
import { useStepper } from "../store/Stepper"

function SelectBranches() {
    const { data, isLoading } = useGetUser({ userId: "vnjkgGHCJHJHIcb" })
    const [select, setSelect] = useState('')
    const { setStepIncrease } = useStepper()
    if (isLoading || !data)
        return <h1>loading...</h1>
    return (
        <div>
            <SelectComponent lable="select branch" value={select}
                onChange={(e) => setSelect(String(e.target.value))}
                option={Object.values(data)} />
            <Button onClick={setStepIncrease}>Next</Button>
        </div>
    )
}

export default SelectBranches
