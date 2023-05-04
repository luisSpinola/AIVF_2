export const setPreferences = (id, header, options, setOptions) => {
    if(header.preferences){
        if(header.preferences[id] !== null){
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
        return <React.Fragment>"Need Adapt"</React.Fragment>
    } else {
        return graphComponent;
    }
}