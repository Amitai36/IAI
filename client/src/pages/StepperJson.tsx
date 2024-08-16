import RecentFixes from "./RecentFixes"
import BuildProcess from "./BuildProcess"
import CopyToTarget from "./CopyToTarget"
import SelectBranches from "./SelectBranches"
import StepperMui from "../components/StepperMui"
import DialogComponent from "../components/DialogMui"
import ConfiarationManagrt from "./ConfigurationManager"

interface StepperJsonProps {
    open: boolean,
    setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>,
}

function StepperJson(props: StepperJsonProps) {
    const { open, setOpenEdit } = props

    return (
        <div>
            <DialogComponent setOpen={setOpenEdit} content={
                <StepperMui components={[<SelectBranches />,
                <ConfiarationManagrt />, <BuildProcess />,
                <CopyToTarget />, <RecentFixes setOpen={setOpenEdit} />]}
                    steps={["Select branch", "Configuration manager",
                        "build process", "copy to target", "Recent fixes"]} />
            } open={open} title={{ text: "json configuretion file", color: "info" }}  >
            </DialogComponent>
        </div>
    )
}

export default StepperJson
