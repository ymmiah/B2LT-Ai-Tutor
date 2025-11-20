import { MockQuestion } from "../../types";

export const exam19: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "Who was Queen Victoria?",
      options: ["A long-reigning monarch", "A Prime Minister", "A scientist", "A writer"],
      correct_answer: "A long-reigning monarch",
      explanation: "She reigned from 1837 to 1901.",
      translations: { bn: { question: "রানী ভিক্টোরিয়া কে ছিলেন?", options: ["একজন দীর্ঘ রাজত্বকারী রাজা", "একজন প্রধানমন্ত্রী", "একজন বিজ্ঞানী", "একজন লেখক"] } }
    },
    {
      question: "What is 'Wimbledon' famous for?",
      options: ["Tennis", "Football", "Golf", "Cricket"],
      correct_answer: "Tennis",
      explanation: "Famous for the tennis championships.",
      translations: { bn: { question: "'উইম্বলডন' কিসের জন্য বিখ্যাত?", options: ["টেনিস", "ফুটবল", "গলফ", "ক্রিকেট"] } }
    }
    // ... Add more unique questions here for Exam 19
  ]
};