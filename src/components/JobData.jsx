import { useState } from 'react';
import styles from '../styles/JobData.module.css'; 

function JobData() {
  const [titleOfPosition, setTitleOfPosition] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobResponsibilities, setJobResponsibilities] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title of Position:', titleOfPosition);
    console.log('Company Name:', companyName);
    console.log('Job Responsibilities:', jobResponsibilities);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.heading}>Job Experience</h2>

      <div>
        <label className={styles.label}>
          Title of Position:
          <input
            type="text"
            value={titleOfPosition}
            onChange={(e) => setTitleOfPosition(e.target.value)}
            required
            className={styles.input}
          />
        </label>
      </div>

      <div>
        <label className={styles.label}>
          Company Name:
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className={styles.input}
          />
        </label>
      </div>

      <div>
        <label className={styles.label}>
          Job Responsibilities:
          <textarea
            value={jobResponsibilities}
            onChange={(e) => setJobResponsibilities(e.target.value)}
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

export default JobData;
