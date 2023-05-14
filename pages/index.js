import { example_one_numerical_1, example_n_numerical_1 } from "./examples/examples";
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

export default function Main() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="custom-flex-container">
                <GraphCard graphData={example_one_numerical_1} title={"one_1"} identifier={[...identifierStart, 1]}/>
                <GraphCard graphData={example_one_numerical_1} title={"one_2"} identifier={[...identifierStart, 2]}/>
                <GraphCard graphData={example_one_numerical_1} title={"one_3"} identifier={[...identifierStart, 3]}/>

                <GraphCard graphData={example_n_numerical_1} title={"n_1"} identifier={[...identifierStart, 4]}/>
            </div>
        </ThemeProvider>
    );
}