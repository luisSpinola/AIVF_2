import { ADAPT_LOADING } from "../localization/ptPt";

export const setPreferences = (id, header, options, setOptions) => {
    if(header.preferences){
        if(header.preferences[id]){
            let new_options = {...options};
            Object.entries(header.preferences[id]).map(([key,value],i) => { 
                new_options[key] = value; 
            });
            setOptions(new_options);
        }
    }
}

export const getGraphComponent = (needAdapt, graphComponent) => {
    if(needAdapt){
        return <React.Fragment>{ADAPT_LOADING}</React.Fragment>;
    } else {
        return graphComponent;
    }
}

export const getOptionIfExists = (value) => {
    if(value !== undefined) return value;
    return false;
}

