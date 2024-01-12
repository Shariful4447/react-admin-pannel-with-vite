import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
//yup for form validation
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
  companyName: '',
  email: '',
  feedBack: '',
};


//define validation logic for each field
const userSchema = yup.object().shape({
  //'required' going to pop up if validatetion fail
  companyName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  feedBack: yup.string().required('required'),
});

const Form = () => {
  //useMediaQuery return boolen
  const isNonMobile = useMediaQuery('(min-width: 600px)');

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Header title="FORM" subtitle="Send Your feedback to us" />
      <Formik
        onSubmit={handleFormSubmit}
        //initialValues is a obj offer values, consist with empty string
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {/* props below come from Formik initialValues prop */}
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Company name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.companyName}
                name="companyName"
                error={!!touched.companyName && !!errors.companyName}
                helperText={touched.companyName && errors.companyName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Your FeedBack"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.feedBack}
                name="feedBack"
                error={!!touched.feedBack && !!errors.feedBack}
                helperText={touched.feedBack && errors.feedBack}
                sx={{ gridColumn: 'span 4' }}
                
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Submit Your Feedback
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
