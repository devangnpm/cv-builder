import { useState } from 'react';
import styles from '../styles/EducationData.module.css';  // Ensure the path is correct

function EducationData( {setEducationInfo} ) {
  // State to manage form inputs
  const [study, setStudy] = useState('');
  const [institute, setInstitute] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
    console.log('Study/Degree:', study);
    console.log('Institute Name:', institute);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);

    //creating a education object with form data
    const educationData = {
      study,
      institute,
      startDate,
      endDate,
    }

    // passing the newly information on click to the setter function in app.jsx
    setEducationInfo(prevInfo => [...prevInfo,educationData]);

    //clearing the form fiels after submission
    setStudy('');
    setInstitute('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.heading}>Education Details</h2>

      <div>
        <label className={styles.label}>
          Study/Degree:
          <input
            type="text"
            value={study}
            onChange={(e) => setStudy(e.target.value)}
            required
            className={styles.input}
          />
        </label>
      </div>

      <div>
        <label className={styles.label}>
          Institute Name:
          <input
            type="text"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
            required
            className={styles.input}
          />
        </label>
      </div>

      <div>
        <label className={styles.label}>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className={styles.input}
          />
        </label>
      </div>

      <div>
        <label className={styles.label}>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className={styles.input}
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default EducationData;
