import React from 'react';
import './ExamCard.css';
const ExamCard = ({ exam }) => {
  const { date, time, duration, subject } = exam;

  return (
    <div className="exam-card">
      <div className="exam-details">
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Duration: {duration}</p>
        <p>Subject: {subject}</p>
      </div>
    </div>
  );
}

export default ExamCard;
