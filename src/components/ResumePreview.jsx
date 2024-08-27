import styles from '../styles/ResumePreview.module.css';

function ResumePreview({ educationInfo }) {
    return (
        <div className={styles.resume}>
            <div className={styles.personalInfo}>
                <div className={styles.resumeName}>
                    Devang Yadav
                </div>
                <div className={styles.contactInfo}>
                    <span>devang123@testmail.com</span>
                    <span> +91 9812345670</span>
                    <span> State, India</span>
                </div>
            </div>

            <div className={styles.educationSection}>
                <div className={styles.header}>Education</div>
                {educationInfo.map((entry, index) => (
                    <div key={index} className={styles.educationEntry}>
                        <div className={styles.educationDate}>
                            {entry.startDate} - {entry.endDate}
                        </div>
                        <div className={styles.educationLocation}>
                            New York City, US
                        </div>
                        <div className={styles.educationInstitution}>
                            {entry.institute}
                        </div>
                        <div className={styles.educationDegree}>
                            {entry.study}
                        </div>
                    </div>
                ))}
            </div>7

            <div className={styles.professionalExperienceSection}>
                <div className={styles.header}>Professional Experience</div>
                <div className={styles.experienceEntry}>
                    <div className={styles.experienceDate}>08/2020 - present</div>
                    <div className={styles.experienceLocation}>New York City, US</div>
                    <div className={styles.experienceCompany}>Umbrella Inc.</div>
                    <div className={styles.experienceRole}>UX & UI Designer</div>
                    <div className={styles.experienceDescription}>
                        Designed and prototyped user interface patterns for various clients in various industries, 
                        ranging from self-service apps within the telecommunications sector to mobile games for IOS and Android.
                    </div>
                </div>
                <div className={styles.experienceEntry}>
                    <div className={styles.experienceDate}>04/2018 - 02/2019</div>
                    <div className={styles.experienceLocation}>Berlin, Germany</div>
                    <div className={styles.experienceCompany}>Black Mesa Labs</div>
                    <div className={styles.experienceRole}>UX Research Assistant</div>
                    <div className={styles.experienceDescription}>
                        Supported senior researchers on accessibility standards for the open web. 
                        Created and usability tested wireframes and prototypes. Produced interactive documentation 
                        for quick onboarding of new researchers.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumePreview;
