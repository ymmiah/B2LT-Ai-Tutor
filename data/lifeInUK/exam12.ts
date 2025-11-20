import { MockQuestion } from "../../types";

export const exam12: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "Who was the 'Iron Duke'?",
      options: ["Duke of Wellington", "Duke of York", "Prince Philip", "Duke of Marlborough"],
      correct_answer: "Duke of Wellington",
      explanation: "The Duke of Wellington was known as the Iron Duke.",
      translations: { bn: { question: "'আয়রন ডিউক' কে ছিলেন?", options: ["ডিউক অফ ওয়েলিংটন", "ডিউক অফ ইয়র্ক", "প্রিন্স ফিলিপ", "ডিউক অফ মার্লবরো"] } }
    },
    {
      question: "What is the Cenotaph?",
      options: ["A war memorial", "A church", "A palace", "A museum"],
      correct_answer: "A war memorial",
      explanation: "It stands in Whitehall, London.",
      translations: { bn: { question: "সেনোটাফ কি?", options: ["একটি যুদ্ধ স্মৃতিস্তম্ভ", "একটি গির্জা", "একটি প্রাসাদ", "একটি যাদুঘর"] } }
    },
    {
      question: "What does 'Magistrate' do?",
      options: ["Judges minor cases", "Writes laws", "Arrests criminals", "Defends people"],
      correct_answer: "Judges minor cases",
      explanation: "Magistrates hear minor criminal cases in Magistrates' Courts.",
      translations: { bn: { question: "'ম্যাজিস্ট্রেট' কি করেন?", options: ["ছোট মামলার বিচার করেন", "আইন লেখেন", "অপরাধীদের গ্রেফতার করেন", "মানুষকে রক্ষা করেন"] } }
    },
    {
      question: "What is the Elizabethan era known for?",
      options: ["Shakespeare and exploration", "Industrial Revolution", "Computers", "Civil War"],
      correct_answer: "Shakespeare and exploration",
      explanation: "A golden age of English history.",
      translations: { bn: { question: "এলিজাবেথান যুগ কিসের জন্য পরিচিত?", options: ["শেক্সপিয়ার এবং অনুসন্ধান", "শিল্প বিপ্লব", "কম্পিউটার", "গৃহযুদ্ধ"] } }
    }
    // ... Add more unique questions here for Exam 12
  ]
};