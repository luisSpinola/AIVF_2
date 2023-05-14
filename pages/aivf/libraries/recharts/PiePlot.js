import React from "react";
//  RECHARTS
import { ResponsiveContainer, LabelList, Tooltip, PieChart, Pie, Cell } from "recharts";
import { handleLegendOptions } from "./components/components";
//  SHARED
import { getDataFormater } from "../../utils/shared/dataFormatters";
import { CustomTooltip } from "../../utils/shared/functions";

export default function PiePlot({data, options}) {
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, value }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        let returnString = <React.Fragment>{`${value}`}</React.Fragment>;
        if(options.labelList_percent) returnString = <React.Fragment>{`${(percent * 100).toFixed(0)}%`}</React.Fragment>;

        return (
            <text x={x} y={y} fill={options.labelList_color} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {returnString}
            </text>
        );
    };

    const getPlot = () => {
        let tickFormatter = getDataFormater(options.display_mode);
        let margin = {top:options.margin_top, right:options.margin_right, left:options.margin_left, bottom:options.margin_bottom};
        let legend = handleLegendOptions(options.legend, options.legend_align, options.legend_pos, options.legend_direction);

        let labelList;
        let labelLine = false;
        if(options.labelList){
            if(options.labelList_mode === 0){
                labelList = true;
                labelLine = options.labelList_line;
            } else if(options.labelList_mode === 1){
                labelList = renderCustomizedLabel;
                labelLine = false;
            }
        }

        let spacing = 0;
        let inner = 0;
        let outer = 70;
        if(!options.radius_auto){
            spacing = options.radius_spacing;
            inner = options.radius_inner;
            outer = options.radius_outer;
        }


        return (
            <ResponsiveContainer width="100%" height={options.height}>
                <PieChart margin={margin}>
                    {legend}
                    <Tooltip content={<CustomTooltip/>} formatter={tickFormatter} isAnimationActive={false}/>
                    <Pie paddingAngle={spacing} innerRadius={inner} outerRadius={outer}
                        labelLine={labelLine} label={(options.labelList_mode === 0 || !options.labelList) ? labelList : renderCustomizedLabel} data={data.data} startAngle={0} endAngle={360} dataKey={data.header.value[0]} nameKey={data.header.id[0]}>
                        {data.data.map((entry, index) => <Cell key={options.colors[index]} fill={options.colors[index % options.colors.length]}/>)}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        )
        
        
    }

    return(
        <React.Fragment>
            {getPlot()}
        </React.Fragment>
    )
}