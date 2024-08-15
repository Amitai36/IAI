import RecentFixes from "./RecentFixes"
import BuildProcess from "./BuildProcess"
import CopyToTarget from "./CopyToTarget"
import SelectBranches from "./SelectBranches"
import StepperMui from "../components/StepperMui"
import DialogComponent from "../components/DialogMui"
import ConfiarationManagrt from "./ConfigurationManager"

function StepperJson() {

    return (
        <div>
            <DialogComponent content={
                <StepperMui components={[<SelectBranches />,
                <ConfiarationManagrt />, <BuildProcess />,
                <CopyToTarget />, <RecentFixes />]}
                    steps={["Select branch", "Configuration manager",
                        "build process", "copy to target", "Recent fixes"]} />
            } open={true} title={{ text: "json configuretion file", color: "info" }}  >
            </DialogComponent>
        </div>
    )
}

export default StepperJson
