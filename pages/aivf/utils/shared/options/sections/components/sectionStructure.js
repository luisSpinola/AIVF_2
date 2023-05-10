//  MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const getSectionStructure = (title, details, switchComponent) => {
    return (
        <Accordion disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <div>{title} {switchComponent}</div>
            </AccordionSummary>
            <AccordionDetails>
                {details}
            </AccordionDetails>
        </Accordion>
    )
}