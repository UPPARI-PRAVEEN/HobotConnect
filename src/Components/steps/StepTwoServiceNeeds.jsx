import React from 'react';

const StepTwoServiceNeeds = ({ values, handleChange, handleBlur, errors, touched }) => (
  <div className="vstack gap-3">
    {/* Type of Support Needed */}
    <div className="mb-3">
      <label className="form-label fw-semibold">Type of Support Needed:</label>
      <div className="d-flex flex-wrap gap-3">
        <div className="form-check">
          <input
            type="checkbox"
            id="speechTherapy"
            name="serviceDetails.supportTypes"
            value="Speech Therapy"
            checked={values.serviceDetails.supportTypes.includes('Speech Therapy')}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-check-input"
          />
          <label htmlFor="speechTherapy" className="form-check-label">
            Speech Therapy
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="occupationalTherapy"
            name="serviceDetails.supportTypes"
            value="Occupational Therapy"
            checked={values.serviceDetails.supportTypes.includes('Occupational Therapy')}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-check-input"
          />
          <label htmlFor="occupationalTherapy" className="form-check-label">
            Occupational Therapy
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="behavioralTherapy"
            name="serviceDetails.supportTypes"
            value="Behavioral Therapy"
            checked={values.serviceDetails.supportTypes.includes('Behavioral Therapy')}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-check-input"
          />
          <label htmlFor="behavioralTherapy" className="form-check-label">
            Behavioral Therapy
          </label>
        </div>
      </div>
      {errors.serviceDetails?.supportTypes && touched.serviceDetails?.supportTypes && (
        <div className="text-danger small">{errors.serviceDetails.supportTypes}</div>
      )}
    </div>

    {/* Preferred Frequency */}
    <div className="mb-3">
      <label htmlFor="preferredFrequency" className="form-label fw-semibold">
        Preferred Frequency:
      </label>
      <select
        id="preferredFrequency"
        name="serviceDetails.preferredFrequency"
        value={values.serviceDetails.preferredFrequency}
        onChange={handleChange}
        onBlur={handleBlur}
        className="form-select"
      >
        <option value="">Select Frequency</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>
      {errors.serviceDetails?.preferredFrequency && touched.serviceDetails?.preferredFrequency && (
        <div className="text-danger small">{errors.serviceDetails.preferredFrequency}</div>
      )}
    </div>

    {/* Specific Requirements */}
    <div className="mb-3">
      <label htmlFor="specificRequirements" className="form-label fw-semibold">
        Specific Requirements:
      </label>
      <textarea
        id="specificRequirements"
        name="serviceDetails.specificRequirements"
        value={values.serviceDetails.specificRequirements}
        onChange={handleChange}
        onBlur={handleBlur}
        className="form-control"
        rows={3}
      />
      {errors.serviceDetails?.specificRequirements && touched.serviceDetails?.specificRequirements && (
        <div className="text-danger small">{errors.serviceDetails.specificRequirements}</div>
      )}
    </div>
  </div>
);

export default StepTwoServiceNeeds;
