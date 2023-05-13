import React, {useState, useEffect} from 'react';
import { ERROR_GRAPH_NOT_FOUND, BAR_PLOT, PIE_CHART } from '../utils/localization/ptPt';
import BarPlotComponent from '../graph_component/BarPlotComponent';
import PiePlotComponent from '../graph_component/PiePlotComponent';

//  MUI
import LinearProgress from '@mui/material/LinearProgress';

export default function OneNumerical({data, graphSelected, setGraphSelected, optionsFlag, identifier, previousOptions}) {
    const plots = [BAR_PLOT, PIE_CHART];

    const chooseGraph = () => {
        let plotsInfo = [plots, graphSelected, setGraphSelected]

        console.log(previousOptions)
        switch(graphSelected){
            case 0:
                return <BarPlotComponent id={graphSelected} data={data} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions}/>;
            case 1:
                return <PiePlotComponent id={graphSelected} data={data} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions}/>;
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