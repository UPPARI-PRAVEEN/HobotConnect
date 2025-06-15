import React from 'react';

const StepThreeContactInfo = ({ values, handleChange, handleBlur, errors, touched }) => (
  <div className="vstack gap-3">
    {/* Parent's Name */}
    <div className="mb-3">
      <label htmlFor="parentName" className="form-label fw-semibold">
        Parent's Name:
      </label>
      <input
        type="text"
        id="parentName"
        name="contactDetails.parentName"
        value={values.contactDetails.parentName}
        onChange={handleChange}
        onBlur={handleBlur}
        className="form-control"
      />
      {(errors.contactDetails?.parentName && touched.contactDetails?.parentName) && (
        <div className="text-danger small">{errors.contactDetails.parentName}</div>
      )}
    </div>

    {/* Email */}
    <div className="mb-3">
      <label htmlFor="email" className="form-label fw-semibold">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="contactDetails.email"
        value={values.contactDetails.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className="form-control"
      />
      {(errors.contactDetails?.email && touched.contactDetails?.email) && (
        <div className="text-danger small">{errors.contactDetails.email}</div>
      )}
    </div>

    {/* Phone Number */}
    <div className="mb-3">
      <label htmlFor="phone" className="form-label fw-semibold">
        Phone Number:
      </label>
      <input
        type="text"
        id="phone"
        name="contactDetails.phone"
        value={values.contactDetails.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        className="form-control"
      />
      {(errors.contactDetails?.phone && touched.contactDetails?.phone) && (
        <div className="text-danger small">{errors.contactDetails.phone}</div>
      )}
    </div>
  </div>
);

export default StepThreeContactInfo;
