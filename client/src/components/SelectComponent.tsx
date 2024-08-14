import { FormControl, InputLabel, MenuItem, Select, SelectProps } from "@mui/material"


interface SelectComponentProps {
    lable: string,
    option: string[],
    formColor: "error" | "primary" | "secondary" | "info" | "success" | "warning"
}

const SelectComponent = (props: SelectComponentProps & SelectProps) => {
    const { lable, formColor, option, ...other } = props

    return (
        <FormControl color={formColor} fullWidth>
            <InputLabel >{lable}</InputLabel>
            <Select size="small" label={lable} {...other}>
                {option.map((item => <MenuItem key={item} value={item}>{item}</MenuItem>))}
            </Select>
        </FormControl>
    )
}

export default SelectComponent
