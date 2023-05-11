import { example_one_numerical_1 } from "./examples/examples";
import GraphCard from "./examples/GraphCard";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme_dark = createTheme({
    palette: {
        mode: 'dark',
    },
});

const theme = createTheme({
    palette: {
    },
});

export default function Main() {
    return (
        <ThemeProvider theme={theme}>
            <div className="custom-flex-container">
                <GraphCard graphData={example_one_numerical_1} title={"Exemplo 1"}/>
                <GraphCard graphData={example_one_numerical_1} title={"Exemplo 2"}/>
            </div>
        </ThemeProvider>
    );
}