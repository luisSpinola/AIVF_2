import { example_one_numerical_1, example_n_numerical_1, example_n_numerical_2, example_performance_1, example_timeseries_1, example_location, example_performance_2, example_path } from "./examples/examples";
import GraphCard from "./examples/GraphCard";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import * as _ from 'lodash';

const theme = createTheme({
    palette: {
        //mode: 'dark',
        secondary: {
            main: '#121212',
        }
    },
});

const pageName = "PAGE_INDEX";
const userID = 1;
const identifierStart = [userID, pageName];
const main_color_scheme = [
    '#1f77b4', // Steel Blue
    '#ff7f0e', // Dark Orange
    '#2ca02c', // Forest Green
    '#d62728', // Firebrick
    '#9467bd', // Medium Purple
    '#8c564b', // Sienna
    '#e377c2', // Orchid
    '#7f7f7f'  // Gray
];

export default function Main() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="custom-flex-container">
                <GraphCard class1={"custom-card-3"} graphData={example_path} title={"path_1"} identifier={[...identifierStart, 10]} colors={main_color_scheme}/>
                <GraphCard class1={"custom-card-3"} graphData={example_location} title={"location_1"} identifier={[...identifierStart, 9]} colors={main_color_scheme}/>

                <GraphCard class1={"custom-card"} graphData={example_one_numerical_1} title={"one_1"} identifier={[...identifierStart, 1]} colors={main_color_scheme}/>
                <GraphCard class1={"custom-card"} graphData={example_one_numerical_1} title={"one_2"} identifier={[...identifierStart, 2]} colors={main_color_scheme}/>
                <GraphCard class1={"custom-card"} graphData={example_one_numerical_1} title={"one_3"} identifier={[...identifierStart, 3]} colors={main_color_scheme}/>

                <GraphCard class1={"custom-card"} graphData={example_n_numerical_1} title={"n_1"} identifier={[...identifierStart, 4]} colors={main_color_scheme}/>
                <GraphCard class1={"custom-card"} graphData={example_n_numerical_2} title={"n_2"} identifier={[...identifierStart, 5]} colors={main_color_scheme}/>

                <GraphCard class1={"custom-card-2"} graphData={example_performance_1} title={"performance_1"} identifier={[...identifierStart, 6]} colors={main_color_scheme}/>
                <GraphCard class1={"custom-card-2"} graphData={example_performance_2} title={"performance_2"} identifier={[...identifierStart, 7]} colors={main_color_scheme}/>

                <GraphCard class1={"custom-card"} graphData={example_timeseries_1} title={"timeseries_1"} identifier={[...identifierStart, 8]} colors={main_color_scheme}/>

                
            
            </div>
        </ThemeProvider>
    );
}