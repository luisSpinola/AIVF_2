import { useState } from "react";
//  MUI
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from "@mui/material/CircularProgress";
import { SAVE_TOOLTIP, SAVE_TOOLTIP_SAVING } from "../../localization/ptPt";
import { SAVE_CACHE_NAME, SAVE_MODE } from "../../default/defaults";

export default function SaveButton({id, options, identifier}){
    const [isSaving, setIsSaving] = useState(false);
    const [tooltipMessage, setTooltipMessage] = useState(SAVE_TOOLTIP);

    const user_id = identifier[0];
    const page_id = identifier[1];
    const plot_collection_id = identifier[2];

    const onSave = () => {
        setIsSaving(true);
        setTooltipMessage(SAVE_TOOLTIP_SAVING);
        watchOptions();
    }

    const watchOptions = () => {
        switch(SAVE_MODE){
            case 'cache':
                saveInCache();
                break;
            default:
                break;
        }
    }

    const finishSavingFlags = () => {
        setIsSaving(false); 
        setTooltipMessage(SAVE_TOOLTIP);
    }

    const saveInCache = () => {
        if('caches' in window){
            caches.has(SAVE_CACHE_NAME).then((hasCache) => {
                if(hasCache){
                    getCacheValue();
                } else {
                    saveCache([getCacheObjUsers()]);
                }
            });
        }
    }

    const getCacheValue = async () => {
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
                                    new_cache[i].pages[j].plotsCollection[y].selected = id; //  CHANGE PLOT SELECTED IN PLOTS_COLLECTION

                                    let plot_exists = false;
                                    for(let x=0; x<item[i].pages[j].plotsCollection[y].plot.length; x++){
                                        if(item[i].pages[j].plotsCollection[y].plot[x].plot_id === id){
                                            plot_exists = true;
                                            new_cache[i].pages[j].plotsCollection[y].plot[x].options = options; //  CHANGE EXISTING PLOT
                                        }
                                    }
                                    if(!plot_exists){
                                        new_cache[i].pages[j].plotsCollection[y].plot.push(getCacheObjPlot()); // ADD NEW PLOT
                                    }
                                }
                            }

                            if(!plotsCollection_exists){ //  CREATE PLOT COLLECTION
                                new_cache[i].pages[j].plotsCollection.push(getCacheObjPlotsCollection());
                            }
                        }
                    }
                    if(!page_exists){ // CREATE PAGE
                        new_cache[i].pages.push(getCacheObjPages());
                    }
                }
            }

            if(!user_exists){ // CREATE USER
                new_cache.push(getCacheObjUsers());
            }

            saveCache(new_cache);
            finishSavingFlags();
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

    const saveCache = (saveObj) => {
        console.log("CACHE SAVED");
        if('caches' in  window) {
            const data = new Response(JSON.stringify(saveObj));
            caches.open(SAVE_CACHE_NAME).then((cache) => {
                cache.put(SAVE_CACHE_NAME, data);
                finishSavingFlags();
            });
        }
    }
 
    return (
        <div style={{display:'flex', flexDirection:'row-reverse', margin:'1rem'}}>
            <Tooltip title={tooltipMessage}>
            <div style={{position: 'relative' }}>
                <Button disabled={isSaving} onClick={onSave} style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained"> 
                    <SaveIcon/>
                </Button>
                { isSaving && <CircularProgress size={24} sx={{ position: 'absolute', top: '50%', left: '50%', marginTop: '-12px', marginLeft: '-12px', }}/>}
            </div>
            </Tooltip>
        </div>
    )
}