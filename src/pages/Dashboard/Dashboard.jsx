import React, { useState } from 'react';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedStat, setSelectedStat] = useState(null);

  const completedCourses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      completedDate: '2024-03-15',
      certificate: 'cert_123',
      grade: 'A',
      progress: 100,
      videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg',
      completedLessons: 12,
      totalLessons: 12
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      completedDate: '2024-03-10',
      certificate: 'cert_456',
      grade: 'A-',
      progress: 100,
      videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
      completedLessons: 10,
      totalLessons: 10
    }
  ];

  const inProgressCourses = [
    {
      id: 3,
      title: 'React.js Advanced Concepts',
      progress: 65,
      videoUrl: 'https://www.youtube.com/embed/w7ejDZ8SWv8',
      completedLessons: 8,
      totalLessons: 12,
      nextLesson: 'Context API and Hooks'
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      progress: 45,
      videoUrl: 'https://www.youtube.com/embed/Oe421EPjeBE',
      completedLessons: 6,
      totalLessons: 14,
      nextLesson: 'RESTful API Design'
    }
  ];

  const learningHours = [
    { date: '2024-03-10', hours: 2.5 },
    { date: '2024-03-11', hours: 1.5 },
    { date: '2024-03-12', hours: 3.0 },
    { date: '2024-03-13', hours: 2.0 },
    { date: '2024-03-14', hours: 4.0 },
    { date: '2024-03-15', hours: 1.0 },
    { date: '2024-03-16', hours: 2.5 }
  ];

  const totalHours = learningHours.reduce((sum, day) => sum + day.hours, 0);

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>My Dashboard</h1>
          <p className={styles.welcomeText}>Welcome back!</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard} onClick={() => {
          setSelectedStat('inProgress');
          setShowModal(true);
        }}>
          <div className={styles.statIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div className={styles.statInfo}>
            <h3>Courses in Progress</h3>
            <p>{inProgressCourses.length}</p>
          </div>
        </div>

        <div className={styles.statCard} onClick={() => {
          setSelectedStat('completed');
          setShowModal(true);
        }}>
          <div className={styles.statIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div className={styles.statInfo}>
            <h3>Completed Courses</h3>
            <p>{completedCourses.length}</p>
          </div>
        </div>

        <div className={styles.statCard} onClick={() => {
          setSelectedStat('hours');
          setShowModal(true);
        }}>
          <div className={styles.statIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className={styles.statInfo}>
            <h3>Learning Hours</h3>
            <p>{totalHours}</p>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <h2>Current Courses</h2>
        <div className={styles.courseGrid}>
          {inProgressCourses.map(course => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.videoSection}>
                <div className={styles.videoWrapper}>
                  <iframe
                    src={course.videoUrl}
                    title={course.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className={styles.courseInfo}>
                <h3>{course.title}</h3>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progress} 
                    style={{ width: `${course.progress}%` }}
                    data-progress={course.progress}
                  />
                </div>
                <div className={styles.lessonInfo}>
                  <span>Completed: {course.completedLessons}/{course.totalLessons} lessons</span>
                  <span>Next: {course.nextLesson}</span>
                </div>
                <button className={styles.continueButton}>
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowModal(false)}>×</button>
            <div className={styles.modalContent}>
              {selectedStat === 'completed' && (
                <>
                  <h2>Completed Courses</h2>
                  {completedCourses.map(course => (
                    <div key={course.id} className={styles.modalCourseItem}>
                      <h3>{course.title}</h3>
                      <p>Completed: {course.completedDate}</p>
                      <p>Grade: {course.grade}</p>
                      <div className={styles.modalProgress}>
                        <div className={styles.progressBar}>
                          <div 
                            className={styles.progress} 
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span>{course.progress}%</span>
                      </div>
                    </div>
                  ))}
                </>
              )}
              {selectedStat === 'hours' && (
                <>
                  <h2>Learning Hours</h2>
                  <div className={styles.hoursChart}>
                    {learningHours.map((day, index) => (
                      <div key={index} className={styles.hourBar}>
                        <div 
                          className={styles.barFill} 
                          style={{ height: `${(day.hours / 4) * 100}%` }}
                        />
                        <span className={styles.barLabel}>{day.hours}h</span>
                        <span className={styles.barDate}>
                          {new Date(day.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 