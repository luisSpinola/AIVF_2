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

export const CustomTooltip = ({ active, payload, label}) => {
    if (active && payload && payload.length) {
        return (
            <div style={{padding:'0.5rem',boxShadow: '0 15px 25px rgba(129, 124, 124, 0.7)', borderRadius: '5px',
                backdropFilter: 'blur(14px)', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                <div>{label}</div>
                {payload.map((elem, index) => {
                    return <div key={index}>{elem.dataKey}: <strong>{elem.value}</strong></div>
                })}
                
            </div>
        );
    }
    return null;
};