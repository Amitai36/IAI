import { Box, Button, TextField, TextFieldProps } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface PassWordButtonProps {
    title: string;
    Register: UseFormRegisterReturn
}

const PassWordButton = (props: PassWordButtonProps & TextFieldProps) => {
    const { title, Register, ...textFieldProps } = props;
    const [show, setShow] = useState(false);

    return (
        <Box sx={{ alignItems: "center" }} width={"100%"}>
            <TextField
                {...Register}
                label={title}
                fullWidth
                type={show ? "text" : "password"}
                InputProps={{
                    endAdornment: (
                        <Button onClick={() => setShow(prev => !prev)}>
                            {show ? <VisibilityIcon /> : <VisibilityOff />}
                        </Button>
                    )
                }}
                {...textFieldProps}
            />
        </Box>
    );
};

export default PassWordButton;
