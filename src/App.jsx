import './App.css';
import EducationData from './components/EducationData.jsx';
import JobData from './components/JobData.jsx';
import PersonalData from './components/PersonalData.jsx'; 


function App() {

  return (
    <>
      <div className="form-container">
        <PersonalData/>
        <EducationData/>
        <JobData/>
       </div>
    </>
  );
}

export default App;
