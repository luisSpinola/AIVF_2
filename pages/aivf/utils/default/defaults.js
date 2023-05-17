//  SAVE
export const SAVE_MODE = 'cache'; // none, cache, db
export const SAVE_CACHE_NAME = "GRAPH_OPTIONS";
export const SAVE_TIMER = 5; // number of seconds to periodically check for changes

//  COLOR
export const VALUE_COLOR = ['#7dba00','#00560E','#ed7d31','#ffffb2','#fed976','#fd8d3c','#f03b20','#bd0026'];
//["#1976d2", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"];
//  GENERAL
export const VALUE_HEIGHT = 250;
export const VALUE_INVERT_AXES = false;
export const VALUE_DISPLAY_MODE = 'default';
//  MARGIN
export const VALUE_MARGIN_TOP = 20;
export const VALUE_MARGIN_BOTTTOM = 0;
export const VALUE_MARGIN_LEFT = 0;
export const VALUE_MARGIN_RIGHT = 30;
//  Y
export const VALUE_Y_TICK = 4;
export const VALUE_Y_SCALE = 0;
//  LABEL LIST
export const VALUE_LABELLIST = false;
export const VALUE_LABELLIST_POSITION = 'top';
export const VALUE_LABELLIST_OFFSET = 5;
export const VALUE_LABELLIST_ANGLE = 0;
//  LEGEND
export const VALUE_LEGEND = true;
export const VALUE_LEGEND_POS = 'bottom';
export const VALUE_LEGEND_ALIGN = 'right';
//  GRID
export const VALUE_GRID = true;
export const VALUE_GRID_HORIZONTAL = true;
export const VALUE_GRID_VERTICAL = true;
export const VALUE_GRID_STROKE = false;
export const VALUE_GRID_OPACITY = 50;

//  MAP
export const MAP_VECTOR_ARRAY = [
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png",
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png",
    "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.png",
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
];