import { Box, Button, ButtonProps, TextField } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { VisibilityOff } from "@mui/icons-material";
import { useState } from "react";


interface PassWordButtonProps {
    title: string,
    onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PassWordButton = (props: PassWordButtonProps & ButtonProps) => {
    const { onChangeFn, title, ...other } = props
    const [show, setShow] = useState(false)
    return <Box sx={{ alignItems: "center" }} width={"100%"}>
        <TextField name={other.name} label={title} fullWidth type={show ? "text" : "password"} InputProps={{
            endAdornment: (
                <Button name={"password"} onClick={() => setShow(prev => !prev)}>
                    {show ? <VisibilityIcon /> : <VisibilityOff />}
                </Button>

            )
        }} value={other.value} onChange={onChangeFn} />
    </Box>
}
export default PassWordButton