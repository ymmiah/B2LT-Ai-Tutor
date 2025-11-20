import { MockQuestion } from "../../types";

export const exam6: { questions: MockQuestion[] } = {
  questions: [
        {"question": "How often is the census taken in the UK?", "options": ["Every year", "Every 5 years", "Every 10 years", "Every 20 years"], "correct_answer": "Every 10 years", "explanation": "A census is a count of all people and households. It is taken every 10 years in the UK.", "translations": {"bn": {"question": "যুক্তরাজ্যে আদমশুমারি কত বছর পর পর করা হয়?", "options": ["প্রতি বছর", "প্রতি ৫ বছর", "প্রতি ১০ বছর", "প্রতি ২০ বছর"]}}},
        {"question": "What is the symbol of Northern Ireland?", "options": ["Daffodil", "Thistle", "Rose", "Shamrock"], "correct_answer": "Shamrock", "explanation": "The shamrock, a type of clover, is a traditional symbol of Ireland and Northern Ireland.", "translations": {"bn": {"question": "উত্তর আয়ারল্যান্ডের প্রতীক কী?", "options": ["ড্যাফোডিল", "থিসল", "গোলাপ", "শ্যামরক"]}}},
        // ... (Add remaining questions from original Exam 6)
  ]
};