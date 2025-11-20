import { MockQuestion } from "../../types";

export const exam2: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "Which of the following is NOT a part of the United Kingdom?",
      options: ["Wales", "The Republic of Ireland", "Northern Ireland", "Scotland"],
      correct_answer: "The Republic of Ireland",
      explanation: "The Republic of Ireland is an independent country.",
      translations: {
        bn: {
          question: "নিচের কোনটি যুক্তরাজ্যের অংশ নয়?",
          options: ["ওয়েলস", "আয়ারল্যান্ড প্রজাতন্ত্র", "উত্তর আয়ারল্যান্ড", "স্কটল্যান্ড"]
        }
      }
    },
    {
      question: "What is the 'Crown Jewels'?",
      options: ["A famous painting", "The regalia and vestments worn by the monarch", "A brand of tea", "A national park"],
      correct_answer: "The regalia and vestments worn by the monarch",
      explanation: "The Crown Jewels are ceremonial objects kept in the Tower of London.",
      translations: {
        bn: {
          question: "'ক্রাউন জুয়েলস' কি?",
          options: ["একটি বিখ্যাত চিত্রকর্ম", "রাজকীয় পোশাক এবং রাজার পরিধেয় বস্ত্র", "একটি চায়ের ব্র্যান্ড", "একটি জাতীয় উদ্যান"]
        }
      }
    },
    // ... (Include all 24 questions for exam 2 here, similar to exam 1 format. For brevity in this specific turn, I will populate with the content from the original file but structured correctly)
    {
      question: "Who is the patron saint of Scotland?",
      options: ["St George", "St David", "St Andrew", "St Patrick"],
      correct_answer: "St Andrew",
      explanation: "St Andrew is the patron saint of Scotland.",
      translations: { bn: { question: "স্কটল্যান্ডের পৃষ্ঠপোষক সন্ত কে?", options: ["সেন্ট জর্জ", "সেন্ট ডেভিড", "সেন্ট অ্যান্ড্রু", "সেন্ট প্যাট্রিক"] } }
    },
    {
       question: "What is the upper house of the UK Parliament called?",
       options: ["The House of Commons", "The House of Lords", "The Senate", "The National Assembly"],
       correct_answer: "The House of Lords",
       explanation: "The House of Lords is the upper chamber.",
       translations: { bn: { question: "যুক্তরাজ্যের সংসদের উচ্চকক্ষের নাম কি?", options: ["হাউস অফ কমন্স", "হাউস অফ লর্ডস", "সিনেট", "জাতীয় পরিষদ"] } }
    },
    {
        question: "Which flower is a symbol of England?",
        options: ["Daffodil", "Shamrock", "Thistle", "Rose"],
        correct_answer: "Rose",
        explanation: "The Tudor Rose is the symbol of England.",
        translations: { bn: { question: "কোন ফুল ইংল্যান্ডের প্রতীক?", options: ["ড্যাফোডিল", "শ্যামরক", "থিসল", "গোলাপ"] } }
    },
    {
        question: "To become a permanent resident, you usually must:",
        options: ["Pass the Life in the UK Test", "Own a property", "Join the army", "Be married"],
        correct_answer: "Pass the Life in the UK Test",
        explanation: "Passing the test is a requirement for settlement.",
        translations: { bn: { question: "স্থায়ী বাসিন্দা হতে, আপনাকে সাধারণত যা করতে হয়:", options: ["লাইফ ইন দ্য ইউকে পরীক্ষায় পাস করা", "একটি সম্পত্তির মালিক হওয়া", "সেনাবাহিনীতে যোগদান", "বিবাহিত হওয়া"] } }
    },
    {
        question: "What is the Prime Minister's official residence?",
        options: ["Buckingham Palace", "Windsor Castle", "10 Downing Street", "Parliament"],
        correct_answer: "10 Downing Street",
        explanation: "10 Downing Street is the PM's home and office.",
        translations: { bn: { question: "প্রধানমন্ত্রীর সরকারী বাসভবন কোনটি?", options: ["বাকিংহাম প্যালেস", "উইন্ডসর ক্যাসেল", "১০ ডাউনিং স্ট্রিট", "পার্লামেন্ট"] } }
    },
    {
        question: "Which of these is a famous British author?",
        options: ["Leo Tolstoy", "Mark Twain", "Charles Dickens", "Victor Hugo"],
        correct_answer: "Charles Dickens",
        explanation: "Charles Dickens wrote Oliver Twist and Great Expectations.",
        translations: { bn: { question: "এর মধ্যে কে একজন বিখ্যাত ব্রিটিশ লেখক?", options: ["লিও টলস্টয়", "মার্ক টোয়েন", "চার্লস ডিকেন্স", "ভিক্টর হুগো"] } }
    },
    {
        question: "What is 'Bonfire Night' celebrated for?",
        options: ["The end of winter", "The failure of the Gunpowder Plot", "The Queen's birthday", "A harvest festival"],
        correct_answer: "The failure of the Gunpowder Plot",
        explanation: "It marks the failed plot by Guy Fawkes to blow up Parliament in 1605.",
        translations: { bn: { question: "'বনফায়ার নাইট' কিসের জন্য উদযাপন করা হয়?", options: ["শীতের শেষ", "গানপাউডার প্লটের ব্যর্থতা", "রাণীর জন্মদিন", "একটি ফসল উৎসব"] } }
    },
    {
        question: "Who was the first female Prime Minister?",
        options: ["Theresa May", "Margaret Thatcher", "Queen Elizabeth I", "Harriet Harman"],
        correct_answer: "Margaret Thatcher",
        explanation: "Margaret Thatcher became PM in 1979.",
        translations: { bn: { question: "প্রথম মহিলা প্রধানমন্ত্রী কে ছিলেন?", options: ["থেরেসো মে", "মার্গারেট থ্যাচার", "রানী প্রথম এলিজাবেথ", "হ্যারিয়েট হারমান"] } }
    },
    {
        question: "What is the highest mountain in the UK?",
        options: ["Snowdon", "Scafell Pike", "Ben Nevis", "Slieve Donard"],
        correct_answer: "Ben Nevis",
        explanation: "Ben Nevis in Scotland is the highest peak.",
        translations: { bn: { question: "যুক্তরাজ্যের সর্বোচ্চ পর্বত কোনটি?", options: ["স্নোডন", "স্কাফেল পাইক", "বেন নেভিস", "স্লিভ ডোনার্ড"] } }
    },
    {
        question: "What is a 'constituency'?",
        options: ["A local council", "A geographical area represented by an MP", "A political party", "A department"],
        correct_answer: "A geographical area represented by an MP",
        explanation: "The UK is divided into constituencies, each electing one MP.",
        translations: { bn: { question: "'নির্বাচনী এলাকা' কি?", options: ["একটি স্থানীয় কাউন্সিল", "একজন এমপির প্রতিনিধিত্ব করা একটি ভৌগলিক এলাকা", "একটি রাজনৈতিক দল", "একটি বিভাগ"] } }
    },
    {
        question: "Which is a famous British film franchise?",
        options: ["Star Wars", "Lord of the Rings", "James Bond", "Godfather"],
        correct_answer: "James Bond",
        explanation: "James Bond (007) is a British spy series.",
        translations: { bn: { question: "কোনটি একটি বিখ্যাত ব্রিটিশ চলচ্চিত্র ফ্র্যাঞ্চাইজি?", options: ["স্টার ওয়ার্স", "লর্ড অফ দ্য রিংস", "জেমস বন্ড", "গডফাদার"] } }
    },
    {
        question: "What is the capital of Wales?",
        options: ["Swansea", "Newport", "Cardiff", "Wrexham"],
        correct_answer: "Cardiff",
        explanation: "Cardiff is the Welsh capital.",
        translations: { bn: { question: "ওয়েলসের রাজধানী কোনটি?", options: ["সোয়ানসি", "নিউপোর্ট", "কার্ডিফ", "রেক্সহ্যাম"] } }
    },
    {
        question: "What is the role of the Speaker?",
        options: ["Lead the government", "Lead the opposition", "Remain impartial and control debates", "Represent the monarch"],
        correct_answer: "Remain impartial and control debates",
        explanation: "The Speaker chairs the House of Commons debates.",
        translations: { bn: { question: "স্পিকারের ভূমিকা কি?", options: ["সরকারকে নেতৃত্ব দেওয়া", "বিরোধীদের নেতৃত্ব দেওয়া", "নিরপেক্ষ থাকা এবং বিতর্ক নিয়ন্ত্রণ করা", "রাজার প্রতিনিধিত্ব করা"] } }
    },
    {
        question: "Legal age to buy alcohol in the UK?",
        options: ["16", "18", "21", "No limit"],
        correct_answer: "18",
        explanation: "You must be 18 to buy alcohol.",
        translations: { bn: { question: "যুক্তরাজ্যে অ্যালকোহল কেনার আইনি বয়স কত?", options: ["১৬", "১৮", "২১", "কোনো সীমা নেই"] } }
    },
    {
        question: "Which document limited the monarch's power in 1215?",
        options: ["Bill of Rights", "Magna Carta", "Act of Union", "Declaration of Independence"],
        correct_answer: "The Magna Carta",
        explanation: "King John signed the Magna Carta in 1215.",
        translations: { bn: { question: "১২১৫ সালে কোন দলিল রাজার ক্ষমতা সীমিত করেছিল?", options: ["বিল অফ রাইটস", "ম্যাগনা কার্টা", "অ্যাক্ট অফ ইউনিয়ন", "স্বাধীনতার ঘোষণা"] } }
    },
    {
        question: "What does 'NHS' stand for?",
        options: ["National Health Service", "National Housing Service", "New Health System", "National Help Scheme"],
        correct_answer: "National Health Service",
        explanation: "The NHS provides healthcare in the UK.",
        translations: { bn: { question: "'NHS' এর পূর্ণরূপ কি?", options: ["ন্যাশনাল হেলথ সার্ভিস", "ন্যাশনাল হাউজিং সার্ভিস", "নিউ হেলথ সিস্টেম", "ন্যাশনাল হেল্প স্কিম"] } }
    },
    {
        question: "Which is a core value of the UK?",
        options: ["The rule of law", "Arranged marriage", "Class distinction", "State ownership"],
        correct_answer: "The rule of law",
        explanation: "The rule of law means everyone is subject to the law.",
        translations: { bn: { question: "যুক্তরাজ্যের একটি মূল নীতি কোনটি?", options: ["আইনের শাসন", "পারিবারিকভাবে আয়োজিত বিবাহ", "শ্রেণী বিভেদ", "রাষ্ট্রীয় মালিকানা"] } }
    },
    {
        question: "What is 'Boxing Day'?",
        options: ["Day before Christmas", "Sporting event", "The day after Christmas", "First day of the year"],
        correct_answer: "The day after Christmas",
        explanation: "Boxing Day is a public holiday on 26th December.",
        translations: { bn: { question: "'বক্সিং ডে' কি?", options: ["ক্রিসমাসের আগের দিন", "ক্রীড়া অনুষ্ঠান", "ক্রিসমাসের পরের দিন", "বছরের প্রথম দিন"] } }
    },
    {
        question: "Which Roman emperor built a wall in the north?",
        options: ["Julius Caesar", "Augustus", "Hadrian", "Nero"],
        correct_answer: "Hadrian",
        explanation: "Hadrian's Wall was built to keep out Picts from the north.",
        translations: { bn: { question: "কোন রোমান সম্রাট উত্তরে একটি প্রাচীর নির্মাণ করেছিলেন?", options: ["জুলিয়াস সিজার", "অগাস্টাস", "হ্যাড্রিয়ান", "নিরো"] } }
    },
    {
        question: "What must cars over 3 years old pass annually?",
        options: ["Driving test", "MOT test", "Police check", "Customs check"],
        correct_answer: "An MOT test",
        explanation: "The MOT checks roadworthiness.",
        translations: { bn: { question: "৩ বছরের বেশি বয়সী গাড়িগুলোকে প্রতি বছর কী পাস করতে হবে?", options: ["ড্রাইভিং পরীক্ষা", "এমওটি পরীক্ষা", "পুলিশ চেক", "কাস্টমস চেক"] } }
    },
    {
        question: "Which is a famous British TV programme?",
        options: ["Friends", "Simpsons", "Doctor Who", "Breaking Bad"],
        correct_answer: "Doctor Who",
        explanation: "Doctor Who is a long-running BBC sci-fi show.",
        translations: { bn: { question: "কোনটি একটি বিখ্যাত ব্রিটিশ টিভি প্রোগ্রাম?", options: ["ফ্রেন্ডস", "সিম্পসনস", "ডক্টর হু", "ব্রেকিং ব্যাড"] } }
    },
    {
        question: "What event happens between Oxford and Cambridge on the Thames?",
        options: ["Swimming race", "Sailing regatta", "The Boat Race", "Rowing competition"],
        correct_answer: "The Boat Race",
        explanation: "The Boat Race is a rowing race between the two universities.",
        translations: { bn: { question: "টেমস নদীতে অক্সফোর্ড এবং কেমব্রিজের মধ্যে কোন অনুষ্ঠান হয়?", options: ["সাঁতার প্রতিযোগিতা", "নৌবিহার", "দ্য বোট রেস", "নৌকাবাইচ"] } }
    }
  ]
};