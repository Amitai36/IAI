import { Button, Grid, IconButton, TextField } from "@mui/material"
import { Add, Delete } from "@mui/icons-material"
import { useState } from "react"


function RecentFixes() {

    const [fixes, setFixes] = useState<string[]>([''])
    const onDelete = (key: number) => {
        setFixes(prevItems =>
            prevItems.slice(0, key).concat(prevItems.slice(key + 1))
        )
    }
    const onAdd = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: number) => {
        const currentValue = e.target.value
        const copy = [...fixes]
        copy[key] = currentValue
        setFixes(copy)
    }

    return (
        <div style={{ alignItems: 'center', }}>
            <IconButton onClick={() => setFixes(prev => [...prev, ''])}><Add /></IconButton>
            <Grid container spacing={2}>
                {fixes.map((item, key) =>
                    <Grid item xs={3}>
                        <TextField InputProps={{
                            endAdornment: (
                                <Button onClick={() => onDelete(key)}><Delete />
                                </Button>)
                        }} key={key} value={item} onChange={(e) => onAdd(e, key)} />
                    </Grid>)}
            </Grid>
        </div>
    )
}

export default RecentFixes
