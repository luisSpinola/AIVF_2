import GraphChooser from "./aivf/components/GraphChooser";

export default function Main() {
    const example_one_numerical_1 = {
        header: {
            type:'one_numerical',
            preferences: [{
                height: 450
            }]
        },
        data: [

        ]
    }
    return (
        <div>
            <GraphChooser data={example_one_numerical_1}/>
        </div>
    );
}