import { useState } from "react";
//  MUI
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

import { RESET_TOOLTIP, SAVE_SAVED, SAVE_TOOLTIP, SAVE_TOOLTIP_SAVING } from "../../localization/ptPt";
import { SAVE_CACHE_NAME, SAVE_MODE } from "../../default/defaults";

export default function SaveButton({id, options, identifier, plotsInfo}){
    const saved_message_time = 2000;
    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [tooltipMessage, setTooltipMessage] = useState(SAVE_TOOLTIP);

    const [isResetting, setIsResetting] = useState(false);

    const user_id = identifier[0];
    const page_id = identifier[1];
    const plot_collection_id = identifier[2];

    const onSave = () => {
        setIsSaving(true);
        setTooltipMessage(SAVE_TOOLTIP_SAVING);
        watchOptions(false);
    }

    const onReset = () => {
        setIsResetting(true);
        watchOptions(true);
    }

    const watchOptions = (reset) => {
        switch(SAVE_MODE){
            case 'cache':
                saveInCache(reset);
                break;
            default:
                break;
        }
    }

    const finishSavingFlags = (reset) => {
        if(!reset){
            setIsSaving(false); 
            setTooltipMessage(SAVE_TOOLTIP);
        } else {
            setIsResetting(false);
        }
    }

    const saveInCache = (reset) => {
        if('caches' in window){
            caches.has(SAVE_CACHE_NAME).then((hasCache) => {
                if(hasCache){
                    getCacheValue(reset);
                } else {
                    saveCache([getCacheObjUsers()], false);
                    if(!reset) {setSaved(true); setTimeout(() => {setSaved(false);}, saved_message_time);}
                }
            });
        }
    }

    // TODO - improve function structure
    const getCacheValue = async (reset) => {
        if (typeof caches === 'undefined') return false;
        const cacheStorage = await caches.open(SAVE_CACHE_NAME);
        const cachedResponse = await cacheStorage.match(SAVE_CACHE_NAME);
        return cachedResponse.json().then((item) => {
            let new_cache = item;

            let user_exists = false; 
            for(let i=0; i<item.length; i++){ //  USERS
                if(item[i].id === user_id){
                    user_exists = true;

                    let page_exists = false;
                    for(let j=0; j<item[i].pages.length; j++){ //  PAGES
                        if(item[i].pages[j].page_id === page_id){ // PAGE EXISTS
                            page_exists = true;
                            
                            let plotsCollection_exists = false;
                            for(let y=0; y<item[i].pages[j].plotsCollection.length; y++){ //  PLOTS COLLECTION
                                if(item[i].pages[j].plotsCollection[y].plot_collection_id === plot_collection_id){
                                    plotsCollection_exists = true;
                                    if(!reset) new_cache[i].pages[j].plotsCollection[y].selected = id; //  CHANGE PLOT SELECTED IN PLOTS_COLLECTION

                                    let plot_exists = false;
                                    let new_plots = [];
                                    for(let x=0; x<item[i].pages[j].plotsCollection[y].plot.length; x++){
                                        if(item[i].pages[j].plotsCollection[y].plot[x].plot_id === id){
                                            plot_exists = true;
                                            if(!reset) new_cache[i].pages[j].plotsCollection[y].plot[x].options = options; //  CHANGE EXISTING PLOT
                                        } else if(reset){
                                            new_plots.push(item[i].pages[j].plotsCollection[y].plot[x]);
                                        }
                                    }
                                    if(!plot_exists && !reset){
                                        new_cache[i].pages[j].plotsCollection[y].plot.push(getCacheObjPlot()); // ADD NEW PLOT
                                    } else if(reset){
                                        new_cache[i].pages[j].plotsCollection[y].plot = new_plots;
                                    }
                                }
                            }

                            if(!plotsCollection_exists && !reset){ //  CREATE PLOT COLLECTION
                                new_cache[i].pages[j].plotsCollection.push(getCacheObjPlotsCollection());
                            }
                        }
                    }
                    if(!page_exists && !reset){ // CREATE PAGE
                        new_cache[i].pages.push(getCacheObjPages());
                    }
                }
            }

            if(!user_exists && !reset){ // CREATE USER
                new_cache.push(getCacheObjUsers());
            }

            saveCache(new_cache, reset);
            if(!reset) {setSaved(true); setTimeout(() => {setSaved(false);}, saved_message_time);}
            if(reset) {setIsResetting(false), plotsInfo[2](-1); setTimeout(() => {plotsInfo[2](id);}, 1000);}
        });
    }

    const getCacheObjPlot = () => {
        return {
            plot_id: id,
            options: options
        }
    }

    const getCacheObjPlotsCollection = () => {
        return {
            plot_collection_id: plot_collection_id,
            selected: id,
            plot: [
                getCacheObjPlot()
            ]
        }
    }

    const getCacheObjPages = () => {
        return {
            page_id: identifier[1],
            plotsCollection: [
                getCacheObjPlotsCollection()
            ]
        }
    }

    const getCacheObjUsers = () => {
        return {
            id: identifier[0],
            pages: [
                getCacheObjPages()
            ]
        } 
    }

    const saveCache = (saveObj, reset) => {
        if('caches' in  window) {
            const data = new Response(JSON.stringify(saveObj));
            caches.open(SAVE_CACHE_NAME).then((cache) => {
                cache.put(SAVE_CACHE_NAME, data);
                finishSavingFlags(reset);
            });
        }
    }
 
    return (
        <div>
            <div style={{display:'flex', flexDirection:'row-reverse', margin:'0.5rem'}}>
                <Tooltip title={tooltipMessage}>
                    <div style={{position: 'relative'}}>
                        <Button disabled={isSaving} onClick={onSave} style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained"> 
                            <SaveIcon/>
                        </Button>
                        { isSaving && <CircularProgress size={24} sx={{ position: 'absolute', top: '50%', left: '50%', marginTop: '-12px', marginLeft: '-12px', }}/>}
                    </div>
                </Tooltip>
                <Tooltip title={RESET_TOOLTIP}>
                    <div style={{position: 'relative', marginRight:'0.2rem'}}>
                        <Button disabled={isResetting} onClick={onReset} style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained"> 
                            <RestartAltIcon/>
                        </Button>
                    </div>
                </Tooltip>
            </div>
            <Collapse in={saved}>
                <Alert sx={{marginLeft:'1rem',marginRight:'1rem'}} severity="info">
                    <strong>{SAVE_SAVED}</strong>
                </Alert>
            </Collapse>
        </div>
    )
}