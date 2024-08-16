import { useState } from 'react';
import styles from '../styles/PersonalData.module.css';

function PersonalData() {
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(true); 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Job Title:', jobTitle);
    console.log('Location:', location);
    console.log('Phone:', phone);
    console.log('Email:', email);
  };

  return (
    <div className={styles.container}>
      {isEditing ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.heading}>Personal Information</h2>

          <div className={styles.field}>
            <label className={styles.label}>
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className={styles.input}
              />
            </label>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Job Title:
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
                className={styles.input}
              />
            </label>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Location:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className={styles.input}
              />
            </label>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Phone:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className={styles.input}
              />
            </label>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2 className={styles.heading}>Personal Information</h2>
          <p><strong>Full Name:</strong> {fullName}</p>
          <p><strong>Job Title:</strong> {jobTitle}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Email:</strong> {email}</p>
          <button onClick={() => setIsEditing(true)} className={styles.editButton}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default PersonalData;
