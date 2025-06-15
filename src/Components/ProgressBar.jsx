import React from 'react'

const ProgressBar = ({currentStep}) => {
  console.log(currentStep,"$$$")
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <div className="d-flex flex-column align-items-center position-relative z-1">
              <div
                className={`rounded-circle border-0 d-flex justify-content-center align-items-center fw-bold ${
                  currentStep >= step ? 'bg-primary text-white border-primary' : 'bg-light'
                } ${currentStep === step ? 'shadow' : ''}`}
                style={{ width: '40px', height: '40px' }}
              >
                {step}
              </div>
              <div className="small text-secondary mt-1">
                {step === 1 ? 'Child' : step === 2 ? 'Needs' : 'Contact'}
              </div>
            </div>
            {step !== 3 && (
              <div
                className={`flex-grow-1 mx-2 ${currentStep > step ? 'bg-primary' : 'bg-secondary-subtle'}`}
                style={{ height: '2px' }}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
  )
}

export default ProgressBar