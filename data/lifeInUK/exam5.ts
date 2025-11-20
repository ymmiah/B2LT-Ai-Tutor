import { MockQuestion } from "../../types";

export const exam5: { questions: MockQuestion[] } = {
  questions: [
        {"question": "What is the patron saint of Wales?", "options": ["St. George", "St. Andrew", "St. Patrick", "St. David"], "correct_answer": "St. David", "explanation": "Saint David is the patron saint of Wales. His feast day is on 1st March.", "translations": {"bn": {"question": "ওয়েলসের পৃষ্ঠপোষক সন্ত কে?", "options": ["সেন্ট জর্জ", "সেন্ট অ্যান্ড্রু", "সেন্ট প্যাট্রিক", "সেন্ট ডেভিড"]}}},
        {"question": "The UK government is a...", "options": ["Dictatorship", "Parliamentary democracy", "Absolute monarchy", "Republic"], "correct_answer": "Parliamentary democracy", "explanation": "The United Kingdom is a parliamentary democracy under a constitutional monarchy.", "translations": {"bn": {"question": "যুক্তরাজ্য সরকার একটি...", "options": ["একনায়কতন্ত্র", "সংসদীয় গণতন্ত্র", "পরম রাজতন্ত্র", "প্রজাতন্ত্র"]}}},
        // ... (Add remaining questions from original Exam 5)
  ]
};