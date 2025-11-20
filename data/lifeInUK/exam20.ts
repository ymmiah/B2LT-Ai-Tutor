import { MockQuestion } from "../../types";

export const exam20: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "What is the 'NHS'?",
      options: ["National Health Service", "New Housing Scheme", "National Holiday System", "New Health Standard"],
      correct_answer: "National Health Service",
      explanation: "The publicly funded healthcare system.",
      translations: { bn: { question: "'NHS' কি?", options: ["ন্যাশনাল হেলথ সার্ভিস", "নিউ হাউজিং স্কিম", "ন্যাশনাল হলিডে সিস্টেম", "নিউ হেলথ স্ট্যান্ডার্ড"] } }
    },
    {
      question: "Where is the Giant's Causeway?",
      options: ["Northern Ireland", "Scotland", "Wales", "England"],
      correct_answer: "Northern Ireland",
      explanation: "A famous landmark in Northern Ireland.",
      translations: { bn: { question: "জায়ান্টস কজওয়ে কোথায়?", options: ["উত্তর আয়ারল্যান্ড", "স্কটল্যান্ড", "ওয়েলস", "ইংল্যান্ড"] } }
    }
    // ... Add more unique questions here for Exam 20
  ]
};