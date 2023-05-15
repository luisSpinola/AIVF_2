import React from 'react';
import { ERROR_GRAPH_NOT_FOUND, MAP_PATH } from '../utils/localization/ptPt';

//  MUI
import LinearProgress from '@mui/material/LinearProgress';
import PathComponent from '../graph_component/PathComponent';


export default function GeoPath({data, graphSelected, setGraphSelected, optionsFlag, identifier, previousOptions, colors}) {
    const plots = [MAP_PATH];

    const chooseGraph = () => {
        let plotsInfo = [plots, graphSelected, setGraphSelected]
    
        switch(graphSelected){
            case 0:
                return <PathComponent id={graphSelected} data={data} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions} multi={true} colors={colors}/>;
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