import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CourseDetail.module.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [selectedModule, setSelectedModule] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [courses] = useState([
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "John Doe",
      instructorAvatar: "https://i.pravatar.cc/150?img=1",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      duration: "12 weeks",
      level: "Beginner",
      progress: 60,
      students: 1234,
      modules: [
        {
          id: 1,
          title: "Introduction to HTML",
          description: "Learn the basics of HTML and document structure",
          progress: 75,
          lessons: [
            {
              id: 1,
              type: "video",
              title: "HTML Basics",
              duration: "45 min",
              videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
              completed: true,
              points: 10
            },
            {
              id: 2,
              type: "video",
              title: "HTML Forms and Tables",
              duration: "60 min",
              videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
              completed: false,
              points: 10
            },
            {
              id: 3,
              type: "quiz",
              title: "HTML Basics Quiz",
              duration: "20 min",
              questions: [
                {
                  id: 1,
                  question: "What does HTML stand for?",
                  options: [
                    "Hyper Text Markup Language",
                    "High Tech Modern Language",
                    "Hyper Transfer Markup Language",
                    "Home Tool Markup Language"
                  ],
                  correctAnswer: 0
                },
                {
                  id: 2,
                  question: "Which tag is used for creating a hyperlink?",
                  options: ["<link>", "<a>", "<href>", "<url>"],
                  correctAnswer: 1
                }
              ],
              completed: false,
              score: null,
              passingScore: 70,
              points: 20
            }
          ]
        },
        {
          id: 2,
          title: "CSS Fundamentals",
          description: "Master CSS styling and layouts",
          progress: 50,
          lessons: [
            {
              id: 4,
              type: "video",
              title: "CSS Selectors",
              duration: "55 min",
              videoUrl: "https://www.youtube.com/embed/1PnVor36_40",
              completed: false,
              points: 10
            },
            {
              id: 5,
              type: "video",
              title: "Flexbox Layout",
              duration: "65 min",
              videoUrl: "https://www.youtube.com/embed/JJSoEo8JSnc",
              completed: false,
              points: 10
            },
            {
              id: 6,
              type: "quiz",
              title: "CSS Fundamentals Quiz",
              duration: "25 min",
              questions: [
                {
                  id: 1,
                  question: "Which property is used to change text color?",
                  options: ["text-color", "font-color", "color", "text-style"],
                  correctAnswer: 2
                },
                {
                  id: 2,
                  question: "What does CSS stand for?",
                  options: [
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Colorful Style Sheets"
                  ],
                  correctAnswer: 1
                }
              ],
              completed: false,
              score: null,
              passingScore: 70,
              points: 20
            }
          ]
        }
      ],
      totalPoints: 100,
      earnedPoints: 60,
      finalGrade: null
    },
    {
      id: 2,
      title: "Advanced JavaScript Mastery",
      instructor: "Jane Smith",
      instructorAvatar: "https://i.pravatar.cc/150?img=2",
      thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800",
      duration: "8 weeks",
      level: "Advanced",
      progress: 30,
      students: 856,
      modules: [
        {
          id: 1,
          title: "ES6+ Features",
          description: "Modern JavaScript features and syntax",
          progress: 40,
          lessons: [
            {
              id: 1,
              type: "video",
              title: "Arrow Functions",
              duration: "40 min",
              videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
              completed: true,
              points: 10
            },
            {
              id: 2,
              type: "video",
              title: "Destructuring",
              duration: "35 min",
              videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE",
              completed: false,
              points: 10
            },
            {
              id: 3,
              type: "quiz",
              title: "ES6+ Features Quiz",
              duration: "30 min",
              questions: [
                {
                  id: 1,
                  question: "What is the correct way to write an arrow function?",
                  options: [
                    "function() => {}",
                    "=> () {}",
                    "() => {}",
                    "() <= {}"
                  ],
                  correctAnswer: 2
                },
                {
                  id: 2,
                  question: "Which ES6 feature allows unpacking values from arrays or properties from objects?",
                  options: ["Spread", "Rest", "Destructuring", "Template Literals"],
                  correctAnswer: 2
                }
              ],
              completed: false,
              score: null,
              passingScore: 80,
              points: 20
            }
          ]
        }
      ],
      totalPoints: 100,
      earnedPoints: 30,
      finalGrade: null
    },
    {
      id: 3,
      title: "Python Programming Masterclass",
      instructor: "Sarah Wilson",
      instructorAvatar: "https://i.pravatar.cc/150?img=3",
      thumbnail: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800",
      duration: "10 weeks",
      level: "Intermediate",
      progress: 0,
      students: 1567,
      modules: [
        {
          id: 1,
          title: "Python Basics",
          description: "Learn Python fundamentals and syntax",
          progress: 0,
          lessons: [
            {
              id: 1,
              type: "video",
              title: "Introduction to Python",
              duration: "50 min",
              videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
              completed: false,
              points: 10
            },
            {
              id: 2,
              type: "video",
              title: "Variables and Data Types",
              duration: "45 min",
              videoUrl: "https://www.youtube.com/embed/Z1Yd7upQsXY",
              completed: false,
              points: 10
            },
            {
              id: 3,
              type: "quiz",
              title: "Python Basics Quiz",
              duration: "25 min",
              questions: [
                {
                  id: 1,
                  question: "Which of these is a valid Python variable name?",
                  options: ["2variable", "_variable", "variable-name", "variable name"],
                  correctAnswer: 1
                },
                {
                  id: 2,
                  question: "What is the correct way to create a comment in Python?",
                  options: ["// comment", "/* comment */", "# comment", "-- comment"],
                  correctAnswer: 2
                }
              ],
              completed: false,
              score: null,
              passingScore: 70,
              points: 20
            }
          ]
        },
        {
          id: 2,
          title: "Object-Oriented Programming",
          description: "Master classes, objects, and inheritance in Python",
          progress: 0,
          lessons: [
            {
              id: 4,
              type: "video",
              title: "Classes and Objects",
              duration: "55 min",
              videoUrl: "https://www.youtube.com/embed/ZDa-Z5JzLYM",
              completed: false,
              points: 10
            },
            {
              id: 5,
              type: "video",
              title: "Inheritance and Polymorphism",
              duration: "60 min",
              videoUrl: "https://www.youtube.com/embed/RSl87lqOXDE",
              completed: false,
              points: 10
            },
            {
              id: 6,
              type: "quiz",
              title: "OOP Concepts Quiz",
              duration: "30 min",
              questions: [
                {
                  id: 1,
                  question: "What keyword is used to create a class in Python?",
                  options: ["def", "class", "create", "struct"],
                  correctAnswer: 1
                },
                {
                  id: 2,
                  question: "Which method is automatically called when a new object is created?",
                  options: ["__init__", "__main__", "__new__", "__create__"],
                  correctAnswer: 0
                }
              ],
              completed: false,
              score: null,
              passingScore: 75,
              points: 20
            }
          ]
        }
      ],
      totalPoints: 100,
      earnedPoints: 0,
      finalGrade: null
    },
    {
      id: 4,
      title: "Data Science Fundamentals",
      instructor: "Michael Chen",
      instructorAvatar: "https://i.pravatar.cc/150?img=4",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      duration: "14 weeks",
      level: "Advanced",
      progress: 0,
      students: 2103,
      modules: [
        {
          id: 1,
          title: "Introduction to Data Analysis",
          description: "Learn data analysis with Python libraries",
          progress: 0,
          lessons: [
            {
              id: 1,
              type: "video",
              title: "NumPy Basics",
              duration: "45 min",
              videoUrl: "https://www.youtube.com/embed/QUT1VHiLmmI",
              completed: false,
              points: 10
            },
            {
              id: 2,
              type: "video",
              title: "Pandas DataFrame",
              duration: "50 min",
              videoUrl: "https://www.youtube.com/embed/vmEHCJofslg",
              completed: false,
              points: 10
            },
            {
              id: 3,
              type: "quiz",
              title: "Data Analysis Tools Quiz",
              duration: "25 min",
              questions: [
                {
                  id: 1,
                  question: "Which library is primarily used for numerical computations in Python?",
                  options: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
                  correctAnswer: 1
                },
                {
                  id: 2,
                  question: "What is the primary data structure in Pandas?",
                  options: ["Array", "List", "DataFrame", "Matrix"],
                  correctAnswer: 2
                }
              ],
              completed: false,
              score: null,
              passingScore: 80,
              points: 20
            }
          ]
        },
        {
          id: 2,
          title: "Data Visualization",
          description: "Create compelling visualizations with Python",
          progress: 0,
          lessons: [
            {
              id: 4,
              type: "video",
              title: "Matplotlib Introduction",
              duration: "40 min",
              videoUrl: "https://www.youtube.com/embed/UO98lJQ3QGI",
              completed: false,
              points: 10
            },
            {
              id: 5,
              type: "video",
              title: "Seaborn Plotting",
              duration: "45 min",
              videoUrl: "https://www.youtube.com/embed/GcXcSZ0gQps",
              completed: false,
              points: 10
            },
            {
              id: 6,
              type: "quiz",
              title: "Data Visualization Quiz",
              duration: "30 min",
              questions: [
                {
                  id: 1,
                  question: "Which library is built on top of Matplotlib?",
                  options: ["NumPy", "Pandas", "Seaborn", "Scikit-learn"],
                  correctAnswer: 2
                },
                {
                  id: 2,
                  question: "What type of plot is best for showing distribution?",
                  options: ["Line plot", "Scatter plot", "Histogram", "Bar plot"],
                  correctAnswer: 2
                }
              ],
              completed: false,
              score: null,
              passingScore: 80,
              points: 20
            }
          ]
        }
      ],
      totalPoints: 100,
      earnedPoints: 0,
      finalGrade: null
    },
    {
      id: 5,
      title: "Mobile App Development with React Native",
      instructor: "Emily Rodriguez",
      instructorAvatar: "https://i.pravatar.cc/150?img=5",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      duration: "12 weeks",
      level: "Intermediate",
      progress: 0,
      students: 1876,
      modules: [
        {
          id: 1,
          title: "React Native Basics",
          description: "Learn the fundamentals of React Native development",
          progress: 0,
          lessons: [
            {
              id: 1,
              type: "video",
              title: "Setting Up React Native",
              duration: "40 min",
              videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc",
              completed: false,
              points: 10
            },
            {
              id: 2,
              type: "video",
              title: "Components and Props",
              duration: "45 min",
              videoUrl: "https://www.youtube.com/embed/ur6I5m2nTvk",
              completed: false,
              points: 10
            },
            {
              id: 3,
              type: "quiz",
              title: "React Native Fundamentals Quiz",
              duration: "25 min",
              questions: [
                {
                  id: 1,
                  question: "What is the main component type in React Native?",
                  options: ["View", "Div", "Container", "Section"],
                  correctAnswer: 0
                },
                {
                  id: 2,
                  question: "Which command is used to create a new React Native project?",
                  options: [
                    "create-react-app",
                    "npx react-native init",
                    "npm create native-app",
                    "expo init"
                  ],
                  correctAnswer: 1
                }
              ],
              completed: false,
              score: null,
              passingScore: 75,
              points: 20
            }
          ]
        },
        {
          id: 2,
          title: "Navigation and State Management",
          description: "Master navigation and state in React Native apps",
          progress: 0,
          lessons: [
            {
              id: 4,
              type: "video",
              title: "React Navigation",
              duration: "55 min",
              videoUrl: "https://www.youtube.com/embed/nQVCkqvU1uE",
              completed: false,
              points: 10
            },
            {
              id: 5,
              type: "video",
              title: "Redux Implementation",
              duration: "60 min",
              videoUrl: "https://www.youtube.com/embed/9boMnm5X9ak",
              completed: false,
              points: 10
            },
            {
              id: 6,
              type: "quiz",
              title: "Navigation and State Quiz",
              duration: "30 min",
              questions: [
                {
                  id: 1,
                  question: "Which navigator type is recommended for tab navigation?",
                  options: ["Stack", "Drawer", "Bottom Tab", "Top Tab"],
                  correctAnswer: 2
                },
                {
                  id: 2,
                  question: "What is the main purpose of Redux?",
                  options: [
                    "UI Styling",
                    "State Management",
                    "Navigation",
                    "API Calls"
                  ],
                  correctAnswer: 1
                }
              ],
              completed: false,
              score: null,
              passingScore: 75,
              points: 20
            }
          ]
        }
      ],
      totalPoints: 100,
      earnedPoints: 0,
      finalGrade: null
    }
  ]);

  const course = courses.find(c => c.id === parseInt(id));
  
  if (!course) {
    return <div className={styles.courseDetail}>Course not found</div>;
  }

  const currentModule = course.modules[selectedModule];
  const currentLesson = currentModule?.lessons[selectedLesson];

  const handleAnswerSelect = (questionId, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleQuizSubmit = () => {
    if (currentLesson.type !== 'quiz') return;

    const totalQuestions = currentLesson.questions.length;
    let correctAnswers = 0;

    currentLesson.questions.forEach(question => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = (correctAnswers / totalQuestions) * 100;
    setShowResults(true);
    
    // Update the quiz score and completion status
    currentLesson.score = score;
    currentLesson.completed = score >= currentLesson.passingScore;
    
    // Update module progress
    const totalLessons = currentModule.lessons.length;
    const completedLessons = currentModule.lessons.filter(l => l.completed).length;
    currentModule.progress = (completedLessons / totalLessons) * 100;
    
    // Update course progress and points
    const earnedPoints = currentLesson.completed ? currentLesson.points : 0;
    course.earnedPoints += earnedPoints;
    course.progress = (course.earnedPoints / course.totalPoints) * 100;
    
    if (course.progress === 100) {
      course.finalGrade = (course.earnedPoints / course.totalPoints) * 100;
    }
  };

  return (
    <div className={styles.courseDetail}>
      <div className={styles.header}>
        <h1>{course.title}</h1>
        <div className={styles.courseInfo}>
          <div className={styles.instructor}>
            <img src={course.instructorAvatar} alt={course.instructor} />
            <span>{course.instructor}</span>
          </div>
          <div className={styles.progress}>
            <div className={styles.progressText}>
              <span>Course Progress: {course.progress.toFixed(1)}%</span>
              <span>Points: {course.earnedPoints}/{course.totalPoints}</span>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.sidebar}>
          <div className={styles.moduleList}>
            {course.modules.map((module, moduleIndex) => (
              <div 
                key={module.id} 
                className={`${styles.module} ${moduleIndex === selectedModule ? styles.active : ''}`}
              >
                <div 
                  className={styles.moduleHeader}
                  onClick={() => setSelectedModule(moduleIndex)}
                >
                  <h3>{module.title}</h3>
                  <div className={styles.moduleProgress}>
                    <span className={styles.moduleInfo}>
                      {module.lessons.length} lessons • {module.lessons.filter(l => l.completed).length} completed
                    </span>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill} 
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
                {moduleIndex === selectedModule && (
                  <div className={styles.lessonList}>
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div 
                        key={lesson.id}
                        className={`${styles.lesson} ${lessonIndex === selectedLesson ? styles.active : ''} ${lesson.completed ? styles.completed : ''}`}
                        onClick={() => {
                          setSelectedLesson(lessonIndex);
                          setShowResults(false);
                          setQuizAnswers({});
                        }}
                      >
                        <div className={styles.lessonInfo}>
                          <div className={styles.lessonHeader}>
                            <span className={styles.lessonType}>
                              {lesson.type === 'video' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.typeIcon}>
                                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.typeIcon}>
                                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                              )}
                            </span>
                            <span className={styles.lessonTitle}>{lesson.title}</span>
                          </div>
                          <div className={styles.lessonMeta}>
                            <span className={styles.lessonDuration}>{lesson.duration}</span>
                            <span className={styles.lessonPoints}>{lesson.points} points</span>
                          </div>
                        </div>
                        {lesson.completed && (
                          <div className={styles.lessonStatus}>
                            {lesson.type === 'quiz' && (
                              <span className={styles.score}>{lesson.score}%</span>
                            )}
                            <svg className={styles.completedIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mainContent}>
          {currentLesson?.type === 'video' ? (
            <>
              <div className={styles.videoContainer}>
                <iframe
                  src={currentLesson.videoUrl}
                  title={currentLesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.video}
                />
              </div>
              <div className={styles.lessonDetails}>
                <h2>{currentLesson.title}</h2>
                <div className={styles.lessonMeta}>
                  <span>Duration: {currentLesson.duration}</span>
                  <span>Points: {currentLesson.points}</span>
                </div>
                <p className={styles.moduleDescription}>{currentModule.description}</p>
              </div>
            </>
          ) : currentLesson?.type === 'quiz' ? (
            <div className={styles.quizContainer}>
              <div className={styles.quizHeader}>
                <h2>{currentLesson.title}</h2>
                <div className={styles.quizMeta}>
                  <span>Duration: {currentLesson.duration}</span>
                  <span>Points: {currentLesson.points}</span>
                  <span>Passing Score: {currentLesson.passingScore}%</span>
                </div>
              </div>
              
              {!showResults ? (
                <>
                  <div className={styles.questions}>
                    {currentLesson.questions.map((question, index) => (
                      <div key={question.id} className={styles.questionCard}>
                        <h3>Question {index + 1}</h3>
                        <p className={styles.questionText}>{question.question}</p>
                        <div className={styles.options}>
                          {question.options.map((option, optionIndex) => (
                            <label key={optionIndex} className={styles.option}>
                              <input
                                type="radio"
                                name={`question-${question.id}`}
                                checked={quizAnswers[question.id] === optionIndex}
                                onChange={() => handleAnswerSelect(question.id, optionIndex)}
                              />
                              <span className={styles.optionText}>{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    className={styles.submitButton}
                    onClick={handleQuizSubmit}
                    disabled={currentLesson.questions.length !== Object.keys(quizAnswers).length}
                  >
                    Submit Quiz
                  </button>
                </>
              ) : (
                <div className={styles.quizResults}>
                  <div className={styles.scoreCard}>
                    <h3>Quiz Results</h3>
                    <div className={styles.scoreValue}>
                      {currentLesson.score}%
                    </div>
                    <div className={styles.scoreStatus}>
                      {currentLesson.score >= currentLesson.passingScore ? (
                        <div className={styles.passed}>
                          Passed! You earned {currentLesson.points} points
                        </div>
                      ) : (
                        <div className={styles.failed}>
                          Failed. Try again to earn points
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.answers}>
                    {currentLesson.questions.map((question, index) => (
                      <div key={question.id} className={styles.answerCard}>
                        <h4>Question {index + 1}</h4>
                        <p>{question.question}</p>
                        <div className={styles.answerReview}>
                          <div className={styles.yourAnswer}>
                            Your answer: {question.options[quizAnswers[question.id]]}
                            {quizAnswers[question.id] === question.correctAnswer ? (
                              <svg className={styles.correct} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className={styles.incorrect} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          {quizAnswers[question.id] !== question.correctAnswer && (
                            <div className={styles.correctAnswer}>
                              Correct answer: {question.options[question.correctAnswer]}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    className={styles.retryButton}
                    onClick={() => {
                      setShowResults(false);
                      setQuizAnswers({});
                    }}
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail; 