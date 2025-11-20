
export enum Page {
  Home,
  B1,
  LifeInUK,
  Profile,
}

export interface MockQuestion {
  question: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  translations?: {
    [languageCode: string]: {
      question: string;
      options: string[];
    };
  };
}

export interface IncorrectQuestionDetail {
    question: string;
    userAnswer: string;
    correctAnswer: string;
}

export interface SavedQuestion {
  id: string; // Unique identifier (hash or timestamp + index)
  section: 'B1' | 'Life in the UK';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  context?: string; // For Reading passages or Listening scripts
  dateSaved: string;
}

export interface TestResult {
  examType: 'B1' | 'Life in the UK';
  examNumber: number;
  score: number;
  totalQuestions: number;
  date: string;
  incorrectQuestions: IncorrectQuestionDetail[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  dateUnlocked?: string;
  icon: string;
}

export interface UserProgressData {
  email: string;
  testHistory: TestResult[];
  points: number;
  level: number;
  achievements: Achievement[];
  favorites: SavedQuestion[];
}
