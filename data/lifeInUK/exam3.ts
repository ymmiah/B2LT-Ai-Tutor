import { MockQuestion } from "../../types";

export const exam3: { questions: MockQuestion[] } = {
  questions: [
        {"question": "What is the capital city of Northern Ireland?", "options": ["Dublin", "Cork", "Belfast", "Derry"], "correct_answer": "Belfast", "explanation": "Belfast is the capital and largest city of Northern Ireland.", "translations": {"bn": {"question": "উত্তর আয়ারল্যান্ডের রাজধানী শহর কোনটি?", "options": ["ডাবলিন", "কর্ক", "বেলফাস্ট", "ডেরি"]}}},
        {"question": "Which of these is a valid form of identification in the UK?", "options": ["Student ID card", "Library card", "Passport", "Gym membership card"], "correct_answer": "Passport", "explanation": "A passport is a government-issued document that is a valid form of identification.", "translations": {"bn": {"question": "যুক্তরাজ্যে নিচের কোনটি একটি বৈধ পরিচয়পত্র?", "options": ["ছাত্র আইডি কার্ড", "লাইব্রেরি কার্ড", "পাসপোর্ট", "জিম সদস্যপদ কার্ড"]}}},
        // ... (Add remaining questions from original Exam 3)
  ]
};