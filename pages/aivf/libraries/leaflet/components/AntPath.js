
import { createElementHook, createPathHook, createContainerComponent } from '@react-leaflet/core'
import { antPath } from 'leaflet-ant-path';
import * as _ from 'lodash';

function createAntPath(props, context) {
    const instance = antPath(props.positions, props.options)
    return { instance, context: { ...context, overlayContainer: instance } }
}

function updateAntPath(instance, props, prevProps) {
    if (props.positions !== prevProps.positions) {
        instance.setLatLngs(props.positions)
    }
    
    if(props.options !== prevProps.options) {
        instance.options = _.cloneDeep(props.options);
    }
}

const useAntPathElement = createElementHook(createAntPath, updateAntPath)
const useAntPath = createPathHook(useAntPathElement)
const AntPath = createContainerComponent(useAntPath)

export default AntPath