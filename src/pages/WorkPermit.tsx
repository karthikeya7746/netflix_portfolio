import React from 'react';
import './WorkPermit.css';
import { WorkPermit as IWorkPermit } from '../types';

const WorkPermit: React.FC = () => {

  // Local work permit data for Karthikeya Reddy
  const workPermitData: IWorkPermit = {
    visaStatus: "F-1 Student Visa",
    expiryDate: new Date("2029-05-31"), // Updated visa validity
    summary: "I'm currently on an F-1 Student Visa, which allows me to work in the US through CPT (Curricular Practical Training) and OPT (Optional Practical Training) programs! 🇺🇸 My visa is valid until 2029, giving me the opportunity to build valuable experience and grow my career in the US tech industry. 🌟",
    additionalInfo: "Eligible for CPT during studies and OPT after graduation. Open to full-time opportunities that can or cannot sponsor H-1B visa after OPT period."
  };

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          {workPermitData.summary}
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
