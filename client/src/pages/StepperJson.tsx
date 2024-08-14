import ConfiarationManagrt from "./ConfigurationManager"
import DialogComponent from "../components/DialogMui"
import StepperMui from "../components/StepperMui"
import SelectBranches from "./SelectBranches"
import CopyToTarget from "./CopyToTarget"
import BuildProcess from "./BuildProcess"

function StepperJson() {
    return (
        <div>
            <DialogComponent content={
                <StepperMui components={[<SelectBranches />, <ConfiarationManagrt />, <BuildProcess />, <CopyToTarget />]}
                    steps={["Select branch", "Configuration manager", "build process", "copy to target"]} />
            } open={true} title={{ text: "json configuretion file", color: "info" }}  >
            </DialogComponent>
        </div>
    )
}

export default StepperJson
