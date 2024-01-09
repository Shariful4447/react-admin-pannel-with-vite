import { Box, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            What is Lorem Ipsum?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            What is RESTful API?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A RESTful API is an architectural style for an application program
            interface (API) that uses HTTP requests to access and use data. That
            data can be used to GET, PUT, POST and DELETE data types, which
            refers to the reading, updating, creating and deleting of operations
            concerning resources.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            What is OpenGL used for?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is commonly used to make UI animations more responsive or to
            handle embedded video or to draw vector graphics – really any visual
            element you put on the screen is fair game for OpenGL. OpenGL is
            becoming increasingly ubiquitous and understanding how to leverage
            its incredible power is a must for developers.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            What is a Raspberry Pi?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Raspberry Pi is a low cost, credit-card sized computer that
            plugs into a computer monitor or TV, and uses a standard keyboard
            and mouse.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
