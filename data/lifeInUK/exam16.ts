import { MockQuestion } from "../../types";

export const exam16: { questions: MockQuestion[] } = {
  questions: [
     {
      question: "Who is the patron saint of Wales?",
      options: ["St David", "St George", "St Patrick", "St Andrew"],
      correct_answer: "St David",
      explanation: "St David is the patron saint of Wales.",
      translations: { bn: { question: "ওয়েলসের পৃষ্ঠপোষক সন্ত কে?", options: ["সেন্ট ডেভিড", "সেন্ট জর্জ", "সেন্ট প্যাট্রিক", "সেন্ট অ্যান্ড্রু"] } }
    },
    {
      question: "Where is the UK Parliament?",
      options: ["Westminster", "Buckingham Palace", "Tower Bridge", "Hyde Park"],
      correct_answer: "Westminster",
      explanation: "It meets at the Palace of Westminster.",
      translations: { bn: { question: "যুক্তরাজ্যের সংসদ কোথায়?", options: ["ওয়েস্টমিনস্টার", "বাকিংহাম প্যালেস", "টাওয়ার ব্রিজ", "হাইড পার্ক"] } }
    }
    // ... Add more unique questions here for Exam 16
  ]
};