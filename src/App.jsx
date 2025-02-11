import React from 'react';
import QuestionAnswer from './QuestionAnswer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow h-full">
        <QuestionAnswer />
      </div>
      <footer className="p-4 text-center">
        <a href="https://www.zapt.ai" target="_blank" rel="noreferrer" className="cursor-pointer text-blue-500">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}