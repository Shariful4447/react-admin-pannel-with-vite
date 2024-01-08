import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
//yup for form validation
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

//define validation logic for each field
const userSchema = yup.object().shape({
  //'required' going to pop up if validatetion fail
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('required'),
  address1: yup.string().required('required'),
  address2: yup.string().required('required'),
});

const Form = () => {
  //useMediaQuery return boolen
  const isNonMobile = useMediaQuery('(min-width: 600px)');

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Header title="FORM" subtitle="Create a New User Profile" />
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
                label="Company Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
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
                sx={{ gridColumn: 'span 2'}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Review"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: 'span 4' }}
              />
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Send Feedback
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
