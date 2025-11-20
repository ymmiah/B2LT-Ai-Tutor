import { MockQuestion } from "../../types";

export const exam15: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "What currency is used in the UK?",
      options: ["Pound Sterling", "Euro", "Dollar", "Yen"],
      correct_answer: "Pound Sterling",
      explanation: "The currency is the Pound (£).",
      translations: { bn: { question: "যুক্তরাজ্যে কোন মুদ্রা ব্যবহার করা হয়?", options: ["পাউন্ড স্টার্লিং", "ইউরো", "ডলার", "ইয়েন"] } }
    },
    {
      question: "What is the London Eye?",
      options: ["A Ferris wheel", "A museum", "A bridge", "A tower"],
      correct_answer: "A Ferris wheel",
      explanation: "A giant observation wheel on the South Bank of the Thames.",
      translations: { bn: { question: "লন্ডন আই কি?", options: ["একটি ফেরিস হুইল", "একটি যাদুঘর", "একটি সেতু", "একটি টাওয়ার"] } }
    },
    {
      question: "Who was Winston Churchill?",
      options: ["A Prime Minister", "A King", "A scientist", "A poet"],
      correct_answer: "A Prime Minister",
      explanation: "He led the UK during WWII.",
      translations: { bn: { question: "উইনস্টন চার্চিল কে ছিলেন?", options: ["একজন প্রধানমন্ত্রী", "একজন রাজা", "একজন বিজ্ঞানী", "একজন কবি"] } }
    },
    {
      question: "What is the 'Grand National'?",
      options: ["A horse race", "A car race", "A boat race", "A dog show"],
      correct_answer: "A horse race",
      explanation: "A famous steeplechase held at Aintree.",
      translations: { bn: { question: "'গ্র্যান্ড ন্যাশনাল' কি?", options: ["একটি ঘোড়দৌড়", "একটি গাড়ি রেস", "একটি নৌকা বাইচ", "একটি কুকুর শো"] } }
    }
    // ... Add more unique questions here for Exam 15
  ]
};