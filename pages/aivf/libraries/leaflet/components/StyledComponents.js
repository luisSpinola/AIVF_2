import { Popup, Tooltip} from "react-leaflet";
import styled from "styled-components";

export const StyledPop = styled(Popup)`
  .leaflet-popup-content-wrapper {
    border-radius: 5 !important;
    background-color: rgba(255, 255, 255, 0.8) !important;
    fontSize:0.85rem !important;
    padding:0.001rem !important;
    boxShadow: 0 5px 5px rgba(129, 124, 124, 0.7) !important;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }
`;

export const StyledTooltip = styled(Tooltip)`
    padding:2px !important;
    font-size:0.7rem;
    border-radius: 5 !important;
    background-color: rgba(255, 255, 255, 0.7) !important;
    border-left-color: rgba(0, 0, 0, 0) !important;
    border-right-color: rgba(0, 0, 0, 0) !important;
`;