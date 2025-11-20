import { MockQuestion } from "../../types";

export const exam14: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "Who is the head of state?",
      options: ["The Monarch", "The Prime Minister", "The President", "The Speaker"],
      correct_answer: "The Monarch",
      explanation: "The King or Queen is the Head of State.",
      translations: { bn: { question: "রাষ্ট্রপ্রধান কে?", options: ["রাজা", "প্রধানমন্ত্রী", "রাষ্ট্রপতি", "স্পিকার"] } }
    },
    {
      question: "What is 'The Commonwealth'?",
      options: ["An association of nations", "A bank", "A charity", "A political party"],
      correct_answer: "An association of nations",
      explanation: "A voluntary association of 56 countries.",
      translations: { bn: { question: "'কমনওয়েলথ' কি?", options: ["জাতিসমূহের একটি সমিতি", "একটি ব্যাংক", "একটি দাতব্য সংস্থা", "একটি রাজনৈতিক দল"] } }
    },
    {
      question: "When is Christmas Day?",
      options: ["25th December", "24th December", "1st January", "31st October"],
      correct_answer: "25th December",
      explanation: "Christmas Day is celebrated on the 25th of December.",
      translations: { bn: { question: "ক্রিসমাস ডে কবে?", options: ["২৫শে ডিসেম্বর", "২৪শে ডিসেম্বর", "১লা জানুয়ারি", "৩১শে অক্টোবর"] } }
    },
    {
      question: "What is the national flower of Scotland?",
      options: ["Thistle", "Rose", "Daffodil", "Shamrock"],
      correct_answer: "Thistle",
      explanation: "The thistle is the national flower of Scotland.",
      translations: { bn: { question: "স্কটল্যান্ডের জাতীয় ফুল কি?", options: ["থিসল", "গোলাপ", "ড্যাফোডিল", "শ্যামরক"] } }
    }
    // ... Add more unique questions here for Exam 14
  ]
};