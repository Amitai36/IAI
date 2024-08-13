import { useState } from "react"
import { useGetUser } from "../api/file/QueryFile"
import SelectComponent from "../components/SelectComponent"

function SelectBranches() {
    const { data, isLoading } = useGetUser({ userId: "vnjkgGHCJHJHIcb" })
    const [select, setSelect] = useState('')
    console.log(data)
    if (isLoading || !data)
        return <h1>loading...</h1>
    return (
        <div>
            <SelectComponent lable="select branch" value={select}
                onChange={(e) => setSelect(String(e.target.value))}
                option={Object.values(data)} />
        </div>
    )
}

export default SelectBranches
