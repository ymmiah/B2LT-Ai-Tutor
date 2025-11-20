
import { MockQuestion } from "../types";
import { masterQuestionPool } from './lifeInUK/masterPool';
import { b1MockExams as originalB1 } from './mockExams'; // We will keep B1 as is for now, or I can inline it if needed. 
// Actually, I'll just redefine B1 here to keep the file self-contained and clean, avoiding circular deps if I import from itself (which is bad).

// --- B1 Exam Data (Preserved) ---
const b1ExamData: { [key: string]: { questions: MockQuestion[] } } = {
  exam1: {
    questions: [
      {
        question: "I ______ to the cinema yesterday.",
        options: ["went", "go", "gone", "am going"],
        correct_answer: "went",
        explanation: "For past events like 'yesterday', we use the simple past tense, which is 'went'.",
        translations: { "bn": { "question": "আমি গতকাল সিনেমায় ______।", "options": ["গিয়েছিলাম", "যাই", "গিয়েছে", "যাচ্ছি"] } }
      },
      {
        question: "She has never ______ to Japan.",
        options: ["been", "go", "went", "gone"],
        correct_answer: "been",
        explanation: "In the present perfect tense, 'have/has been to' means to have visited a place and returned.",
        translations: { "bn": { "question": "সে কখনো জাপানে ______।", "options": ["যায়নি", "যাওয়া", "গিয়েছিল", "গিয়েছে"] } }
      }
    ]
  },
  exam2: {
      questions: [
          {
            question: "If I ______ rich, I would buy a house.",
            options: ["was", "am", "were", "be"],
            correct_answer: "were",
            explanation: "In the second conditional, we often use 'were' instead of 'was' for all persons.",
            translations: { "bn": { "question": "যদি আমি ধনী ______ তবে আমি একটি বাড়ি কিনতাম।", "options": ["ছিলাম", "হই", "হতাম", "হব"] } }
          }
      ]
  }
};

export const b1MockExams = b1ExamData;

// --- Central Question Management for Life in the UK ---

const QUESTIONS_PER_EXAM = 24;

// Helper function to deterministically get a unique slice of questions for any exam number.
// This ensures Exams 1-20 are always unique (as long as the pool is big enough).
// If the pool runs out, it wraps around using modulo, but with an offset to try and mix it up.
const getLifeInUKQuestions = (examNumber: number): MockQuestion[] => {
    const totalQuestions = masterQuestionPool.length;
    const startIndex = ((examNumber - 1) * QUESTIONS_PER_EXAM) % totalQuestions;
    
    let questions: MockQuestion[] = [];
    
    if (startIndex + QUESTIONS_PER_EXAM <= totalQuestions) {
        // Simple slice if we have enough questions remaining in the array
        questions = masterQuestionPool.slice(startIndex, startIndex + QUESTIONS_PER_EXAM);
    } else {
        // Wrap around if we reach the end
        const firstPart = masterQuestionPool.slice(startIndex);
        const remainingCount = QUESTIONS_PER_EXAM - firstPart.length;
        const secondPart = masterQuestionPool.slice(0, remainingCount);
        questions = [...firstPart, ...secondPart];
    }
    
    // Add a generated exam number property if needed, or just return the raw questions.
    // The UI expects just the questions array.
    return questions;
};

// Using a Proxy to dynamically handle any exam number request (exam1...exam20...)
export const lifeInUKMockExams = new Proxy({}, {
  get: (target, prop: string) => {
    if (prop.startsWith('exam')) {
        const examNumberStr = prop.replace('exam', '');
        const examNumber = parseInt(examNumberStr, 10);
        
        if (!isNaN(examNumber)) {
            return { questions: getLifeInUKQuestions(examNumber) };
        }
    }
    return undefined;
  }
});
