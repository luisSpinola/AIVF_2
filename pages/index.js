import { example_one_numerical_1 } from "./examples/examples";
import GraphCard from "./examples/GraphCard";

import { createTheme, ThemeProvider } from '@mui/material/styles';

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
            <div className="custom-flex-container">
                <GraphCard graphData={example_one_numerical_1} title={"Exemplo 1"} identifier={[...identifierStart, 1]}/>
            </div>
        </ThemeProvider>
    );
}