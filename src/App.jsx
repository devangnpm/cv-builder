import { useState } from 'react';
import './App.css';
import EducationData from './components/EducationData.jsx';
import JobData from './components/JobData.jsx';
import PersonalData from './components/PersonalData.jsx'; 
import ResumePreview from './components/ResumePreview.jsx';


function App() {
  const [educationInfo,setEducationInfo] = useState([]);

  return (
    <>
      <div className="form-container">
        <PersonalData/>
        <EducationData
          setEducationInfo={setEducationInfo}
        />
        <JobData/>
        <ResumePreview
          educationInfo={educationInfo}
        />
       </div>
    </>
  );
}

export default App;
