import { useState } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import styles from './Courses.module.css';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const categories = [
    'Web Development',
    'Programming',
    'Design',
    'Data Science',
    'Mobile Development',
    'Marketing',
    'Cloud Computing',
    'Security',
    'Blockchain',
    'Game Development'
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "John Doe",
      instructorAvatar: "https://i.pravatar.cc/150?img=1",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      duration: "12 weeks",
      level: "Beginner",
      category: "Web Development",
      students: 1234,
      progress: 0
    },
    {
      id: 2,
      title: "Advanced JavaScript Mastery",
      instructor: "Jane Smith",
      instructorAvatar: "https://i.pravatar.cc/150?img=2",
      thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800",
      duration: "8 weeks",
      level: "Advanced",
      category: "Programming",
      students: 856,
      progress: 0
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Sarah Wilson",
      instructorAvatar: "https://i.pravatar.cc/150?img=3",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      duration: "6 weeks",
      level: "Beginner",
      category: "Design",
      students: 2341,
      progress: 0
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Michael Chen",
      instructorAvatar: "https://i.pravatar.cc/150?img=4",
      thumbnail: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Data Science",
      students: 1567,
      progress: 0
    },
    {
      id: 5,
      title: "Mobile App Development with React Native",
      instructor: "Emily Rodriguez",
      instructorAvatar: "https://i.pravatar.cc/150?img=5",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      duration: "12 weeks",
      level: "Intermediate",
      category: "Mobile Development",
      students: 987,
      progress: 0
    },
    {
      id: 6,
      title: "Machine Learning Fundamentals",
      instructor: "David Kim",
      instructorAvatar: "https://i.pravatar.cc/150?img=6",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      duration: "14 weeks",
      level: "Advanced",
      category: "Data Science",
      students: 1432,
      progress: 0
    },
    {
      id: 7,
      title: "Digital Marketing Strategy",
      instructor: "Lisa Thompson",
      instructorAvatar: "https://i.pravatar.cc/150?img=7",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      duration: "6 weeks",
      level: "Beginner",
      category: "Marketing",
      students: 2156,
      progress: 0
    },
    {
      id: 8,
      title: "Cloud Computing with AWS",
      instructor: "Robert Martinez",
      instructorAvatar: "https://i.pravatar.cc/150?img=8",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Cloud Computing",
      students: 892,
      progress: 0
    },
    {
      id: 9,
      title: "Cybersecurity Essentials",
      instructor: "Alex Johnson",
      instructorAvatar: "https://i.pravatar.cc/150?img=9",
      thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      duration: "8 weeks",
      level: "Beginner",
      category: "Security",
      students: 1654,
      progress: 0
    },
    {
      id: 10,
      title: "Blockchain Development",
      instructor: "Chris Lee",
      instructorAvatar: "https://i.pravatar.cc/150?img=10",
      thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      duration: "12 weeks",
      level: "Advanced",
      category: "Blockchain",
      students: 765,
      progress: 0
    },
    {
      id: 11,
      title: "Game Development with Unity",
      instructor: "Mark Wilson",
      instructorAvatar: "https://i.pravatar.cc/150?img=11",
      thumbnail: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800",
      duration: "16 weeks",
      level: "Intermediate",
      category: "Game Development",
      students: 1876,
      progress: 0
    },
    {
      id: 12,
      title: "Artificial Intelligence Basics",
      instructor: "Sophie Chen",
      instructorAvatar: "https://i.pravatar.cc/150?img=12",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      duration: "10 weeks",
      level: "Advanced",
      category: "Data Science",
      students: 2341,
      progress: 0
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div className={styles.coursesPage}>
      <div className={styles.header}>
        <h1>Explore Our Courses</h1>
        <div className={styles.filters}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search courses"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <div className={styles.dropdownFilters}>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Levels</option>
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className={styles.courseGrid}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className={styles.noCourses}>
            <h3>No courses found</h3>
            <p>Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses; 