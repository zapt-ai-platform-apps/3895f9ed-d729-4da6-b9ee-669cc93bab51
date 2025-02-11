import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function QuestionAnswer() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');
    try {
      console.log('Sending question to API:', question);
      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const apiAnswer = "This is the answer!";
      setAnswer(apiAnswer);
      console.log('Received answer from API:', apiAnswer);
    } catch (error) {
      console.error('Error fetching answer:', error);
      Sentry.captureException(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Question Answer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
          className="w-full p-2 mb-4 border rounded box-border"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 cursor-pointer"
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {answer && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-semibold mb-2">Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}