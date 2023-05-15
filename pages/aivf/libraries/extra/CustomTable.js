import React, { useState, useEffect } from "react";
import { DataGrid, } from '@mui/x-data-grid'

export default function CustomTable({data, options}) {
    const [dataReady, setDataReady] = useState(false);
    const [rows, setRows] = useState(null);
    const [columns, setColumns] = useState(null);

    useEffect(() => {
        assembleData();
    }, [,data])

    const assembleData = () => {
        let rows1 = [];
        for(let i=0; i<data.data.length; i++){
            rows1.push({id:i,...data.data[i]});
        }
        let columns1 = [];
        columns1.push({
            field: data.header.id[0], headerName: data.header.id[0], renderHeader: (params) => (<strong style={{fontSize:'0.8rem'}}>{data.header.id[0]}</strong>),
        })
        for(let i=0; i<data.header.value.length; i++){
            columns1.push({
                field: data.header.value[i], headerName: data.header.value[i], type: 'number', renderHeader: (params) => (<strong style={{fontSize:'0.8rem'}}>{data.header.value[i]}</strong>),
            })
        }

        if(data.header.line){
            for(let i=0; i<data.header.line.length; i++){
                columns1.push({
                    field: data.header.line[i], headerName: data.header.line[i], type: 'number', renderHeader: (params) => (<strong style={{fontSize:'0.8rem'}}>{data.header.line[i]}</strong>),
                })
            }
        }
        setRows(rows1);
        setColumns(columns1);
        setDataReady(true);
    }

    const getPlot = () => {
        let margin = {top:options.margin_top, right:options.margin_right, left:options.margin_left, bottom:options.margin_bottom};
        return (
        <div style={{maxHeight:options.height}}>
            <div style={{paddingTop:margin.top, paddingBottom:margin.bottom, paddingLeft:margin.left, paddingRight:margin.right}}>
                <div style={{ width: '100%' }}>
                    <DataGrid sx={{maxHeight:options.height}} rows={rows} columns={columns} density="compact" hideFooter={true}/>
                </div>
            </div>
        </div>
        )
    }

    return(
        <React.Fragment>
            {dataReady && getPlot()}
        </React.Fragment>
    )
}