// pages/index.js
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [userID, setUserID] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [challengeIds, setChallengeIds] = useState('');
  const [enrollments, setEnrollments] = useState([]);

  const handleEnroll = async () => {
    try {
      const response = await axios.post('/api/enrollments', {
        userID,
        companyName,
        challengeIds: challengeIds.split(',').map(id => Number(id.trim())),
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error enrolling user:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get(`/api/enrollments?userID=${userID}`);
      setEnrollments(response.data);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    }
  };

  return (
    <div>
      <h1>Enrollments App</h1>
      <div>
        <h2>Enroll User</h2>
        <label>User ID:</label>
        <input
          type="text"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
        />
        <label>Company Name:</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label>Challenge IDs (comma-separated):</label>
        <input
          type="text"
          value={challengeIds}
          onChange={(e) => setChallengeIds(e.target.value)}
        />
        <button onClick={handleEnroll}>Enroll</button>
      </div>
      <div>
        <h2>Login</h2>
        <label>User ID:</label>
        <input
          type="text"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      {enrollments.length > 0 && (
        <div>
          <h2>Welcome, {enrollments[0].companyName}!</h2>
          <h3>Your Enrolled Challenges:</h3>
          <ul>
            {enrollments[0].challengeIds.map((challengeId, index) => (
              <li key={index}>{challengeId}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
