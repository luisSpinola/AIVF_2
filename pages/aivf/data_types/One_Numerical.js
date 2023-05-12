import React, {useState, useEffect} from 'react';
import { ERROR_GRAPH_NOT_FOUND, BAR_PLOT, PIE_CHART } from '../utils/localization/ptPt';
import BarPlotComponent from '../graph_component/BarPlotComponent';
import PiePlotComponent from '../graph_component/PiePlotComponent';

export default function OneNumerical({data, graphSelected, optionsFlag, watchOptions}) {
    const plots = [BAR_PLOT, PIE_CHART];

    const [selected, setSelected] = useState(graphSelected);

    const chooseGraph = () => {
        let plotsInfo = [plots, selected, setSelected]

        switch(selected){
            case 0:
                return <BarPlotComponent id={selected} data={data} optionsFlag={optionsFlag} plotsInfo={plotsInfo} watchOptions={watchOptions}/>;
            case 1:
                return <PiePlotComponent id={selected} data={data} optionsFlag={optionsFlag} plotsInfo={plotsInfo} watchOptions={watchOptions}/>;
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