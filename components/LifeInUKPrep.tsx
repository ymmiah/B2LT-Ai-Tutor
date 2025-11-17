import React, { useState } from 'react';
import MockTest from './MockTest';
import Card from './shared/Card';
import Spinner from './shared/Spinner';
import { generateImage } from '../services/geminiService';
import Chatbot from './Chatbot';
import { SparklesIcon } from './icons';
import { TestResult } from '../types';

const StudyAidGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [aspectRatio, setAspectRatio] = useState('1:1');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt) {
            setError('Please enter a prompt.');
            return;
        }
        setLoading(true);
        setError('');
        setImageUrl('');
        try {
            const response = await generateImage(prompt, aspectRatio);
            const base64ImageBytes = response.generatedImages[0].image.imageBytes;
            setImageUrl(`data:image/jpeg;base64,${base64ImageBytes}`);
        } catch (err)
        {
            setError('Failed to generate image. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card title="Visual Study Aid Generator" icon={<SparklesIcon />}>
            <p className="mb-4">Generate images of UK landmarks, historical events, or cultural symbols to help you study.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., 'The Tower of London on a sunny day'"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <div className="flex items-center space-x-4">
                    <label htmlFor="aspect-ratio" className="text-sm font-medium">Aspect Ratio:</label>
                    <select
                        id="aspect-ratio"
                        value={aspectRatio}
                        onChange={(e) => setAspectRatio(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        <option value="1:1">1:1 (Square)</option>
                        <option value="16:9">16:9 (Landscape)</option>
                        <option value="9:16">9:16 (Portrait)</option>
                        <option value="4:3">4:3</option>
                        <option value="3:4">3:4</option>
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-gray-400"
                >
                    {loading ? 'Generating...' : 'Generate Image'}
                </button>
            </form>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {loading && <div className="mt-4"><Spinner /></div>}
            {imageUrl && (
                <div className="mt-4">
                    <img src={imageUrl} alt={prompt} className="rounded-md shadow-lg mx-auto max-w-full h-auto" />
                </div>
            )}
        </Card>
    );
};

interface LifeInUKPrepProps {
    onSaveResult: (result: TestResult) => void;
    testHistory: TestResult[];
}

const LifeInUKPrep: React.FC<LifeInUKPrepProps> = ({ onSaveResult, testHistory }) => {
  return (
    <div className="space-y-8">
        <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Life in the UK Test Preparation</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Master the official handbook with our interactive tools.</p>
        </div>
      <MockTest examType="Life in the UK" onSaveResult={onSaveResult} testHistory={testHistory} />
      <StudyAidGenerator />
      <Chatbot systemInstruction="You are an expert tutor for the Life in the UK test. Answer questions clearly and concisely. You can use Google Search and Maps to find up-to-date information on test centers or related topics if asked." />
    </div>
  );
};

export default LifeInUKPrep;