import React, {useState, useEffect} from 'react';

//  STRINGS
import { ERROR_TYPE_NOT_FOUND } from '../utils/localization/ptPt';

import OneNumerical from '../data_types/One_Numerical';

export default function GraphChooser({identifier, data, options}) {
    const [isOptionsLoaded, setIsOptionsLoaded] = useState(false);

    useEffect(() => {
        getOptions();
    }, [])

    const chooseType = () => {
        let selected = 0;

        switch(data.header.type){
            case "one_numerical":
                return <OneNumerical optionsFlag={options} data={data} graphSelected={selected} watchOptions={watchOptions}/>;
            default:
                return <React.Fragment>{ERROR_TYPE_NOT_FOUND}</React.Fragment>;
        }
    }

    const watchOptions = (options, selected) => {
        // TODO
        console.log("Should Save");
        setTimeout(() => {return true}, 2000)
    }
    const getOptions = () => {
        // TODO
        setIsOptionsLoaded(true);
    }

    return(
        <React.Fragment>
            {chooseType()}
        </React.Fragment>
    )
}