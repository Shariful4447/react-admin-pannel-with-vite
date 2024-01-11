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

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            What are Dark Patterns?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Dark patterns refer to user interface design practices that intentionally
          manipulate or deceive users into taking actions that they might not otherwise
          choose to take. These patterns are often designed to benefit the business or
          website at the expense of the user's understanding, autonomy, or well-being.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
           What is the impact of Dark Patterns in a website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Dark patterns on a website lead to a negative user experience,
          eroding trust and causing frustration. Users may perceive the
          website as deceptive, damaging the brand's reputation and resulting 
          in diminished customer loyalty. In addition, the use of dark patterns 
          can lead to legal consequences and increased support requests, impacting
          the website's overall success and sustainability.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
          How does dark patterns in a website ruin the brand image?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Dark patterns in a website can ruin a brand image by creating a perception of
          deceit and manipulation among users. When visitors feel deceived or tricked
          into making decisions that are not in their best interest, it erodes trust
          in the brand. This negative experience can lead to social media backlash,
          word-of-mouth negative reviews, and a tarnished reputation, ultimately 
          harming the brand's image and credibility. Users are likely to associate
          the brand with dishonest practices, making it difficult for the company 
          to build and maintain a positive brand image in the long term.
        </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
          Why should my website be free of dark patterns?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A website free of dark patterns is crucial for establishing trust with users,
          fostering positive user experiences, and maintaining a reputable brand image.
          Ethical design practices contribute to long-term customer loyalty, positive 
          reviews, and compliance with legal regulations, ensuring sustainable growth 
          and avoiding the negative consequences associated with deceptive tactics. 
          By prioritizing transparency and user satisfaction, your website promotes 
          a positive online environment, encouraging user engagement and building a 
          trustworthy relationship with your audience.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
          How will your dark pattern free certificate help my business?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A dark pattern-free certificate can significantly benefit a business by
          building trust with users, enhancing its reputation for ethical practices,
          and providing a competitive edge in the market. Displaying such a certificate
          signals a commitment to transparent and user-friendly experiences, attracting
          conscientious consumers and potentially improving customer loyalty. The certificate
          can serve as a powerful marketing tool, assuring users of the business's dedication
          to fair practices and fostering positive brand perception.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
