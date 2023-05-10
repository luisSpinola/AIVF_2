//  MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { sliderInput } from "../components/inputs";

export const getGeneralOptions = (options, setOptions) => {
    return (
        <Accordion disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                General
            </AccordionSummary>
            <AccordionDetails>
                {sliderInput("Altura", options.height, setOptions, {min: 100, max: 1500, step:50})}
            </AccordionDetails>
        </Accordion>
    )
}