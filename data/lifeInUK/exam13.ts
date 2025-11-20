import { MockQuestion } from "../../types";

export const exam13: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "Which King had 6 wives?",
      options: ["Henry VIII", "Henry VII", "Charles I", "George III"],
      correct_answer: "Henry VIII",
      explanation: "Henry VIII is famous for his six marriages.",
      translations: { bn: { question: "কোন রাজার ৬ জন স্ত্রী ছিল?", options: ["অষ্টম হেনরি", "সপ্তম হেনরি", "প্রথম চার্লস", "তৃতীয় জর্জ"] } }
    },
    {
      question: "What is the 'Union Jack'?",
      options: ["The UK flag", "A coin", "A song", "A dance"],
      correct_answer: "The UK flag",
      explanation: "It combines the crosses of St George, St Andrew, and St Patrick.",
      translations: { bn: { question: "'ইউনিয়ন জ্যাক' কি?", options: ["যুক্তরাজ্যের পতাকা", "একটি মুদ্রা", "একটি গান", "একটি নাচ"] } }
    },
    {
      question: "Where is Stonehenge?",
      options: ["Wiltshire", "London", "Cardiff", "Edinburgh"],
      correct_answer: "Wiltshire",
      explanation: "Stonehenge is a prehistoric monument in Wiltshire.",
      translations: { bn: { question: "স্টোনহেঞ্জ কোথায়?", options: ["উইল্টশায়ার", "লন্ডন", "কার্ডিফ", "এডিনবার্গ"] } }
    },
    {
      question: "Who wrote 'Great Expectations'?",
      options: ["Charles Dickens", "Jane Austen", "J.K. Rowling", "Thomas Hardy"],
      correct_answer: "Charles Dickens",
      explanation: "Charles Dickens was a famous Victorian novelist.",
      translations: { bn: { question: "'গ্রেট এক্সপেক্টেশনস' কে লিখেছেন?", options: ["চার্লস ডিকেন্স", "জেন অস্টেন", "জে.কে. রাউলিং", "থমাস হার্ডি"] } }
    }
    // ... Add more unique questions here for Exam 13
  ]
};