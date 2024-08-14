import ConfiarationManagrt from "./ConfiarationManagrt"
import DialogComponent from "../components/DialogMui"
import StepperMui from "../components/StepperMui"
import SelectBranches from "./SelectBranches"
import CopyToTarget from "./CopyToTarget"
import BuildProcess from "./BuildProcess"

function StepperJson() {
    return (
        <div>
            <DialogComponent content={
                <StepperMui components={[<SelectBranches     />, <ConfiarationManagrt />, <BuildProcess />, <CopyToTarget />]} steps={["hi", "a", "b", "c"]} />
            } open={true} title={{ text: "json configuretion file", color: "info" }}  >
            </DialogComponent>
        </div>
    )
}

export default StepperJson
