//  MUI
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';

const SLIDER_SIZE = "150px";
const INPUT_SIZE = "50px";

export const sliderInput = (label, option, setOptions, {min, max, step}) => {
    console.log("option", option);
    console.log("min", min);
    console.log("max", max);
    console.log("step", step);
    return <FormControlLabel label={label} labelPlacement="top" control={
        <Grid container spacing={1}>
            <Grid item xs>
                <Slider
                    size="small"
                    value={option} 
                    min={min} max={max} step={step}
                />
            </Grid>
            <Grid item>
                <Input/>
            </Grid>
        </Grid>
    }/>
}