import GraphChooser from "./aivf/components/GraphChooser";
import { example_one_numerical_1 } from "./examples";
import GraphCard from "./examples/GraphCard";

export default function Main() {
    return (
        <div className="custom-flex-container">
            <GraphCard graphData={example_one_numerical_1}/>
            <GraphCard graphData={example_one_numerical_1}/>
        </div>
    );
}