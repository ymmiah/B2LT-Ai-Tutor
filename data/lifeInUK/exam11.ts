import { MockQuestion } from "../../types";

export const exam11: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "Which battle ended the Wars of the Roses?",
      options: ["Battle of Hastings", "Battle of Bosworth Field", "Battle of Trafalgar", "Battle of Waterloo"],
      correct_answer: "Battle of Bosworth Field",
      explanation: "Henry Tudor defeated Richard III at Bosworth Field in 1485.",
      translations: { bn: { question: "কোন যুদ্ধ গোলাপের যুদ্ধের অবসান ঘটিয়েছে?", options: ["হেস্টিংসের যুদ্ধ", "বসওয়ার্থ ফিল্ডের যুদ্ধ", "ট্রাফালগারের যুদ্ধ", "ওয়াটারলুর যুদ্ধ"] } }
    },
    {
      question: "Who was the first King of England to be executed?",
      options: ["Charles I", "James II", "Henry VIII", "Richard III"],
      correct_answer: "Charles I",
      explanation: "Charles I was executed in 1649.",
      translations: { bn: { question: "ইংল্যান্ডের প্রথম কোন রাজাকে মৃত্যুদণ্ড দেওয়া হয়েছিল?", options: ["প্রথম চার্লস", "দ্বিতীয় জেমস", "অষ্টম হেনরি", "তৃতীয় রিচার্ড"] } }
    },
    // Additional questions to prevent random generation
    {
       question: "What is the capital of the UK?",
       options: ["London", "Birmingham", "Manchester", "Edinburgh"],
       correct_answer: "London",
       explanation: "London is the capital city of the United Kingdom.",
       translations: { bn: { question: "যুক্তরাজ্যের রাজধানী কি?", options: ["লন্ডন", "বার্মিংহাম", "ম্যানচেস্টার", "এডিনবার্গ"] } }
    },
    {
       question: "Which party forms the government?",
       options: ["The party with the most MPs", "The party with the fewest MPs", "The party chosen by the Queen", "The party chosen by the Lords"],
       correct_answer: "The party with the most MPs",
       explanation: "Usually, the party with the majority of seats in the Commons forms the government.",
       translations: { bn: { question: "কোন দল সরকার গঠন করে?", options: ["সবচেয়ে বেশি এমপি থাকা দল", "সবচেয়ে কম এমপি থাকা দল", "রানী দ্বারা নির্বাচিত দল", "লর্ডস দ্বারা নির্বাচিত দল"] } }
    },
     {
      question: "Who is the patron saint of Northern Ireland?",
      options: ["St Patrick", "St George", "St Andrew", "St David"],
      correct_answer: "St Patrick",
      explanation: "St Patrick is the patron saint.",
      translations: { bn: { question: "উত্তর আয়ারল্যান্ডের পৃষ্ঠপোষক সন্ত কে?", options: ["সেন্ট প্যাট্রিক", "সেন্ট জর্জ", "সেন্ট অ্যান্ড্রু", "সেন্ট ডেভিড"] } }
    },
    {
      question: "What is the significance of 1215?",
      options: ["Magna Carta signed", "Battle of Hastings", "Black Death", "Great Fire"],
      correct_answer: "Magna Carta signed",
      explanation: "The Magna Carta was signed in 1215.",
      translations: { bn: { question: "১২১৫ সালের তাৎপর্য কি?", options: ["ম্যাগনা কার্টা স্বাক্ষর", "হেস্টিংসের যুদ্ধ", "ব্ল্যাক ডেথ", "মহাঅগ্নিকাণ্ড"] } }
    }
    // ... Add more unique questions here for Exam 11
  ]
};