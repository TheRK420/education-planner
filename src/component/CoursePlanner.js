import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import CourseCard from './CourseCard';

const CoursePlanner = () => {
  const [courseData, setCourseData] = useState([]);

  // Load data from local storage on page load
  useEffect(() => {
    const savedCourseData = JSON.parse(localStorage.getItem('courseData'));
    if (savedCourseData) {
      setCourseData(savedCourseData);
    }
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('courseData', JSON.stringify(data));
  };

  const onClickHandler = () => {
    const courseName = document.getElementById('course-name').value;
    const courseHour = document.getElementById('course-hours').value;
    const newCourseData = {
      name: courseName,
      hour: parseInt(courseHour)
    };
    const updatedCourseData = [...courseData, newCourseData];
    setCourseData(updatedCourseData);
    saveToLocalStorage(updatedCourseData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Plan Your Course</h1>
      <div style={{ display: 'flex', justifyContent: 'center',gap:"1rem" }}>
        <input id='course-name' type='text' placeholder='Course Name' />
        <input id='course-hours' type='number' placeholder='Study Hours' />
        <Button onClick={onClickHandler} fontColor='#FFFFFF' backgroundKaColor='#000000' borderKaRadius='8px'>Add</Button>
      </div>
      {courseData.map((course, index) => (
        <CourseCard name={course.name} hour={course.hour} key={index} index={index} setCourseData={setCourseData} saveToLocalStorage={saveToLocalStorage} />
      ))}
    </div>
  );
};

export default CoursePlanner;
