const StepOneChildDetails = ({ values, handleChange, handleBlur, errors, touched }) => (
  <div className="vstack gap-3">
    {/* Child's Age */}
    <div className="mb-3">
      <label htmlFor="childAge" className="form-label fw-semibold">
        Child's Age:
      </label>
      <input
        type="number"
        id="childAge"
        name="childDetails.age"
        value={values.childDetails.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className="form-control"
      />
      {touched.childDetails?.age && errors.childDetails?.age && (
        <div className="text-danger small">{errors.childDetails.age}</div>
      )}
    </div>

    {/* Diagnosis */}
    <div className="mb-3">
      <label htmlFor="diagnosis" className="form-label fw-semibold">
        Diagnosis:
      </label>
      <select
        id="diagnosis"
        name="childDetails.diagnosis"
        value={values.childDetails.diagnosis}
        onChange={handleChange}
        onBlur={handleBlur}
        className="form-select"
      >
        <option value="">Select Diagnosis</option>
        <option value="Autism">Autism</option>
        <option value="ADHD">ADHD</option>
        <option value="Dyslexia">Dyslexia</option>
      </select>
      {touched.childDetails?.diagnosis && errors.childDetails?.diagnosis && (
        <div className="text-danger small">{errors.childDetails.diagnosis}</div>
      )}
    </div>

    {/* Current School Type */}
    <div className="mb-3">
      <label className="form-label fw-semibold">Current School Type:</label>
      <div className="d-flex gap-3">
        <div className="form-check">
          <input
            type="radio"
            id="mainstream"
            name="childDetails.currentSchoolType"
            value="Mainstream"
            checked={values.childDetails.currentSchoolType === 'Mainstream'}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-check-input"
          />
          <label htmlFor="mainstream" className="form-check-label">
            Mainstream
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="specialNeeds"
            name="childDetails.currentSchoolType"
            value="Special Needs"
            checked={values.childDetails.currentSchoolType === 'Special Needs'}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-check-input"
          />
          <label htmlFor="specialNeeds" className="form-check-label">
            Special Needs
          </label>
        </div>
      </div>
      {touched.childDetails?.currentSchoolType && errors.childDetails?.currentSchoolType && (
        <div className="text-danger small">{errors.childDetails.currentSchoolType}</div>
      )}
    </div>
  </div>
);

export default StepOneChildDetails;
