import React from "react";
//  RECHARTS
import { ResponsiveContainer, BarChart, Bar, LabelList, Tooltip } from "recharts";
import { handleAxes, handleGridOptions, handleLegendOptions } from "./components/components";
//  SHARED
import { getDataFormater } from "../../utils/shared/dataFormatters";
import { getOptionIfExists } from "../../utils/shared/functions";

export function BarPlot({data, options}){
    const getPlot = () => {
        let tickFormatter = getDataFormater(options.display_mode);
        let stacked = getOptionIfExists(options.stacked);
        let grouped = getOptionIfExists(options.grouped);
        let margin = {top:options.margin_top, right:options.margin_right, left:options.margin_left, bottom:options.margin_bottom};
        let axesArray = handleAxes(options.invert_axes, options.yTick, options.scale, data.header.id[0], false);
        let grid = handleGridOptions(options.grid, options.grid_stroke, options.grid_vertical, options.grid_horizontal, options.grid_opacity);
        let legend = handleLegendOptions(options.legend, options.legend_align, options.legend_pos, 'horizontal');
        
        let labelList = null;
        if(options.labelList) 
            labelList = <LabelList formatter={tickFormatter} offset={options.labelList_offset} angle={options.labelList_angle} position={options.labelList_pos}/>
        if(grouped){

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
                            <Tooltip formatter={tickFormatter}/>
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