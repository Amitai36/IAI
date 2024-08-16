import { useState } from "react"
import { Edit } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

import DisplayJson from "./DisplayJson"
import StepperJson from "./StepperJson"

//create home page with app bar and edit button for open dialog
function Home() {
    const [openEdit, setOpenEdit] = useState(false)//for dialog to editing


    return (
        <div style={{ height: "100%", display: 'flex', flexDirection: 'column' }} >
            <AppBar sx={{ height: "10%" }} position="static">
                <Toolbar sx={{ alignItems: "center" }}>
                    <Typography variant="h4">Configuration Manager</Typography>
                    <IconButton sx={{ right: 0, position: "absolute" }} onClick={() => setOpenEdit(prev => !prev)}><Edit /></IconButton>
                </Toolbar>
            </AppBar>
            <div style={{ flexGrow: 1, overflow: 'auto', padding: 2 }}>
                <DisplayJson />
            </div>
            <StepperJson open={openEdit} setOpenEdit={setOpenEdit} />
        </div>
    )
}

export default Home
