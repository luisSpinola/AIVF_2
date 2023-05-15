import React, { useState } from "react";
import GraphChooser from "../aivf/components/GraphChooser";

//  MUI
import IconButton from "@mui/material/IconButton";
import SettingsIcon from '@mui/icons-material/Settings';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

export default function GraphCard({identifier, graphData, title, colors}){
    const [options, setOptions] = useState(false);
    const [showIcons, setShowIcons] = useState(false);
    return (
        <Card className="custom-card" onContextMenu={(e)=> e.preventDefault()}>
            <CardHeader onMouseEnter={() => setShowIcons(true)} onMouseLeave={() => setShowIcons(false)} 
                title={<Typography sx={{fontWeight:'bold'}} variant='body2'>{title}</Typography>} className="custom-card-header" action={
                <React.Fragment>
                    { showIcons && 
                        <IconButton sx={{marginRight:'.3rem'}} size="small" onClick={() => setOptions(!options)}>
                            <SettingsIcon fontSize="0.8rem"/>
                        </IconButton>
                    }
                </React.Fragment>
            }/>
            <div className="custom-card-body">
                <GraphChooser data={graphData} options={[options, setOptions]} identifier={identifier} colors={colors}/>
            </div>
        </Card>
    )
}