import DialogComponent from "../components/DialogMui"
import StepperMui from "../components/StepperMui"
import BuildProcess from "./BuildProcess"
import ConfiarationManagrt from "./ConfiarationManagrt"
import SelectBranches from "./SelectBranches"

function StepperJson() {
    return (
        <div>
            <DialogComponent content={
                <StepperMui components={[<SelectBranches />, <ConfiarationManagrt />, <BuildProcess />]} steps={["hi", "a", "b", "c"]} />
            } open={true} title={{ text: "json configuretion file", color: "info" }}  >
            </DialogComponent>
        </div>
    )
}

export default StepperJson
