import { TextField } from "@mui/material"
import { useState } from "react"

function CopyToTarget() {
    const [copy, setCopy] = useState('')
    return (
        <TextField value={copy}
            onChange={(e) => setCopy(e.target.value)}
            label={"copy to target"} />
    )
}

export default CopyToTarget
