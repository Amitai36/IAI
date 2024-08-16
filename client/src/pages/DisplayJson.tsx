import { allExpanded, defaultStyles, JsonView } from "react-json-view-lite"
import { IconButton, Paper, Typography } from "@mui/material"
import 'react-json-view-lite/dist/index.css';
import { useEffect, useState } from "react"
import { Edit } from "@mui/icons-material"

import { useFileCunfiguretion } from "../store/FileConfiguretion"
import { useGetJsonFile } from "../api/file/QueryFile"
import StepperJson from "./StepperJson"

function DisplayJson() {
    const { data, isLoading } = useGetJsonFile()
    const [openEdit, setOpenEdit] = useState(false)
    const { setFile } = useFileCunfiguretion()

    useEffect(() => {
        if (data)
            setFile(data)
    }, [isLoading])

    if (isLoading || !data)
        return <Typography>Loading...</Typography>

    return (
        <div>
            <IconButton onClick={() => setOpenEdit(prev => !prev)}><Edit /></IconButton>
            <Paper sx={{ height: "100%" }}>
                <Typography >
                    <JsonView data={data} shouldExpandNode={allExpanded} style={defaultStyles} />
                </Typography>
            </Paper>
            <StepperJson open={openEdit} setOpenEdit={setOpenEdit} />
        </div>
    )
}

export default DisplayJson
