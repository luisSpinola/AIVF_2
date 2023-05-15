import React from 'react';
import { ERROR_GRAPH_NOT_FOUND, BAR_PLOT, TABLE_CHART, LINE_PLOT, AREA_PLOT } from '../utils/localization/ptPt';
import BarPlotComponent from '../graph_component/BarPlotComponent';
import TableComponent from '../graph_component/TableComponent';
import LinePlotComponent from '../graph_component/LinePlotComponent';
import AreaPlotComponent from '../graph_component/AreaPlotComponent';

//  MUI
import LinearProgress from '@mui/material/LinearProgress';


export default function NNumerical({data, graphSelected, setGraphSelected, optionsFlag, identifier, previousOptions, colors}) {
    const plots = [BAR_PLOT, LINE_PLOT, AREA_PLOT, TABLE_CHART];

    const chooseGraph = () => {
        let plotsInfo = [plots, graphSelected, setGraphSelected]

        switch(graphSelected){
            case 0:
                return <BarPlotComponent id={graphSelected} data={data} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions} multi={true} colors={colors}/>;
            case 1:
                return <LinePlotComponent id={graphSelected} data={data} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions} multi={true} colors={colors}/>;
            case 2:
                return <AreaPlotComponent id={graphSelected} data={data} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions} multi={true} colors={colors}/>;
            case 3:
                return <TableComponent id={graphSelected} data={data} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions}/>;
            case -1:
                return <LinearProgress style={{marginLeft: '1rem', marginRight: '1rem'}}/>
            default:
                return <React.Fragment>{ERROR_GRAPH_NOT_FOUND}</React.Fragment>
        }
    }

    return (
        <React.Fragment>
            {chooseGraph()}
        </React.Fragment>
    )
}