import { example_one_numerical_1, example_n_numerical_1, example_n_numerical_2, example_performance_1 } from "./examples/examples";
import GraphCard from "./examples/GraphCard";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        //mode: 'dark',
    },
});

const pageName = "PAGE_INDEX";
const userID = 1;
const identifierStart = [userID, pageName];
const main_color_scheme = ['#7dba00','#00560E','#ed7d31','#ffffb2','#fed976','#fd8d3c','#f03b20','#bd0026'];

export default function Main() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="custom-flex-container">
                <GraphCard graphData={example_one_numerical_1} title={"one_1"} identifier={[...identifierStart, 1]} colors={main_color_scheme}/>
                <GraphCard graphData={example_one_numerical_1} title={"one_2"} identifier={[...identifierStart, 2]} colors={main_color_scheme}/>
                <GraphCard graphData={example_one_numerical_1} title={"one_3"} identifier={[...identifierStart, 3]} colors={main_color_scheme}/>

                <GraphCard graphData={example_n_numerical_1} title={"n_1"} identifier={[...identifierStart, 4]} colors={main_color_scheme}/>
                <GraphCard graphData={example_n_numerical_2} title={"n_2"} identifier={[...identifierStart, 5]} colors={main_color_scheme}/>

                <GraphCard graphData={example_performance_1} title={"performance_1"} identifier={[...identifierStart, 6]} colors={main_color_scheme}/>
            </div>
        </ThemeProvider>
    );
}