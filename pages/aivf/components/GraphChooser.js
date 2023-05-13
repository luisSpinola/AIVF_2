import React, {useState, useEffect} from 'react';

//  STRINGS
import { ERROR_TYPE_NOT_FOUND } from '../utils/localization/ptPt';

import OneNumerical from '../data_types/One_Numerical';
import { SAVE_CACHE_NAME, SAVE_MODE } from '../utils/default/defaults';

export default function GraphChooser({identifier, data, options}) {
    const [isOptionsLoaded, setIsOptionsLoaded] = useState(false);
    const [previousOptions, setPreviousOptions] = useState(null);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        getOptions();
    }, [])

    useEffect(() => {
        if('caches' in window){
            caches.has(SAVE_CACHE_NAME).then((hasCache) => {
                if(hasCache){
                    setIsOptionsLoaded(false);
                    getCache2();
                } else {
                }
            });
        }
    }, [selected])

    const chooseType = () => {
        switch(data.header.type){
            case "one_numerical":
                return <OneNumerical optionsFlag={options} data={data} graphSelected={selected} setGraphSelected={setSelected} identifier={identifier} previousOptions={previousOptions}/>;
            default:
                return <React.Fragment>{ERROR_TYPE_NOT_FOUND}</React.Fragment>;
        }
    }

    const getOptions = () => {
        switch(SAVE_MODE){
            case "cache":
                if('caches' in window){
                    caches.has(SAVE_CACHE_NAME).then((hasCache) => {
                        if(hasCache){
                            getCache();
                        } else {
                            setIsOptionsLoaded(true);
                        }
                    });
                }
                break;
            default:
                break;
        }
    }

    const getCache = async () => {
        if (typeof caches === 'undefined') return false;
        const cacheStorage = await caches.open(SAVE_CACHE_NAME);
        const cachedResponse = await cacheStorage.match(SAVE_CACHE_NAME);
        return cachedResponse.json().then((item) => {
            for(let i=0; i<item.length; i++){
                if(item[i].id === identifier[0]){
                    for(let j=0; j<item[i].pages.length; j++){
                        if(item[i].pages[j].page_id === identifier[1]){
                            for(let y=0; y<item[i].pages[j].plotsCollection.length; y++){
                                if(item[i].pages[j].plotsCollection[y].plot_collection_id === identifier[2]){
                                    setSelected(item[i].pages[j].plotsCollection[y].selected);


                                    for(let x=0; x<item[i].pages[j].plotsCollection[y].plot.length; x++){
                                        console.log(item[i].pages[j].plotsCollection[y]);
                                        if(item[i].pages[j].plotsCollection[y].plot[x].plot_id === item[i].pages[j].plotsCollection[y].selected){
                                            setPreviousOptions(item[i].pages[j].plotsCollection[y].plot[x].options);
                                        }
                                    }
                                }
                            }
                        }
                        
                    }
                }
            }
            setIsOptionsLoaded(true);
        })
    }

    const getCache2 = async () => {
        if (typeof caches === 'undefined') return false;
        const cacheStorage = await caches.open(SAVE_CACHE_NAME);
        const cachedResponse = await cacheStorage.match(SAVE_CACHE_NAME);
        return cachedResponse.json().then((item) => {
            for(let i=0; i<item.length; i++){
                if(item[i].id === identifier[0]){
                    for(let j=0; j<item[i].pages.length; j++){
                        if(item[i].pages[j].page_id === identifier[1]){
                            for(let y=0; y<item[i].pages[j].plotsCollection.length; y++){
                                if(item[i].pages[j].plotsCollection[y].plot_collection_id === identifier[2]){


                                    for(let x=0; x<item[i].pages[j].plotsCollection[y].plot.length; x++){
                                        console.log(item[i].pages[j].plotsCollection[y]);
                                        if(item[i].pages[j].plotsCollection[y].plot[x].plot_id === selected){
                                            setPreviousOptions(item[i].pages[j].plotsCollection[y].plot[x].options);
                                        }
                                    }
                                }
                            }
                        }
                        
                    }
                }
            }
            setIsOptionsLoaded(true);
        })
    }

    return(
        <React.Fragment>
            {isOptionsLoaded && chooseType()}
        </React.Fragment>
    )
}