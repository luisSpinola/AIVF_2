import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { CustomTooltipForDiv } from "../../utils/shared/functions";

export default function Gauge({data, options}) {
    const [isSelected, setSelected] = useState(false);

    const getPlot = () => {
        let margin = {top:options.margin_top, right:options.margin_right, left:options.margin_left, bottom:options.margin_bottom};
        let maxValue = data.data[0][data.header.objective];
        let value = data.data[0][data.header.value];
        let percentValue = (100*value)/maxValue;
        percentValue = percentValue.toFixed(0);
        if(value > maxValue) { maxValue = value;}

        let tooltipContent = <div>
            {data.header.value}: <strong>{data.data[0][data.header.value]}</strong>
            <br/>
            {data.header.objective}: <strong>{data.data[0][data.header.objective]}</strong>
        </div>;

        return (
            <div style={{marginTop:margin.top, marginBottom:margin.bottom, marginLeft:margin.left, marginRight:margin.right}}>
                <div onMouseEnter={() => setSelected(true)} onMouseLeave={() => setSelected(false)} style={{position: 'relative', height:options.height, width:options.width, margin: '0 auto'}}>
                    {
                        <ReactSpeedometer 
                            forceRender={true}
                            currentValueText={value + "/" + data.data[0][data.header.objective] + " (" + percentValue + "%" + ")"}
                            fluidWidth={true}
                            needleTransitionDuration={0}
                            maxSegmentLabels={0}
                            customSegmentStops={[0, value, maxValue]}
                            segmentColors={[
                                options.colors[0],
                                '#f4f6f9'
                            ]}
                            minValue={0}
                            maxValue={maxValue}
                            value={value}
                            labelFontSize={'12px'}
                            needleColor={"#00000"}
                        />
                    }
                    {isSelected && <div style={{position: 'absolute', top: '0', zIndex: '10'}}>
                            {CustomTooltipForDiv(tooltipContent)}
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