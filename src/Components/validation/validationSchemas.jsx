import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  childDetails: Yup.object().shape({
    age: Yup.number()
      .typeError('Age must be a number')
      .required('Age is required')
      .min(1, 'Invalid age')
      .max(30, 'Too large for a child'),
    diagnosis: Yup.string()
      .required('Diagnosis is required'),
    currentSchoolType: Yup.string()
      .required('Please select school type'),
  }),
  serviceDetails: Yup.object().shape({
    supportTypes: Yup.array()
      .min(1, 'Select at least one support type')
      .required('Support type is required'),
    preferredFrequency: Yup.string()
      .required('Please select frequency'),
    specificRequirements: Yup.string()
      .max(500, 'Max 500 characters allowed'),
  }),
  contactDetails: Yup.object().shape({
    parentName: Yup.string()
      .required('Parent name is required')
      .min(2, 'Too Short')
      .max(50, 'Too Long'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
      .required('Phone number is required'),
  }),
});

export default validationSchema;
