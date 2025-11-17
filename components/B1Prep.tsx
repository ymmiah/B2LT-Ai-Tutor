import React from 'react';
import MockTest from './MockTest';
import ConversationalPractice from './ConversationalPractice';
import AudioTranscription from './AudioTranscription';
import { TestResult } from '../types';

interface B1PrepProps {
    onSaveResult: (result: TestResult) => void;
    testHistory: TestResult[];
}

const B1Prep: React.FC<B1PrepProps> = ({ onSaveResult, testHistory }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">B1 Exam Preparation</h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Sharpen your skills with our AI-powered tools.</p>
      </div>
      <MockTest examType="B1" onSaveResult={onSaveResult} testHistory={testHistory} />
      <ConversationalPractice />
      <AudioTranscription />
    </div>
  );
};

export default B1Prep;