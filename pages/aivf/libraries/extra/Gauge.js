import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { CustomTooltipForDiv } from "../../utils/shared/functions";

import Chip from "@mui/material/Chip";

export default function Gauge({data, options, globalColors}) {
    const [isSelected, setSelected] = useState(false);
    const [showObjective, setShowObjective] = useState(true);

    const getPlot = () => {
        let margin = {top:options.margin_top, right:options.margin_right, left:options.margin_left, bottom:options.margin_bottom};
        let maxValue = data.data[0][data.header.objective];
        let value = data.data[0][data.header.value];
        let percentValue = (100*value)/maxValue;
        percentValue = percentValue.toFixed(0);

        if(value > maxValue) { maxValue = value;}
        let colors; (options.colors_lock && globalColors) ? colors = globalColors : colors = options.colors;

        let customStops = [0, value, maxValue];
        let segmentColors = [colors[0], '#f4f6f9'];
        let plotText = "";
        
        let expected = false;
        let expectedPercent = 0;
        if(data.header.expected){
            expected = true;
            expectedPercent = (100*value)/data.data[0][data.header.expected];
            expectedPercent = expectedPercent.toFixed(0);
            if(data.data[0][data.header.expected] > value){
                customStops = [0, data.data[0][data.header.expected], maxValue];
            } else {
                customStops = [0, data.data[0][data.header.expected], maxValue];
            }
        }

        let chipObjectiveColor = "default";
        let chipExpectedColor = "default";
        if(showObjective){
            chipObjectiveColor = "secondary";
        } else {
            segmentColors = [colors[0]];
            customStops = [0, data.data[0][data.header.expected]];
            maxValue = data.data[0][data.header.expected];
            chipExpectedColor = "secondary";
        }

        let text = <div style={{display:'flex', justifyContent:'center', fontSize:'0.9rem'}}>
            <div>
                {data.header.expected && 
                    <div>
                        <Chip onClick={() => setShowObjective(false)} sx={{height:'18px', cursor:'pointer'}} label={data.header.expected} size="small" color={chipExpectedColor}/>: {value.toLocaleString('pt-PT')} / <strong style={{color:colors[0]}}>{data.data[0][data.header.expected].toLocaleString('pt-PT')}</strong> ({expectedPercent}%)
                    </div>
                }
                <div>
                    {data.header.expected && 
                            <React.Fragment>
                                <Chip onClick={() => setShowObjective(true)} sx={{height:'18px', cursor:'pointer'}} label={data.header.objective} size="small" color={chipObjectiveColor} />: {value.toLocaleString('pt-PT')} / <strong>{data.data[0][data.header.objective].toLocaleString('pt-PT')}</strong> ({percentValue}%)
                            </React.Fragment>
                    }
                    {!data.header.expected && 
                        <React.Fragment>
                            {data.header.objective}: {value.toLocaleString('pt-PT')} / <strong>{data.data[0][data.header.objective].toLocaleString('pt-PT')}</strong> ({percentValue}%)
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>;

        return (
            <div style={{marginTop:margin.top, marginBottom:margin.bottom, marginLeft:margin.left, marginRight:margin.right}}>
                {options.info && options.info_top && <div>
                    <div style={{display:'flex', justifyContent:'center', fontSize:'0.9rem', marginBottom:'-0.5rem'}}>
                        {CustomTooltipForDiv(text, isSelected)}
                    </div>
                </div>}

                <div onMouseEnter={() => setSelected(true)} onMouseLeave={() => setSelected(false)} style={{position: 'relative', height:options.height, width:options.width, margin: '0 auto'}}>
                    {
                        <ReactSpeedometer needleHeightRatio={0.75}
                            forceRender={true}
                            currentValueText={plotText}
                            height={options.height}
                            fluidWidth={true}
                            needleTransitionDuration={0}
                            maxSegmentLabels={0}
                            customSegmentStops={customStops}
                            segmentColors={segmentColors}
                            minValue={0}
                            maxValue={maxValue}
                            value={value}
                            labelFontSize={'12px'}
                            needleColor={"#00000"}
                        />
                    }

                    {options.info && !options.info_top && <div>
                        <div style={{display:'flex', justifyContent:'center', fontSize:'0.9rem', marginTop:'-4rem'}}>
                            {CustomTooltipForDiv(text, isSelected)}
                        </div>
                    </div>}

                </div>
            </div>
        )
    }

    return(
        <React.Fragment>
            {getPlot()}
        </React.Fragment>
    )
}