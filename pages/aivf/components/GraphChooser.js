import React, {useState, useEffect} from 'react';

//  STRINGS
import { ERROR_TYPE_NOT_FOUND } from '../utils/localization/ptPt';

import OneNumerical from '../data_types/One_Numerical';
import NNumerical from '../data_types/N_Numerical';
import Performance from '../data_types/Performance';
import TimeSeries from '../data_types/TimeSeries';
import { SAVE_CACHE_NAME, SAVE_MODE } from '../utils/default/defaults';
import { getCachedOptions } from '../utils/shared/options/options';
import { LinearProgress } from '@mui/material';
import GeoLocation from '../data_types/GeoLocation';
import GeoPath from '../data_types/GeoPath';

export default function GraphChooser({identifier, data, options, colors}) {
    const [isOptionsLoaded, setIsOptionsLoaded] = useState(false);
    const [previousOptions, setPreviousOptions] = useState(null);
    const [selected, setSelected] = useState(null);
    const [started, setStarted] = useState(false);
    useEffect(() => {
        if(selected === "-1"){} 
        else if(SAVE_MODE === "cache"){
            if('caches' in window){
                caches.has(SAVE_CACHE_NAME).then((hasCache) => {
                    if(hasCache){
                        if(selected === null){
                            getCachedOptions(setPreviousOptions, setSelected, setIsOptionsLoaded, identifier, null);
                        } else {
                            getCachedOptions(setPreviousOptions, null, setIsOptionsLoaded, identifier, selected);
                        }
                    } else {
                        if(!started){
                            setStarted(true);
                            setSelected(0);
                        }
                        setIsOptionsLoaded(true);
                    }
                });
            }
        }
    }, [selected])

    const setSelectedTop = (value) => {
        setPreviousOptions(null);
        setIsOptionsLoaded(false);
        setSelected(value);
    }

    const chooseType = () => {
        switch(data.header.type){
            case "one_numerical":
                return <OneNumerical optionsFlag={options} data={data} graphSelected={selected} setGraphSelected={setSelectedTop} identifier={identifier} previousOptions={previousOptions} colors={colors}/>;
            case "n_numerical":
                return <NNumerical optionsFlag={options} data={data} graphSelected={selected} setGraphSelected={setSelectedTop} identifier={identifier} previousOptions={previousOptions} colors={colors}/>;
            case "time_series":
                return <TimeSeries optionsFlag={options} data={data} graphSelected={selected} setGraphSelected={setSelectedTop} identifier={identifier} previousOptions={previousOptions} colors={colors}/>;
            case "double_numerical":
                break;
            case "performance":
                return <Performance optionsFlag={options} data={data} graphSelected={selected} setGraphSelected={setSelectedTop} identifier={identifier} previousOptions={previousOptions} colors={colors}/>;
            case "geo_location":
                return <GeoLocation optionsFlag={options} data={data} graphSelected={selected} setGraphSelected={setSelectedTop} identifier={identifier} previousOptions={previousOptions} colors={colors}/>;
            case "geo_path":
                return <GeoPath optionsFlag={options} data={data} graphSelected={selected} setGraphSelected={setSelectedTop} identifier={identifier} previousOptions={previousOptions} colors={colors}/>
            default:
                return <React.Fragment>{ERROR_TYPE_NOT_FOUND}</React.Fragment>;
        }
    }

    return(
        <React.Fragment>
            {isOptionsLoaded ? chooseType() : <LinearProgress sx={{m:'1rem'}}/>}
        </React.Fragment>
    )
}