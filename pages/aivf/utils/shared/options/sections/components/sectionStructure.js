//  MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const getSectionStructure = (title, details, switchComponent) => {
    return (
        <Accordion TransitionProps={{ unmountOnExit: true }} disableGutters sx={{ borderRadius: '4px', marginBottom:'0.3rem', backgroundColor: 'rgba(255, 255, 255, 0.85)', '&:before': {display: 'none'} }}>
            <AccordionSummary sx={{fontSize:'0.9rem'}} expandIcon={<ExpandMoreIcon/>}>
                <div>{title} {switchComponent}</div>
            </AccordionSummary>
            <AccordionDetails>
                {details}
            </AccordionDetails>
        </Accordion>
    )
}