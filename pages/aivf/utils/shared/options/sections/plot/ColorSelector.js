import React, { useState } from "react";

import { OPTIONS_COLOR_OPACITY, OPTIONS_SECTION_COLOR } from "../../../../localization/ptPt";
import { getSectionStructure } from "../components/sectionStructure";
import { sliderInput, switchInput, updateOptions } from "../components/inputs";

//  COLOR
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
//  MUI
import Divider from "@mui/material/Divider";

export default function ColorSelector({option, options, setOptions, size, opacity, section, colors}){
    const [displayColorPicker, setDisplayColorPicker] = useState(Array(size).fill(false));

    const colorStyles = (colors, size) => {
        let styles = [];
        for(let i=0;i<size; i++){
            styles.push(reactCSS({
                'default': {
                    color: { height: '14px', borderRadius: '2px', background: `${colors[i]}`},
                    swatch: { padding: '5px', background: '#fff', boxShadow: '0 0 0 1px rgba(0,0,0,.1)', display: 'inline-block', cursor: 'pointer'},
                    popover: { position: 'absolute', zIndex: '2'},
                    cover: { position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px'},
                }
            }))
        }
        return styles;
    }

    const colorsDisplayFunc = (styles) => {
        let colors = [];
        for(let i=0; i<styles.length; i++){
            colors.push(<span key={section + i}>
                <div style={{...styles[i].swatch, minWidth:'36px'}} onClick={() => handleColorClick(i)}>
                    <div style={styles[i].color} />
                </div>
                { 
                    displayColorPicker[i] ? 
                        <div style={styles[i].popover}>
                            <div style={ styles[i].cover } onClick={() => handleColorClick(i)}/>
                            <SketchPicker disableAlpha={true} color={ options[option][i] } onChange={(color) => handleChange(color, i)}/>
                        </div> 
                    : null 
                }
            </span>)
        }
        return <div style={{maxWidth: '12rem'}}>{colors}</div>;
    }

    const handleChange = (color, i) => {
        let new_colors = [...options[option]];
        new_colors[i] = color.hex;
        updateOptions(option, new_colors, options, setOptions);
    }

    const handleColorClick = (i) => {
        let temp_displayColorPicker = [...displayColorPicker];
        temp_displayColorPicker[i] = !displayColorPicker[i];
        setDisplayColorPicker(temp_displayColorPicker);
    }

    const getColorsDisplay = () => {
        let styles = colorStyles(options[option], size);
        return colorsDisplayFunc(styles);
    }

    const getDetails = () => {
        let colorsDisplay = getColorsDisplay();
        return <React.Fragment>
            {colors && switchInput("Esquema Geral", "colors_lock", options, setOptions, false)}
            {!options.colors_lock && <React.Fragment><Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>{colorsDisplay}</React.Fragment>}
            {!colors && colorsDisplay}
            
            {opacity && 
                <React.Fragment>
                    <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
                    {sliderInput(OPTIONS_COLOR_OPACITY, "colors_opacity", options, setOptions, {min: 0, max: 100, step:1})}
                </React.Fragment>
            }
        </React.Fragment>
    } 
    return (
        <React.Fragment>
            {section && getSectionStructure(OPTIONS_SECTION_COLOR, getDetails(), null)}
            {!section && getColorsDisplay()}
        </React.Fragment>
    );
}