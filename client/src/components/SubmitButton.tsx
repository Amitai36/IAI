import { Button, Grid } from "@mui/material"

interface SubmitButtonProps {
    text?: string
}

function SubmitButton(props: SubmitButtonProps) {
    const { text } = props

    return (
        <Grid sx={{ position: 'absolute', bottom: 30, right: 30 }} item xs={12}>
            <Button size="large" type="submit">{text ?? "Next"}</Button>
        </Grid>
    )
}



export default SubmitButton
