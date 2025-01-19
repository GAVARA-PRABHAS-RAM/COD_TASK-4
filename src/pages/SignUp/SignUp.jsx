import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';

const SignUp = ({ setIsAuthenticated, setUsername }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    education: '',
    interests: []
  });

  const [errors, setErrors] = useState({});

  const interestOptions = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'AI/ML',
    'Cloud Computing',
    'Cybersecurity',
    'UI/UX Design'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedInterests = checked
        ? [...formData.interests, value]
        : formData.interests.filter(interest => interest !== value);
      
      setFormData(prev => ({
        ...prev,
        interests: updatedInterests
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (!formData.education) {
      newErrors.education = 'Education is required';
    }

    if (formData.interests.length === 0) {
      newErrors.interests = 'Select at least one interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      // Set authentication state
      setIsAuthenticated(true);
      setUsername('Gavara Prabhas Ram');
      navigate('/');
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        <h1>Create Account</h1>
        <p className={styles.subtitle}>Join our learning community today!</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? styles.error : ''}
              placeholder="Enter your full name"
            />
            {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.error : ''}
              placeholder="Enter your email"
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? styles.error : ''}
                placeholder="Create password"
              />
              {errors.password && <span className={styles.errorText}>{errors.password}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? styles.error : ''}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={errors.phoneNumber ? styles.error : ''}
                placeholder="Enter phone number"
              />
              {errors.phoneNumber && <span className={styles.errorText}>{errors.phoneNumber}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={errors.dateOfBirth ? styles.error : ''}
              />
              {errors.dateOfBirth && <span className={styles.errorText}>{errors.dateOfBirth}</span>}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={errors.gender ? styles.error : ''}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className={styles.errorText}>{errors.gender}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="education">Education</label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={errors.education ? styles.error : ''}
              >
                <option value="">Select Education</option>
                <option value="highschool">High School</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">Ph.D.</option>
                <option value="other">Other</option>
              </select>
              {errors.education && <span className={styles.errorText}>{errors.education}</span>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Interests</label>
            <div className={styles.interestsGrid}>
              {interestOptions.map(interest => (
                <label key={interest} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleChange}
                  />
                  {interest}
                </label>
              ))}
            </div>
            {errors.interests && <span className={styles.errorText}>{errors.interests}</span>}
          </div>

          <button type="submit" className={styles.submitButton}>
            Create Account
          </button>
        </form>

        <p className={styles.loginLink}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp; 