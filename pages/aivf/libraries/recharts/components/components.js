import { XAxis, YAxis, CartesianGrid, Legend } from "recharts";


export const handleAxes = (inverted, yTick, scale, dataKey, reversed) => {
    let tickFormatters;
    let orientation;
    (reversed) ? orientation = 'right' : orientation = 'left';
    let axisScale = 'auto';
    let domain = null;
    if(scale === 1) {axisScale = 'log'; domain = ['auto', 'auto']};

    let axes = [];
    if(!inverted){
        axes.push(<YAxis yAxisId="left" tickCount={yTick} tickFormatter={tickFormatters} scale={axisScale} domain={domain}/>);
        axes.push(<XAxis dataKey={dataKey}/>);
        axes.push('horizontal');
    } else {
        axes.push(<YAxis yAxisId="left" orientation={orientation} dataKey={dataKey} type="category"/>);
        axes.push(<XAxis reversed={reversed} type="number" tickCount={yTick} tickFormatter={tickFormatters} scale={axisScale} domain={domain}/>);
        axes.push('vertical');
    }
    return axes;
}

export const handleGridOptions = (grid, grid_stroke, grid_vertical, grid_horizontal, grid_opacity) => {
    if(grid){
        if(grid_stroke){
            return <CartesianGrid strokeDasharray="4 4" vertical={grid_vertical} horizontal={grid_horizontal} opacity={grid_opacity/100} />
        } else {
            return <CartesianGrid vertical={grid_vertical} horizontal={grid_horizontal} opacity={grid_opacity/100} />
        }
    } 
}

export const handleLegendOptions = (legend, legend_align, legend_pos, legend_direction) => {
    let legendOn = null;
    if(legend){
        legendOn = <Legend align={legend_align} verticalAlign={legend_pos} layout={legend_direction}/>
    }
    return legendOn;
}