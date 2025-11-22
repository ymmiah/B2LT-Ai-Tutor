
import { MockQuestion } from "../../types";

export const exam14: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "Which of these religions is the largest in the UK?",
      options: ["Christianity", "Islam", "Hinduism", "Sikhism"],
      correct_answer: "Christianity",
      explanation: "The majority of the population identify as Christian.",
      translations: { bn: { question: "এর মধ্যে কোন ধর্মটি যুক্তরাজ্যে বৃহত্তম?", options: ["খ্রিস্টধর্ম", "ইসলাম", "হিন্দুধর্ম", "শিখধর্ম"] } }
    },
    {
      question: "What is the Church of Scotland called?",
      options: ["The Kirk", "The Chapel", "The Cathedral", "The Abbey"],
      correct_answer: "The Kirk",
      explanation: "It is a Presbyterian church.",
      translations: { bn: { question: "চার্চ অফ স্কটল্যান্ডকে কি বলা হয়?", options: ["দ্য কার্ক", "দ্য চ্যাপেল", "দ্য ক্যাথেড্রাল", "দ্য অ্যাবে"] } }
    },
    {
      question: "When is St Patrick's Day?",
      options: ["17th March", "1st March", "23rd April", "30th November"],
      correct_answer: "17th March",
      explanation: "Celebrated in Northern Ireland and Ireland.",
      translations: { bn: { question: "সেন্ট প্যাট্রিক দিবস কবে?", options: ["১৭ই মার্চ", "১লা মার্চ", "২৩শে এপ্রিল", "৩০শে নভেম্বর"] } }
    },
    {
      question: "What do children typically do on Halloween?",
      options: ["Trick or Treating", "Sing carols", "Exchange eggs", "Open presents"],
      correct_answer: "Trick or Treating",
      explanation: "They dress up and visit houses.",
      translations: { bn: { question: "হ্যালোউইনে শিশুরা সাধারণত কি করে?", options: ["কৌশল বা আচরণ", "ক্যারল গাওয়া", "ডিম বিনিময়", "উপহার খোলা"] } }
    },
    {
      question: "What happens on Valentine's Day?",
      options: ["Lovers exchange cards and gifts", "People eat pancakes", "People light bonfires", "Banks close"],
      correct_answer: "Lovers exchange cards and gifts",
      explanation: "Celebrated on 14th February.",
      translations: { bn: { question: "ভ্যালেন্টাইন্স ডে তে কি হয়?", options: ["প্রেমিকরা কার্ড এবং উপহার বিনিময় করে", "মানুষ প্যানকেক খায়", "মানুষ আগুন জ্বালায়", "ব্যাংক বন্ধ থাকে"] } }
    },
    {
      question: "When is Mothering Sunday?",
      options: ["Three weeks before Easter", "In May", "In August", "Christmas Day"],
      correct_answer: "Three weeks before Easter",
      explanation: "Children give cards to their mothers.",
      translations: { bn: { question: "মাদারিং সানডে কখন?", options: ["ইস্টারের তিন সপ্তাহ আগে", "মে মাসে", "আগস্ট মাসে", "ক্রিসমাসের দিন"] } }
    },
    {
      question: "What is 'The Poppy Appeal' associated with?",
      options: ["Remembrance Day", "Easter", "Christmas", "Summer"],
      correct_answer: "Remembrance Day",
      explanation: "People wear poppies to remember war dead.",
      translations: { bn: { question: "'পপি আপিল' কিসের সাথে জড়িত?", options: ["স্মরণ দিবস", "ইস্টার", "ক্রিসমাস", "গ্রীষ্ম"] } }
    },
    {
      question: "Which festival is known as the festival of lights?",
      options: ["Diwali", "Eid", "Vaisakhi", "Hanukkah"],
      correct_answer: "Diwali",
      explanation: "Celebrated by Hindus and Sikhs.",
      translations: { bn: { question: "কোন উৎসব আলোর উৎসব হিসেবে পরিচিত?", options: ["দিওয়ালি", "ঈদ", "বৈশাখী", "হনুukkah"] } }
    },
    {
      question: "What is Vaisakhi?",
      options: ["A Sikh festival", "A Christian festival", "A Muslim festival", "A Jewish festival"],
      correct_answer: "A Sikh festival",
      explanation: "Celebrates the founding of the Khalsa.",
      translations: { bn: { question: "বৈশাখী কি?", options: ["একটি শিখ উৎসব", "একটি খ্রিস্টান উৎসব", "একটি মুসলিম উৎসব", "একটি ইহুদি উৎসব"] } }
    },
    {
      question: "What is a Bank Holiday?",
      options: ["A public holiday", "A day banks are open late", "A strike", "A new year"],
      correct_answer: "A public holiday",
      explanation: "There are usually 8 bank holidays a year.",
      translations: { bn: { question: "ব্যাংক হলিডে কি?", options: ["একটি সরকারি ছুটি", "যেদিন ব্যাংক দেরিতে খোলা থাকে", "একটি ধর্মঘট", "একটি নতুন বছর"] } }
    },
    {
      question: "What is the legal age to place a bet?",
      options: ["18", "16", "21", "25"],
      correct_answer: "18",
      explanation: "Gambling is restricted to adults.",
      translations: { bn: { question: "বাজি ধরার আইনি বয়স কত?", options: ["১৮", "১৬", "২১", "২৫"] } }
    },
    {
      question: "What do you need to own a dog?",
      options: ["It must be microchipped", "A licence", "A permit", "Permission from the Queen"],
      correct_answer: "It must be microchipped",
      explanation: "The collar must also show the owner's details.",
      translations: { bn: { question: "কুকুরের মালিক হতে আপনার কি প্রয়োজন?", options: ["এটি মাইক্রোচিপ করা আবশ্যক", "একটি লাইসেন্স", "একটি পারমিট", "রাণীর অনুমতি"] } }
    },
    {
      question: "What is needed to watch TV in the UK?",
      options: ["A TV Licence", "A passport", "A driving licence", "A permit"],
      correct_answer: "A TV Licence",
      explanation: "Required for watching live TV or BBC iPlayer.",
      translations: { bn: { question: "যুক্তরাজ্যে টিভি দেখতে কি প্রয়োজন?", options: ["একটি টিভি লাইসেন্স", "একটি পাসপোর্ট", "একটি ড্রাইভিং লাইসেন্স", "একটি পারমিট"] } }
    },
    {
      question: "Who funds the BBC?",
      options: ["TV Licence fee payers", "Advertisers", "The Government directly", "Charity"],
      correct_answer: "TV Licence fee payers",
      explanation: "It allows the BBC to be independent.",
      translations: { bn: { question: "বিবিসিকে কে অর্থায়ন করে?", options: ["টিভি লাইসেন্স ফি প্রদানকারীরা", "বিজ্ঞাপনদাতারা", "সরাসরি সরকার", "দাতব্য"] } }
    },
    {
      question: "Which is a dialect spoken in Liverpool?",
      options: ["Scouse", "Geordie", "Cockney", "Brummie"],
      correct_answer: "Scouse",
      explanation: "People from Liverpool are often called Scousers.",
      translations: { bn: { question: "লিভারপুলে কোন উপভাষা বলা হয়?", options: ["স্কাউস", "জর্ডি", "ককনি", "ব্রুমি"] } }
    },
    {
      question: "What is 'Geordie'?",
      options: ["A dialect from Newcastle", "A type of food", "A dance", "A boat"],
      correct_answer: "A dialect from Newcastle",
      explanation: "Spoken in Tyneside.",
      translations: { bn: { question: "'জর্ডি' কি?", options: ["নিউক্যাসেল থেকে একটি উপভাষা", "এক ধরণের খাবার", "একটি নাচ", "একটি নৌকা"] } }
    },
    {
      question: "Which language is spoken in parts of Scotland?",
      options: ["Gaelic", "Welsh", "Cornish", "Manx"],
      correct_answer: "Gaelic",
      explanation: "Scottish Gaelic is spoken in the Highlands and Islands.",
      translations: { bn: { question: "স্কটল্যান্ডের কিছু অংশে কোন ভাষা বলা হয়?", options: ["গেলিক", "ওয়েলশ", "কর্নিশ", "ম্যাঙ্কস"] } }
    },
    {
      question: "What is the traditional Christmas dinner?",
      options: ["Roast turkey", "Fish and chips", "Curry", "Pizza"],
      correct_answer: "Roast turkey",
      explanation: "Served with vegetables and pudding.",
      translations: { bn: { question: "ঐতিহ্যবাহী ক্রিসমাস ডিনার কি?", options: ["রোস্ট টার্কি", "ফিশ অ্যান্ড চিপস", "তরকারি", "পিৎজা"] } }
    },
    {
      question: "What is 'Lent'?",
      options: ["The 40 days before Easter", "The day after Christmas", "New Year's Eve", "Summer holiday"],
      correct_answer: "The 40 days before Easter",
      explanation: "A time when Christians traditionally fast.",
      translations: { bn: { question: "'লেন্ট' কি?", options: ["ইস্টারের ৪০ দিন আগে", "ক্রিসমাসের পরের দিন", "নববর্ষের প্রাকক্লা", "গ্রীষ্মের ছুটি"] } }
    },
    {
      question: "What happens on April Fool's Day?",
      options: ["People play jokes until midday", "People give presents", "People fast", "Banks close"],
      correct_answer: "People play jokes until midday",
      explanation: "It is on 1st April.",
      translations: { bn: { question: "এপ্রিল ফুল ডে তে কি হয়?", options: ["মানুষ দুপুর পর্যন্ত কৌতুক করে", "মানুষ উপহার দেয়", "মানুষ উপবাস করে", "ব্যাংক বন্ধ থাকে"] } }
    },
    {
      question: "When is Father's Day?",
      options: ["Third Sunday in June", "First Sunday in May", "Last Sunday in August", "December 25th"],
      correct_answer: "Third Sunday in June",
      explanation: "Children honour their fathers.",
      translations: { bn: { question: "বাবা দিবস কবে?", options: ["জুনের তৃতীয় রবিবার", "মে মাসের প্রথম রবিবার", "আগস্টের শেষ রবিবার", "২৫শে ডিসেম্বর"] } }
    },
    {
      question: "What is the 5th of November?",
      options: ["Bonfire Night", "Halloween", "Christmas", "Easter"],
      correct_answer: "Bonfire Night",
      explanation: "Fireworks commemorate the Gunpowder Plot.",
      translations: { bn: { question: "৫ই নভেম্বর কি?", options: ["বনফায়ার নাইট", "হ্যালোউইন", "ক্রিসমাস", "ইস্টার"] } }
    },
    {
      question: "Which saint's day is 30th November?",
      options: ["St Andrew", "St David", "St George", "St Patrick"],
      correct_answer: "St Andrew",
      explanation: "Patron saint of Scotland.",
      translations: { bn: { question: "৩০শে নভেম্বর কোন সন্তের দিন?", options: ["সেন্ট অ্যান্ড্রু", "সেন্ট ডেভিড", "সেন্ট জর্জ", "সেন্ট প্যাট্রিক"] } }
    },
    {
      question: "Is Wales represented on the Union Flag?",
      options: ["No", "Yes", "Only the dragon", "Only in red"],
      correct_answer: "No",
      explanation: "Wales was already united with England when the flag was formed.",
      translations: { bn: { question: "ওয়েলস কি ইউনিয়ন ফ্ল্যাগে প্রতিনিধিত্ব করা হয়?", options: ["না", "হ্যাঁ", "শুধুমাত্র ড্রাগন", "শুধুমাত্র লাল রঙে"] } }
    }
  ]
};
