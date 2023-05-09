import React from "react";
//  RECHARTS
import { ResponsiveContainer, ComposedChart, BarChart, Bar, LabelList } from "recharts";
//  SHARED
import { getDataFormater } from "../../utils/shared/dataFormatters";
import { getOptionIfExists } from "../../utils/shared/functions";

export function BarPlot({data, options}){

    const getPlot = () => {
        let tickFormatter = getDataFormater(options.display_mode);
        let stacked = getOptionIfExists(options.stacked);
        let grouped = getOptionIfExists(options.grouped);
        let margin = {top:options.margin_top, right:options.margin_right, left:options.margin_left, bottom:options.margin_bottom};

        let labelList = null;
        if(options.labelList) 
            labelList = <LabelList formatter={tickFormatter} offset={options.labelList_offset} angle={options.labelList_angle} position={options.labelList_position}/>

        if(grouped){/*
            return (
                <ResponsiveContainer width="100%" height={options.height}>
                    <ComposedChart data={data.data} margin={margin}>

                    </ComposedChart>
                </ResponsiveContainer>
            )
        */} else {
            let plots = [];
            for(let i=0; data.header.value.length; i++){
                plots.push(
                    <ResponsiveContainer key={data.header.value[i]} width="100%" height={options.height}>
                        <BarChart data={data.data} margin={margin}>
                            <Bar yAxisId="left" dataKey={data.header.value[i]} fill={options.colors[i]}>
                                {labelList} 
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                )
            }
        }
        

    }

    return(
        <React.Fragment>
            Cenas
        </React.Fragment>
    )
}

// {getPlot()}