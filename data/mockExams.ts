
import { MockQuestion } from "../types";
import { masterQuestionPool } from './lifeInUK/masterPool';
import { exam1 } from './lifeInUK/exam1';
import { exam2 } from './lifeInUK/exam2';
import { exam3 } from './lifeInUK/exam3';
import { exam4 } from './lifeInUK/exam4';
import { exam5 } from './lifeInUK/exam5';
import { exam6 } from './lifeInUK/exam6';
import { exam7 } from './lifeInUK/exam7';
import { exam8 } from './lifeInUK/exam8';
import { exam9 } from './lifeInUK/exam9';
import { exam10 } from './lifeInUK/exam10';
import { exam11 } from './lifeInUK/exam11';
import { exam12 } from './lifeInUK/exam12';
import { exam13 } from './lifeInUK/exam13';
import { exam14 } from './lifeInUK/exam14';
import { exam15 } from './lifeInUK/exam15';
import { exam16 } from './lifeInUK/exam16';
import { exam17 } from './lifeInUK/exam17';
import { exam18 } from './lifeInUK/exam18';
import { exam19 } from './lifeInUK/exam19';
import { exam20 } from './lifeInUK/exam20';

// --- B1 Exam Data ---
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

const getLifeInUKQuestions = (examNumber: number): MockQuestion[] => {
    const totalQuestions = masterQuestionPool.length;
    const startIndex = ((examNumber - 1) * QUESTIONS_PER_EXAM) % totalQuestions;
    
    let questions: MockQuestion[] = [];
    
    if (startIndex + QUESTIONS_PER_EXAM <= totalQuestions) {
        questions = masterQuestionPool.slice(startIndex, startIndex + QUESTIONS_PER_EXAM);
    } else {
        const firstPart = masterQuestionPool.slice(startIndex);
        const remainingCount = QUESTIONS_PER_EXAM - firstPart.length;
        const secondPart = masterQuestionPool.slice(0, remainingCount);
        questions = [...firstPart, ...secondPart];
    }
    return questions;
};

const staticExams: { [key: number]: { questions: MockQuestion[] } } = {
    1: exam1, 2: exam2, 3: exam3, 4: exam4, 5: exam5,
    6: exam6, 7: exam7, 8: exam8, 9: exam9, 10: exam10,
    11: exam11, 12: exam12, 13: exam13, 14: exam14, 15: exam15,
    16: exam16, 17: exam17, 18: exam18, 19: exam19, 20: exam20
};

export const lifeInUKMockExams = new Proxy({}, {
  get: (target, prop: string) => {
    if (prop.startsWith('exam')) {
        const examNumberStr = prop.replace('exam', '');
        const examNumber = parseInt(examNumberStr, 10);
        
        if (!isNaN(examNumber)) {
            // Prefer static file if available
            if (staticExams[examNumber]) {
                return staticExams[examNumber];
            }
            // Fallback to master pool generator
            return { questions: getLifeInUKQuestions(examNumber) };
        }
    }
    return undefined;
  }
});
