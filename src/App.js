// App.js

import React from 'react';
import './App.css';
import ExamCard from './ExamCard';
import OngoingExamCard from './OngoingExamCard'; // Import OngoingExamCard component
import OngoingTestPage from './OngoingTestPage'; // Import OngoingTestPage component

function App() {
  // Dummy data for upcoming exams
  const upcomingExams = [
    {
      id: 1,
      date: '2024-04-10',
      time: '10:00 AM',
      duration: '2 hours',
      subject: 'Mathematics'
    },
    {
      id: 2,
      date: '2024-04-15',
      time: '9:30 AM',
      duration: '1.5 hours',
      subject: 'Science'
    },
    {
      id: 3,
      date: '2024-04-20',
      time: '11:00 AM',
      duration: '2.5 hours',
      subject: 'History'
    }
  ];

  return (
    <div className="App">
      <h1>Upcoming Exams</h1>
      <div className="exam-list">
        {upcomingExams.map(exam => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>

      {/* Render OngoingTestPage component */}
      <OngoingTestPage />
    </div>
  );
}

export default App;
