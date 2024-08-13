import StepperMui from "../components/StepperMui"

function StepperJson() {
    return (
        <div>
            <StepperMui components={[<>h1</>, <h2>h2</h2>]} steps={["hi", "a", "b", "c"]} />
        </div>
    )
}

export default StepperJson
