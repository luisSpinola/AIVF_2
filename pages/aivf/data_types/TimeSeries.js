import React, {useState, useEffect} from 'react';
import { ERROR_GRAPH_NOT_FOUND, BAR_PLOT, TABLE_CHART, LINE_PLOT, AREA_PLOT } from '../utils/localization/ptPt';
import BarPlotComponent from '../graph_component/BarPlotComponent';
import TableComponent from '../graph_component/TableComponent';
import LinePlotComponent from '../graph_component/LinePlotComponent';
import AreaPlotComponent from '../graph_component/AreaPlotComponent';
import * as _ from 'lodash';

//  MUI
import LinearProgress from '@mui/material/LinearProgress';


export default function TimeSeries({data, graphSelected, setGraphSelected, optionsFlag, identifier, previousOptions, colors}) {
    const plots = [BAR_PLOT, LINE_PLOT, AREA_PLOT, TABLE_CHART];

    const [formattedData, setFormattedData] = useState(null);

    useEffect(() => {
        orderByDate();
    }, [,data])

    const orderByDate = () => {
        let tempArray = [];
        for(let i=0; i<data.data.length; i++){
            let tempElem = {};
            if(data.header.time){

            } else {
                tempElem[data.header.id] = new Date(data.data[i][data.header.id]).toLocaleDateString("pt-PT");
            }

            for(let j=0; j<data.header.value.length; j++){
                tempElem[data.header.value[j]] = data.data[i][data.header.value[j]];
            }
            tempArray.push(tempElem);
        }

        const sortArray = tempArray.sort((a, b) => b[data.header.id] < a[data.header.id] ? 1: -1);
        let returnArray = [];
        returnArray['header'] = _.cloneDeep(data.header);
        returnArray['data'] = sortArray;
        setFormattedData(returnArray);
    }

    const chooseGraph = () => {
        let plotsInfo = [plots, graphSelected, setGraphSelected]

        switch(graphSelected){
            case 0:
                return <BarPlotComponent id={graphSelected} data={formattedData} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions} multi={true} colors={colors}/>;
            case 1:
                return <LinePlotComponent id={graphSelected} data={formattedData} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions} multi={true} colors={colors}/>;
            case 2:
                return <AreaPlotComponent id={graphSelected} data={formattedData} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions} multi={true} colors={colors}/>;
            case 3:
                return <TableComponent id={graphSelected} data={formattedData} optionsFlag={optionsFlag} plotsInfo={plotsInfo} identifier={identifier} previousOptions={previousOptions}/>;
            case -1:
                return <LinearProgress style={{marginLeft: '1rem', marginRight: '1rem'}}/>
            default:
                return <React.Fragment>{ERROR_GRAPH_NOT_FOUND}</React.Fragment>
        }
    }

    return (
        <React.Fragment>
            {formattedData !== null && chooseGraph()}
        </React.Fragment>
    )
}