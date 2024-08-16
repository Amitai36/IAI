import { Button, Grid } from "@mui/material"

function NextButton() {
    return (
        <Grid sx={{ position: 'absolute', bottom: 30, right: 30 }} item xs={12}>
            <Button size="large" type="submit">Next</Button>
        </Grid>
    )
}

export default NextButton
