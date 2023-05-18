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

const tooltipStyle= {outlineStyle: 'none', borderColor: 'transparent', fontSize:'0.85rem', padding:'0.5rem',boxShadow: '0px 0px 5px 0px #B8B8B8', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.8)'}
export const CustomTooltip = ({ active, payload, label}) => {
    if (active && payload && payload.length) {
        return (
            <div style={tooltipStyle}>
                <div>{label}</div>
                {payload.map((elem, index) => {
                    return <div key={index}>{elem.dataKey}: <strong>{elem.value.toLocaleString('pt-PT')}</strong></div>
                })}
                
            </div>
        );
    }
    return null;
};

export const CustomTooltipForDiv = (content, selected) => {
    if(selected){
        return <div style={{ 
            fontSize:'0.85rem', padding:'0.5rem', 
            boxShadow: '0px 0px 5px 0px #B8B8B8', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 1)'}}>
            {content}
        </div>
    }

    return (
        <div style={{ 
            fontSize:'0.85rem', padding:'0.5rem', 
            boxShadow: '0px 0px 5px 0px #B8B8B8', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
            {content}
        </div>
    );
};