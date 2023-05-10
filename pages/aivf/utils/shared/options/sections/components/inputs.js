import React from 'react';
//  MUI
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from "@mui/material/Switch";

const SLIDER_SIZE = "150px";
const INPUT_SIZE = "55px";
const LABEL_COLOR = 'rgb(0, 0, 0, 0.6)';

export const sliderInput = (label, option, options, setOptions, {min, max, step}, disable) => {
    return (
        <React.Fragment>
            <div>
                <Typography style={{color:LABEL_COLOR}} variant='subtitle2'>
                    {label}
                </Typography>
            </div>
            <div style={{display:'flex', marginTop:'-0.4rem'}}>
                <div>
                    <Slider disabled={disable} style={{width:SLIDER_SIZE}}
                        size="small"
                        value={options[option]} onChange={(e, value) => updateOptions(option, parseInt(value), options, setOptions)}
                        min={min} max={max} step={step}
                    />
                </div>
                <div style={{marginLeft:'0.5rem', marginTop:'-17px'}}>
                    <Input disabled={disable} style={{width:INPUT_SIZE}} 
                        value={options[option]} onChange={(e) => updateOptions(option, parseInt(e.target.value), options, setOptions)}
                        inputProps={{step:step, min:min, max:max, type:"number"}}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export const switchInput = (label, option, options, setOptions, disable) => {
    return (
        <div style={{display:'flex'}}>
            <Typography style={{color:LABEL_COLOR}} variant='subtitle2'>
                {label}
            </Typography>
            <div style={{marginTop:'-0.05rem'}}>
                <Switch disabled={disable} size="small" checked={options[option]} onChange={(e) => updateOptions(option, e.target.checked, options, setOptions)}/>
            </div>
        </div>  
    )
}

export const updateOptions = (option, newValue, options, setOptions) => {
    let new_options = {...options};
    new_options[option] = newValue;
    setOptions(new_options);
}