import React, { useState } from "react";
//  RECHARTS
import { ResponsiveContainer, BarChart, Bar, LabelList, Tooltip, ComposedChart, YAxis, Line } from "recharts";
import { handleAxes, handleGridOptions, handleLegendOptions } from "./components/components";
//  SHARED
import { getDataFormater } from "../../utils/shared/dataFormatters";
import { CustomTooltip, getOptionIfExists } from "../../utils/shared/functions";

export default function BarPlot({data, options}){
    const [tooltipCursorWidth, setTooltipCursorWidth] = useState(null);
    const initChart = ref => {
        if(ref){ 
            const tooltipCursorWidth1 = ref.state.xAxisMap[0].width / data.data.length;
            setTooltipCursorWidth(tooltipCursorWidth1);
        }
    };

    const getExtraLine = () => {
        let returnArray = [];
        if(data.header.line !== undefined){
            returnArray.push(<YAxis yAxisId="right" orientation="right"/>);
            returnArray.push(<Line legendType="plainline" yAxisId="right" type="linear" 
                strokeWidth={2} dot={{ stroke: 'black', strokeWidth: 3, r: 1 }} dataKey={data.header.line[0]} stroke={options.colors[data.header.value.length]} 
            />);
        }
        return returnArray;
    }

    const getPlot = () => {
        let tickFormatter = getDataFormater(options.display_mode);
        let grouped = getOptionIfExists(options.grouped);
        let margin = {top:options.margin_top, right:options.margin_right, left:options.margin_left, bottom:options.margin_bottom};
        let axesArray = handleAxes(options.invert_axes, options.yTick, options.scale, data.header.id[0], false);
        let grid = handleGridOptions(options.grid, options.grid_stroke, options.grid_vertical, options.grid_horizontal, options.grid_opacity);
        let legend = handleLegendOptions(options.legend, options.legend_align, options.legend_pos, 'horizontal');
        let extraLine = getExtraLine();
        let stacked = null; if(options.stacked) stacked = "a";

        let tooltip = <Tooltip content={<CustomTooltip/>} cursor={{ strokeWidth: tooltipCursorWidth, strokeOpacity:'0.5'}} formatter={tickFormatter} isAnimationActive={false}/>;
        let labelList = null;
        if(options.labelList) 
            labelList = <LabelList formatter={tickFormatter} offset={options.labelList_offset} angle={options.labelList_angle} position={options.labelList_pos}/>
        if(grouped){
            return <ResponsiveContainer width="100%" height={options.height}>
                <ComposedChart ref={initChart} layout={axesArray[2]} data={data.data} margin={margin}>
                    
                    {grid}
                    {legend}
                    {tooltip}
                    {
                        data.header.value.map((_, i) => {
                            return <Bar key={i} yAxisId="left" stackId={stacked} dataKey={data.header.value[i]} fill={options.colors[i]} fillOpacity={options.colors_opacity/100}>
                                {labelList}
                            </Bar>
                        })
                    }
                    {extraLine[0]}
                    {extraLine[1]}
                    {axesArray[0]}
                    {axesArray[1]}
                </ComposedChart>
            </ResponsiveContainer>
        } else {
            let plots = [];
            for(let i=0; i<data.header.value.length; i++){
                plots.push(
                    <ResponsiveContainer key={data.header.value[i]} width="100%" height={options.height}>
                        <BarChart layout={axesArray[2]} data={data.data} margin={margin}>
                            {axesArray[0]}
                            {axesArray[1]}
                            {grid}
                            {legend}
                            {tooltip}
                            <Bar yAxisId="left" dataKey={data.header.value[i]} fill={options.colors[i]} fillOpacity={options.colors_opacity/100}>
                                {labelList}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                )
            }
            return plots;
        }
    }

    return(
        <React.Fragment>
            {getPlot()}
        </React.Fragment>
    )
}