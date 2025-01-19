import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Transform Your Future with Online Learning</h1>
          <p>Access quality education from anywhere in the world. Learn at your own pace with expert-led courses.</p>
          <div className={styles.ctaButtons}>
            <Link to="/courses" className={styles.primaryButton}>
              Browse Courses
            </Link>
            <Link to="/dashboard" className={styles.secondaryButton}>
              My Dashboard
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" alt="Students learning" />
        </div>
      </div>
      <div className={styles.features}>
        <h2>Why Choose EduLearn</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img src="https://img.icons8.com/fluency/96/video-conference.png" alt="Online Learning" />
            </div>
            <h3>Interactive Learning</h3>
            <p>Engage with instructors and peers through live sessions and discussions</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img src="https://img.icons8.com/fluency/96/certificate.png" alt="Certification" />
            </div>
            <h3>Certified Courses</h3>
            <p>Earn recognized certificates upon course completion</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img src="https://img.icons8.com/fluency/96/clock.png" alt="Flexible Schedule" />
            </div>
            <h3>Flexible Schedule</h3>
            <p>Learn at your own pace with lifetime access to course content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 