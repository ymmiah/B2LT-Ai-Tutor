import { MockQuestion } from "../../types";

export const exam4: { questions: MockQuestion[] } = {
  questions: [
        {"question": "What flower is associated with Scotland?", "options": ["Rose", "Thistle", "Daffodil", "Shamrock"], "correct_answer": "Thistle", "explanation": "The thistle is the national flower of Scotland.", "translations": {"bn": {"question": "কোন ফুল স্কটল্যান্ডের সাথে জড়িত?", "options": ["গোলাপ", "থিসল", "ড্যাফোডিল", "শ্যামরক"]}}},
        {"question": "Who is the Head of State in the UK?", "options": ["The Prime Minister", "The Speaker of the House", "The Monarch", "The Archbishop of Canterbury"], "correct_answer": "The Monarch", "explanation": "The monarch (currently King Charles III) is the UK's Head of State.", "translations": {"bn": {"question": "যুক্তরাজ্যের রাষ্ট্রপ্রধান কে?", "options": ["প্রধানমন্ত্রী", "হাউসের স্পিকার", "রাজা", "ক্যান্টারবারির আর্চবিশপ"]}}},
        // ... (Add remaining questions from original Exam 4)
  ]
};