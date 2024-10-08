import { allExpanded, darkStyles, JsonView } from "react-json-view-lite"
import { Paper, Typography } from "@mui/material"
import 'react-json-view-lite/dist/index.css';
import { useEffect } from "react"

import { useFileCunfiguretion } from "../store/FileConfiguretion"
import { useGetJsonFile } from "../api/file/QueryFile"


//display the josn file on the web
function DisplayJson() {
    const { data, isLoading } = useGetJsonFile() // get data of the file
    const { setFile } = useFileCunfiguretion()

    useEffect(() => {
        if (data)
            setFile(data)//when i have the data i want update state file 
    }, [data])

    if (isLoading)
        return <Typography component={"span"}>Loading...</Typography>//when i don't have data or my req still loading
    if (!data)
        return <Typography component={"span"}>no data </Typography>

    return (
        <div>
            <Paper sx={{ height: "100%" }}>
                <Typography component={"span"} >
                    <JsonView data={data} shouldExpandNode={allExpanded} style={darkStyles} />
                </Typography>
            </Paper>
        </div>
    )
}

export default DisplayJson
