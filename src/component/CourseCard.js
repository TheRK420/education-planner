import React, { useState } from 'react';
import { Button } from './Button';

const CourseCard = ({ name, hour, index, setCourseData, saveToLocalStorage }) => {
  const [hourValue, setHourValue] = useState(hour);

  const incrementHour = () => {
    const newHour = hourValue + 1;
    setHourValue(newHour);
    updateCourseData(newHour);
  };

  const decrementHour = () => {
    if (hourValue > 0) {
      const newHour = hourValue - 1;
      setHourValue(newHour);
      updateCourseData(newHour);
    }
  };

  const updateCourseData = (newHour) => {
    const updatedCourseData = [...JSON.parse(localStorage.getItem('courseData'))];
    updatedCourseData[index].hour = newHour;
    saveToLocalStorage(updatedCourseData);
    setCourseData(updatedCourseData);
  };

  return (
    <div
      style={{
        display: 'inline-block',
        textAlign:"center",
        padding: '10px',
        margin: '3rem',
       boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      }}
    >
      <p>Course Name: {name}</p>
      <p>Course Hour: {hourValue}</p>
      <div style={{display:"flex",justifyContent:"center",gap:"1rem"}}>
        <Button onClick={incrementHour}>+</Button>
        <Button onClick={decrementHour}>-</Button>
      </div>
    </div>
  );
};

export default CourseCard;
