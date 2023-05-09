import GraphChooser from "./aivf/components/GraphChooser";
import { example_one_numerical_1 } from "./examples";

export default function Main() {

    return (
        <div>
            <GraphChooser data={example_one_numerical_1}/>
        </div>
    );
}