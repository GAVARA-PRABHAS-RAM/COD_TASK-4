import { Link } from 'react-router-dom';
import styles from './CourseCard.module.css';

const CourseCard = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={course.thumbnail} alt={course.title} className={styles.thumbnail} />
        <div className={styles.level}>{course.level}</div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{course.title}</h3>
        <div className={styles.instructor}>
          <img src={course.instructorAvatar} alt={course.instructor} className={styles.avatar} />
          <span>{course.instructor}</span>
        </div>
        <div className={styles.stats}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            {course.duration}
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            {course.students} students
          </span>
        </div>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: `${course.progress}%` }}></div>
          <span>{course.progress}% Complete</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard; 