import { MockQuestion } from "../../types";

export const exam18: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "Who invaded Britain in 1066?",
      options: ["Normans", "Vikings", "Romans", "Saxons"],
      correct_answer: "Normans",
      explanation: "William of Normandy invaded in 1066.",
      translations: { bn: { question: "১০৬৬ সালে কারা ব্রিটেন আক্রমণ করেছিল?", options: ["নরম্যান", "ভাইকিং", "রোমান", "স্যাক্সন"] } }
    },
    {
      question: "What is 'The National Trust'?",
      options: ["A charity preserving history/nature", "A bank", "A hospital", "A school"],
      correct_answer: "A charity preserving history/nature",
      explanation: "It protects historic places and green spaces.",
      translations: { bn: { question: "'ন্যাশনাল ট্রাস্ট' কি?", options: ["ইতিহাস/প্রকৃতি সংরক্ষণকারী একটি দাতব্য সংস্থা", "একটি ব্যাংক", "একটি হাসপাতাল", "একটি স্কুল"] } }
    }
    // ... Add more unique questions here for Exam 18
  ]
};