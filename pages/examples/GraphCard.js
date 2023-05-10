import { useState } from "react";
import GraphChooser from "../aivf/components/GraphChooser";

export default function GraphCard({identifier, graphData}){
    const [options, setOptions] = useState(false);
    return (
        <div className="custom-card">
            <div className="custom-card-header">
                <button onClick={() => setOptions(!options)}>Options</button>
            </div>
            <div className="custom-card-body">
                <GraphChooser data={graphData} options={[options, setOptions]}/>
            </div>
        </div>
    )
}