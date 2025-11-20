import { MockQuestion } from "../../types";

export const exam17: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "What is the 'Hogmanay'?",
      options: ["Scottish New Year", "Welsh Christmas", "Irish Easter", "English Harvest"],
      correct_answer: "Scottish New Year",
      explanation: "Hogmanay is the word for New Year's Eve in Scotland.",
      translations: { bn: { question: "'হগমানে' কি?", options: ["স্কটিশ নববর্ষ", "ওয়েলশ ক্রিসমাস", "আইরিশ ইস্টার", "ইংরেজি ফসল"] } }
    },
    {
      question: "What is the speed limit on a single carriageway?",
      options: ["60 mph", "70 mph", "50 mph", "30 mph"],
      correct_answer: "60 mph",
      explanation: "The limit is usually 60 mph for cars.",
      translations: { bn: { question: "সিঙ্গেল ক্যারেজওয়েতে গতিসীমা কত?", options: ["৬০ মাইল", "৭০ মাইল", "৫০ মাইল", "৩০ মাইল"] } }
    }
    // ... Add more unique questions here for Exam 17
  ]
};