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
            <div style={{outlineStyle: 'none', boxShadow: 'none', borderColor: 'transparent', fontSize:'0.85rem', padding:'0.5rem',boxShadow: '0 5px 5px rgba(129, 124, 124, 0.7)', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                <div>{label}</div>
                {payload.map((elem, index) => {
                    return <div key={index}>{elem.dataKey}: <strong>{elem.value}</strong></div>
                })}
                
            </div>
        );
    }
    return null;
};



export const CustomTooltipForDiv = (content) => {
    return (
        <div style={{fontSize:'0.85rem', padding:'0.5rem',boxShadow: '0 5px 5px rgba(129, 124, 124, 0.7)', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
            {content}
        </div>
    );
};