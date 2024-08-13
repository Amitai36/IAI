import { FormControl, InputLabel, MenuItem, Select, SelectProps } from "@mui/material"


interface SelectComponentProps {
    lable: string,
    option: string[]
}

function SelectComponent(props: SelectComponentProps & SelectProps) {
    const { lable, option, ...other } = props

    return (
        <FormControl fullWidth>
            <InputLabel>{lable}</InputLabel>
            <Select size="small" label={lable} {...other}>
                {option.map((item => <MenuItem value={item}>{item}</MenuItem>))}
            </Select>
        </FormControl>
    )
}

export default SelectComponent
