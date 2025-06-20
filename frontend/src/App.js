import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/hello`)
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div>
      <h1>Frontend React App</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
