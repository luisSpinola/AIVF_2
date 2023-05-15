import React from 'react';
import { ERROR_GRAPH_NOT_FOUND} from '../utils/localization/ptPt';
import GaugeComponent from '../graph_component/GaugeComponent';

//  MUI
import LinearProgress from '@mui/material/LinearProgress';


export default function Performance({data, graphSelected, setGraphSelected, optionsFlag, identifier, previousOptions}) {
    const plots = ["Gauge"];

    const chooseGraph = () => {
        let plotsInfo = [plots, graphSelected, setGraphSelected]

        switch(graphSelected){
            case 0:
                return <GaugeComponent id={graphSelected} data={data} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions}/>;
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