import React from 'react';
import { ERROR_GRAPH_NOT_FOUND, MAP_LOCATION } from '../utils/localization/ptPt';
import BarPlotComponent from '../graph_component/BarPlotComponent';

//  MUI
import LinearProgress from '@mui/material/LinearProgress';
import LocationComponent from '../graph_component/LocationComponent';


export default function GeoLocation({data, graphSelected, setGraphSelected, optionsFlag, identifier, previousOptions, colors}) {
    const plots = [MAP_LOCATION];

    const chooseGraph = () => {
        let plotsInfo = [plots, graphSelected, setGraphSelected]
    
        switch(graphSelected){
            case 0:
                return <LocationComponent id={graphSelected} data={data} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions} multi={true} colors={colors}/>;
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