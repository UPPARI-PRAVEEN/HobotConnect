import React, { useRef, useState } from "react";
import { Formik, Form } from "formik";
import StepOneChildDetails from "../steps/StepOneChildDetails";
import StepTwoServiceNeeds from "../steps/StepTwoServiceNeeds";
import StepThreeContactInfo from "../steps/StepThreeContactInfo";
import ProgressBar from "../ProgressBar";
import Swal from "sweetalert2";
import validationSchema from "../validation/validationSchemas";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const mainRef = useRef(null);
console.log(mainRef,"$$$")
  const initialData = {
    childDetails: {
      age: "",
      diagnosis: "",
      currentSchoolType: "",
    },
    serviceDetails: {
      supportTypes: [],
      preferredFrequency: "",
      specificRequirements: "",
    },
    contactDetails: {
      parentName: "",
      email: "",
      phone: "",
    },
  };

  

 const handleSubmit = (values, { resetForm }) => {
  console.log(values);

  Swal.fire({
    title: "Form Submitted Successfully",
    icon: "success",
  });

  resetForm(); 
  setCurrentStep(1); 
};


  // const nextStep = () => {
  //   if (currentStep <= 3) setCurrentStep(currentStep + 1);
  // };

 const nextStep = async () => {
  const errors = await mainRef.current.validateForm();

  let touchedFields = {};

  if (currentStep === 1) {
    touchedFields = {
      childDetails: {
        age: true,
        diagnosis: true,
        currentSchoolType: true,
      },
    };
  } else if (currentStep === 2) {
    touchedFields = {
      serviceDetails: {
        supportTypes: true,
        preferredFrequency: true,
        specificRequirements: true,
      },
    };
  } else if (currentStep === 3) {
    touchedFields = {
      contactDetails: {
        parentName: true,
        email: true,
        phone: true,
      },
    };
  }

  await mainRef.current.setTouched(touchedFields, true);

  let stepErrors = {};
  if (currentStep === 1) {
    stepErrors = errors?.childDetails || {};
  } else if (currentStep === 2) {
    stepErrors = errors?.serviceDetails || {};
  } else if (currentStep === 3) {
    stepErrors = errors?.contactDetails || {};
  }

  if (Object.keys(stepErrors).length === 0) {
    setCurrentStep((prev) => prev + 1);
  }
};


  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Child Details";
      case 2:
        return "Service Needs";
      case 3:
        return "Contact Information";
      default:
        return "";
    }
  };
 

  return (
    <div className="container my-5 p-4 border rounded shadow bg-white">
      <h2 className="text-center mb-4 fw-bold">
        Submit Learning Support Request
      </h2>

      {/* Step Indicator */}
      <ProgressBar currentStep={currentStep} />

      {/* Formik Form */}
      <Formik initialValues={initialData} innerRef={mainRef} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
            <div className="mb-4">
              <h4 className="fw-semibold text-secondary mb-3">
                {getStepTitle()}
              </h4>

              {currentStep === 1 && (
                <StepOneChildDetails
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              )}
              {currentStep === 2 && (
                <StepTwoServiceNeeds
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              )}
              {currentStep === 3 && (
                <StepThreeContactInfo
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Previous
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  // disabled={Object.keys(mainRef.current?.errors || {}).length > 0}

                  onClick={nextStep}
                >
                  Next
                </button>
              ) : (
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
