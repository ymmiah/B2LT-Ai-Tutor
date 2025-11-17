import { MockQuestion } from "../types";

interface ExamData {
  questions: MockQuestion[];
}

export const b1MockExams: { [key: string]: ExamData } = {
  exam1: {
    "questions": [
      {
        "question": "I ______ to the cinema yesterday.",
        "options": ["went", "go", "gone", "am going"],
        "correct_answer": "went",
        "explanation": "For past events like 'yesterday', we use the simple past tense, which is 'went'.",
        "translations": { "bn": { "question": "আমি গতকাল সিনেমায় ______।", "options": ["গিয়েছিলাম", "যাই", "গিয়েছে", "যাচ্ছি"] } }
      },
      {
        "question": "What ______ you do last weekend?",
        "options": ["did", "do", "have", "were"],
        "correct_answer": "did",
        "explanation": "The question is about the past ('last weekend'), so we use the past simple auxiliary verb 'did'.",
        "translations": { "bn": { "question": "গত সপ্তাহান্তে আপনি কি ______?", "options": ["করেছিলেন", "করো", "আছে", "ছিলেন"] } }
      },
      {
        "question": "She ______ in London for three years.",
        "options": ["has lived", "is living", "lived", "lives"],
        "correct_answer": "has lived",
        "explanation": "The present perfect tense 'has lived' is used to describe an action that started in the past and continues to the present.",
        "translations": { "bn": { "question": "সে তিন বছর ধরে লন্ডনে ______।", "options": ["বাস করেছে", "বাস করছে", "বাস করেছিল", "বাস করে"] } }
      },
      {
        "question": "My keys are ______ the table.",
        "options": ["on", "in", "at", "under"],
        "correct_answer": "on",
        "explanation": "The preposition 'on' is used to indicate that something is physically on the surface of something else.",
        "translations": { "bn": { "question": "আমার চাবিগুলো টেবিলের ______।", "options": ["ওপরে", "ভেতরে", "দিকে", "নিচে"] } }
      },
      {
        "question": "You ______ smoke in the hospital. It's forbidden.",
        "options": ["must not", "can", "should", "may"],
        "correct_answer": "must not",
        "explanation": "'Must not' is used to express a strong prohibition or rule.",
        "translations": { "bn": { "question": "আপনি হাসপাতালে ধূমপান ______। এটা নিষিদ্ধ।", "options": ["করতে পারবেন না", "পারেন", "উচিত", "পারেন"] } }
      },
      {
        "question": "______ does your brother live?",
        "options": ["Where", "Who", "What", "When"],
        "correct_answer": "Where",
        "explanation": "'Where' is a question word used to ask about a place or location.",
        "translations": { "bn": { "question": "আপনার ভাই ______ বাস করে?", "options": ["কোথায়", "কে", "কি", "কখন"] } }
      },
      {
        "question": "This book is ______ interesting than the last one.",
        "options": ["more", "most", "much", "very"],
        "correct_answer": "more",
        "explanation": "'More' is used to form the comparative of longer adjectives like 'interesting'.",
        "translations": { "bn": { "question": "এই বইটি আগেরটির চেয়ে ______ আকর্ষণীয়।", "options": ["বেশি", "সবচেয়ে", "অনেক", "খুব"] } }
      },
      {
        "question": "If I ______ you, I would study harder.",
        "options": ["were", "am", "was", "be"],
        "correct_answer": "were",
        "explanation": "In the second conditional (hypothetical situations), 'if I were you' is the correct and standard phrase.",
        "translations": { "bn": { "question": "আমি যদি তুমি ______ , আমি আরও কঠিন পড়াশোনা করতাম।", "options": ["হতাম", "হই", "ছিলাম", "হও"] } }
      },
      {
        "question": "There isn't ______ milk left in the fridge.",
        "options": ["any", "some", "a", "no"],
        "correct_answer": "any",
        "explanation": "'Any' is typically used in negative sentences and questions with uncountable nouns like 'milk'.",
        "translations": { "bn": { "question": "ফ্রিজে ______ দুধ বাকি নেই।", "options": ["কোন", "কিছু", "একটি", "না"] } }
      },
      {
        "question": "He is very good ______ playing the guitar.",
        "options": ["at", "on", "in", "with"],
        "correct_answer": "at",
        "explanation": "The correct preposition to use after 'good' to talk about a skill is 'at'.",
        "translations": { "bn": { "question": "সে গিটার বাজানোতে খুব ভালো ______।", "options": ["তে", "ওপরে", "ভেতরে", "দিয়ে"] } }
      },
      {
        "question": "I'm looking forward ______ you soon.",
        "options": ["to seeing", "to see", "see", "seeing"],
        "correct_answer": "to seeing",
        "explanation": "The phrase 'look forward to' is followed by a gerund (-ing form of the verb).",
        "translations": { "bn": { "question": "আমি শীঘ্রই আপনার সাথে ______ অপেক্ষায় আছি।", "options": ["দেখা করার", "দেখতে", "দেখা", "দেখছি"] } }
      },
      {
        "question": "The train ______ at 10:30 am.",
        "options": ["leaves", "is leaving", "left", "leave"],
        "correct_answer": "leaves",
        "explanation": "For scheduled events like train timetables, the simple present tense is used.",
        "translations": { "bn": { "question": "ট্রেনটি সকাল ১০:৩০ টায় ______।", "options": ["ছাড়ে", "ছাড়ছে", "ছেড়েছিল", "ছাড়া"] } }
      },
      {
        "question": "How ______ bread do we need?",
        "options": ["much", "many", "a lot", "some"],
        "correct_answer": "much",
        "explanation": "'Much' is used with uncountable nouns like 'bread' to ask about quantity.",
        "translations": { "bn": { "question": "আমাদের কতটা ______ রুটি দরকার?", "options": ["পরিমাণ", "গুলো", "অনেক", "কিছু"] } }
      },
      {
        "question": "That's the man ______ son is a famous actor.",
        "options": ["whose", "who", "which", "whom"],
        "correct_answer": "whose",
        "explanation": "'Whose' is a possessive pronoun used to ask about ownership or relationship.",
        "translations": { "bn": { "question": "এই সেই লোক ______ ছেলে একজন বিখ্যাত অভিনেতা।", "options": ["যার", "যে", "যেটি", "যাকে"] } }
      },
      {
        "question": "She asked me ______ I was from.",
        "options": ["where", "that", "if", "what"],
        "correct_answer": "where",
        "explanation": "In reported speech, the question word 'where' is used to connect the two clauses.",
        "translations": { "bn": { "question": "সে আমাকে জিজ্ঞাসা করেছিল আমি ______ থেকে এসেছি।", "options": ["কোথা", "যে", "যদি", "কি"] } }
      },
      {
        "question": "You should ______ your homework before you watch TV.",
        "options": ["do", "make", "take", "give"],
        "correct_answer": "do",
        "explanation": "The correct collocation is 'do your homework'.",
        "translations": { "bn": { "question": "টিভি দেখার আগে তোমার বাড়ির কাজ ______ উচিত।", "options": ["করা", "তৈরি করা", "নেওয়া", "দেওয়া"] } }
      },
      {
        "question": "It's a small village ______ the south coast of England.",
        "options": ["on", "in", "at", "to"],
        "correct_answer": "on",
        "explanation": "'On' is used to talk about a location on a coast or a river.",
        "translations": { "bn": { "question": "এটি ইংল্যান্ডের দক্ষিণ উপকূলের ______ একটি ছোট গ্রাম।", "options": ["ওপরে", "ভেতরে", "দিকে", "প্রতি"] } }
      },
      {
        "question": "I haven't seen him ______ last year.",
        "options": ["since", "for", "from", "in"],
        "correct_answer": "since",
        "explanation": "'Since' is used with a specific point in time in the past (last year).",
        "translations": { "bn": { "question": "আমি তাকে গত বছর ______ দেখিনি।", "options": ["থেকে", "ধরে", "থেকে", "ভেতরে"] } }
      },
      {
        "question": "Please turn off the lights when you ______ the room.",
        "options": ["leave", "are leaving", "left", "will leave"],
        "correct_answer": "leave",
        "explanation": "In a clause starting with 'when' that refers to the future, we use the present simple tense.",
        "translations": { "bn": { "question": "আপনি ঘর থেকে ______ সময় দয়া করে লাইট বন্ধ করুন।", "options": ["বেরোনোর", "বেরোচ্ছেন", "বেরিয়েছিলেন", "বেরোবেন"] } }
      },
      {
        "question": "He drives very ______.",
        "options": ["carefully", "careful", "care", "caring"],
        "correct_answer": "carefully",
        "explanation": "An adverb ('carefully') is needed to describe how he drives (the verb).",
        "translations": { "bn": { "question": "সে খুব ______ গাড়ি চালায়।", "options": ["সাবধানে", "সতর্ক", "যত্ন", "যত্নশীল"] } }
      },
      {
        "question": "Can I have ______ water, please?",
        "options": ["some", "any", "a", "many"],
        "correct_answer": "some",
        "explanation": "'Some' is used in polite requests for an amount of an uncountable noun.",
        "translations": { "bn": { "question": "আমি কি ______ পানি পেতে পারি, দয়া করে?", "options": ["কিছু", "কোন", "একটি", "অনেক"] } }
      },
      {
        "question": "The meeting was ______ last week.",
        "options": ["cancelled", "cancelling", "cancel", "cancels"],
        "correct_answer": "cancelled",
        "explanation": "The passive voice is used here ('was cancelled') because the meeting is the object of the action.",
        "translations": { "bn": { "question": "সভাটি গত সপ্তাহে ______ হয়েছিল।", "options": ["বাতিল", "বাতিল করছে", "বাতিল করা", "বাতিল করে"] } }
      },
      {
        "question": "He's tired because he ______ all night.",
        "options": ["has been working", "worked", "is working", "works"],
        "correct_answer": "has been working",
        "explanation": "The present perfect continuous is used to talk about a past action that has a result in the present (he's tired).",
        "translations": { "bn": { "question": "সে ক্লান্ত কারণ সে সারারাত ______।", "options": ["কাজ করছে", "কাজ করেছিল", "কাজ করছে", "কাজ করে"] } }
      },
      {
        "question": "I need to buy a ______ of bread.",
        "options": ["loaf", "bottle", "jar", "carton"],
        "correct_answer": "loaf",
        "explanation": "'A loaf of bread' is the correct phrase to describe a whole unit of bread.",
        "translations": { "bn": { "question": "আমার এক ______ রুটি কিনতে হবে।", "options": ["পাউন্ড", "বোতল", "জার", "কার্টন"] } }
      }
    ]
  },
  exam2: {
    "questions": [
      {
        "question": "She has never ______ to Japan.",
        "options": ["been", "go", "went", "gone"],
        "correct_answer": "been",
        "explanation": "In the present perfect tense, 'have/has been to' means to have visited a place and returned.",
        "translations": { "bn": { "question": "সে কখনো জাপানে ______।", "options": ["যায়নি", "যাওয়া", "গিয়েছিল", "গিয়েছে"] } }
      },
      {
        "question": "A person who flies an airplane is called a ______.",
        "options": ["pilot", "doctor", "teacher", "driver"],
        "correct_answer": "pilot",
        "explanation": "A pilot is the person who operates the flying controls of an aircraft.",
        "translations": { "bn": { "question": "যে ব্যক্তি বিমান চালায় তাকে ______ বলা হয়।", "options": ["বৈমানিক", "ডাক্তার", "শিক্ষক", "চালক"] } }
      },
      {
        "question": "Please ______ the lights when you leave.",
        "options": ["turn off", "turn on", "look for", "get up"],
        "correct_answer": "turn off",
        "explanation": "The phrasal verb 'turn off' means to stop the operation of something by turning a switch or knob.",
        "translations": { "bn": { "question": "যাওয়ার সময় দয়া করে লাইট ______।", "options": ["বন্ধ করুন", "চালু করুন", "খোঁজ করুন", "ঘুম থেকে উঠুন"] } }
      },
      {
        "question": "If it rains tomorrow, I ______ stay at home.",
        "options": ["will", "would", "can", "must"],
        "correct_answer": "will",
        "explanation": "The first conditional is used for future possibilities. The structure is 'if + present simple, ... will + infinitive'.",
        "translations": { "bn": { "question": "যদি কাল বৃষ্টি হয়, আমি বাড়িতে ______।", "options": ["থাকব", "থাকতাম", "পারি", "অবশ্যই"] } }
      },
      {
        "question": "This car is ______ than my old one.",
        "options": ["more expensive", "expensive", "most expensive", "expensively"],
        "correct_answer": "more expensive",
        "explanation": "'More expensive' is the comparative form used to compare two things.",
        "translations": { "bn": { "question": "এই গাড়িটি আমার পুরানোটির চেয়ে ______।", "options": ["বেশি দামী", "দামী", "সবচেয়ে দামী", "দামের সাথে"] } }
      },
      {
        "question": "We arrived ______ the airport just in time.",
        "options": ["at", "in", "on", "to"],
        "correct_answer": "at",
        "explanation": "The preposition 'at' is used for a specific point or location like 'the airport'.",
        "translations": { "bn": { "question": "আমরা ঠিক সময়ে বিমানবন্দরে ______।", "options": ["পৌঁছেছিলাম", "ভেতরে", "উপরে", "দিকে"] } }
      },
      {
        "question": "Would you like ______ cup of tea?",
        "options": ["another", "other", "others", "the other"],
        "correct_answer": "another",
        "explanation": "'Another' means 'one more' and is used with singular countable nouns.",
        "translations": { "bn": { "question": "আপনি কি ______ কাপ চা খাবেন?", "options": ["আরেক", "অন্য", "অন্যরা", "অন্যটি"] } }
      },
      {
        "question": "I'm sorry, I don't understand. Could you speak more ______?",
        "options": ["slowly", "slow", "slower", "slowest"],
        "correct_answer": "slowly",
        "explanation": "The adverb 'slowly' is needed to describe the verb 'speak'.",
        "translations": { "bn": { "question": "দুঃখিত, আমি বুঝতে পারছি না। আপনি কি আরও ______ কথা বলতে পারেন?", "options": ["ধীরে", "ধীর", "আরও ধীর", "সবচেয়ে ধীর"] } }
      },
      {
        "question": "My father ______ as a doctor for 20 years.",
        "options": ["worked", "has worked", "is working", "works"],
        "correct_answer": "has worked",
        "explanation": "Present perfect 'has worked' is used for an action that started in the past and is still true now.",
        "translations": { "bn": { "question": "আমার বাবা ২০ বছর ধরে ডাক্তার হিসেবে ______।", "options": ["কাজ করেছিলেন", "কাজ করেছেন", "কাজ করছেন", "কাজ করেন"] } }
      },
      {
        "question": "This is the ______ film I have ever seen.",
        "options": ["best", "good", "better", "well"],
        "correct_answer": "best",
        "explanation": "The superlative form 'best' is used to say that something is of the highest quality.",
        "translations": { "bn": { "question": "এটা আমার দেখা ______ চলচ্চিত্র।", "options": ["সেরা", "ভালো", "আরও ভালো", " ভালোভাবে"] } }
      },
      {
        "question": "The children are playing ______ in the garden.",
        "options": ["happily", "happy", "happiness", "unhappy"],
        "correct_answer": "happily",
        "explanation": "The adverb 'happily' is required to describe how the children are playing.",
        "translations": { "bn": { "question": "বাচ্চারা বাগানে ______ খেলছে।", "options": ["আনন্দের সাথে", "সুখী", "আনন্দ", "অসুখী"] } }
      },
      {
        "question": "He was tired, ______ he went to bed early.",
        "options": ["so", "but", "because", "although"],
        "correct_answer": "so",
        "explanation": "'So' is a conjunction used to show the result or consequence of something.",
        "translations": { "bn": { "question": "সে ক্লান্ত ছিল, ______ সে তাড়াতাড়ি ঘুমাতে গেল।", "options": ["তাই", "কিন্তু", "কারণ", "যদিও"] } }
      },
      {
        "question": "While I was reading, the phone ______.",
        "options": ["rang", "was ringing", "rings", "ring"],
        "correct_answer": "rang",
        "explanation": "A short, completed action ('rang') interrupted a longer, ongoing action ('was reading').",
        "translations": { "bn": { "question": "আমি যখন পড়ছিলাম, ফোনটা ______।", "options": ["বেজে উঠল", "বাজছিল", "বাজে", "বাজা"] } }
      },
      {
        "question": "She is ______ of spiders.",
        "options": ["afraid", "afraiding", "fear", "frighten"],
        "correct_answer": "afraid",
        "explanation": "The correct phrase is 'to be afraid of' something.",
        "translations": { "bn": { "question": "সে মাকড়সাকে ______।", "options": ["ভয় পায়", "ভয় পাচ্ছে", "ভয়", "ভয় দেখানো"] } }
      },
      {
        "question": "I ______ my wallet. I can't find it anywhere.",
        "options": ["have lost", "lost", "am losing", "lose"],
        "correct_answer": "have lost",
        "explanation": "Present perfect 'have lost' is used because the past action has a result in the present (I can't find it).",
        "translations": { "bn": { "question": "আমি আমার মানিব্যাগ ______। আমি এটা কোথাও খুঁজে পাচ্ছি না।", "options": ["হারিয়ে ফেলেছি", "হারিয়েছিলাম", "হারাচ্ছি", "হারাই"] } }
      },
      {
        "question": "It ______ like it's going to rain.",
        "options": ["looks", "is looking", "look", "looked"],
        "correct_answer": "looks",
        "explanation": "'It looks like' is a common phrase used to make a prediction based on what you can see.",
        "translations": { "bn": { "question": "মনে হচ্ছে বৃষ্টি ______।", "options": ["হবে", "হচ্ছে", "হওয়া", "হয়েছিল"] } }
      },
      {
        "question": "Could you ______ me a favour?",
        "options": ["do", "make", "give", "take"],
        "correct_answer": "do",
        "explanation": "The correct expression is 'do someone a favour', which means to help someone.",
        "translations": { "bn": { "question": "আপনি কি আমাকে একটি উপকার ______?", "options": ["করতে", "বানাতে", "দিতে", "নিতে"] } }
      },
      {
        "question": "He has ______ friends than his sister.",
        "options": ["fewer", "less", "few", "little"],
        "correct_answer": "fewer",
        "explanation": "'Fewer' is used for countable nouns like 'friends'. 'Less' is for uncountable nouns.",
        "translations": { "bn": { "question": "তার বোনের চেয়ে তার ______ বন্ধু আছে।", "options": ["কম", "কম পরিমাণ", "অল্প", "সামান্য"] } }
      },
      {
        "question": "The window ______ by the children.",
        "options": ["was broken", "broke", "is broken", "breaks"],
        "correct_answer": "was broken",
        "explanation": "The past simple passive 'was broken' is used because the window is the object of the action.",
        "translations": { "bn": { "question": "জানালাটা বাচ্চাদের দ্বারা ______।", "options": ["ভাঙা হয়েছিল", "ভেঙেছিল", "ভাঙা হয়", "ভাঙে"] } }
      },
      {
        "question": "I am not ______ in politics.",
        "options": ["interested", "interesting", "interest", "interests"],
        "correct_answer": "interested",
        "explanation": "The adjective 'interested' describes a feeling. 'Interesting' describes something that causes the feeling.",
        "translations": { "bn": { "question": "আমি রাজনীতিতে ______ নই।", "options": ["আগ্রহী", "আকর্ষণীয়", "আগ্রহ", "আগ্রহগুলো"] } }
      },
      {
        "question": "This exercise is not very ______.",
        "options": ["difficult", "difficulty", "differently", "difference"],
        "correct_answer": "difficult",
        "explanation": "An adjective ('difficult') is needed here to describe the 'exercise'.",
        "translations": { "bn": { "question": "এই ব্যায়ামটি খুব একটা ______ নয়।", "options": ["কঠিন", "অসুবিধা", "ভিন্নভাবে", "পার্থক্য"] } }
      },
      {
        "question": "What time do you usually ______ work?",
        "options": ["finish", "finished", "finishing", "are finishing"],
        "correct_answer": "finish",
        "explanation": "For routines and habits ('usually'), we use the present simple tense.",
        "translations": { "bn": { "question": "আপনি সাধারণত কয়টার সময় কাজ ______?", "options": ["শেষ করেন", "শেষ করেছিলেন", "শেষ করছেন", "শেষ করছেন"] } }
      },
      {
        "question": "I promise I ______ tell anyone.",
        "options": ["won't", "don't", "am not", "haven't"],
        "correct_answer": "won't",
        "explanation": "'Will' or 'won't' is used for promises about the future.",
        "translations": { "bn": { "question": "আমি কথা দিচ্ছি আমি কাউকে ______।", "options": ["বলব না", "বলি না", "বলছি না", "বলিনি"] } }
      },
      {
        "question": "She's wearing a ______ dress.",
        "options": ["beautiful", "beauty", "beautifully", "beautify"],
        "correct_answer": "beautiful",
        "explanation": "The adjective 'beautiful' is needed to describe the noun 'dress'.",
        "translations": { "bn": { "question": "সে একটি ______ পোশাক পরে আছে।", "options": ["সুন্দর", "সৌন্দর্য", "সুন্দরভাবে", "সুন্দর করা"] } }
      }
    ]
  }
};


export const lifeInUKMockExams: { [key: string]: { questions: any[] } } = {
  exam1: {
    "questions": [
      {
        "question": "What is the official name of the UK?",
        "options": [
          "The United Kingdom of Great Britain and Northern Ireland",
          "The United Kingdom",
          "Great Britain",
          "England, Scotland, Wales and Northern Ireland"
        ],
        "correct_answer": "The United Kingdom of Great Britain and Northern Ireland",
        "explanation": "The official name of the country is the United Kingdom of Great Britain and Northern Ireland.",
        "translations": {
          "bn": {
            "question": "যুক্তরাজ্যের সরকারী নাম কি?",
            "options": [
              "গ্রেট ব্রিটেন এবং উত্তর আয়ারল্যান্ডের যুক্তরাজ্য",
              "যুক্তরাজ্য",
              "গ্রেট ব্রিটেন",
              "ইংল্যান্ড, স্কটল্যান্ড, ওয়েলস এবং উত্তর আয়ারল্যান্ড"
            ]
          }
        }
      },
      {
        "question": "Which of these is a famous UK landmark?",
        "options": [
          "The Eiffel Tower",
          "The Statue of Liberty",
          "The Giant's Causeway",
          "The Colosseum"
        ],
        "correct_answer": "The Giant's Causeway",
        "explanation": "The Giant's Causeway is a natural landmark in Northern Ireland, known for its unique rock formations.",
        "translations": {
            "bn": {
              "question": "এর মধ্যে কোনটি যুক্তরাজ্যের একটি বিখ্যাত ল্যান্ডমার্ক?",
              "options": [
                "আইফেল টাওয়ার",
                "স্ট্যাচু অফ লিবার্টি",
                "জায়ান্ট'স কজওয়ে",
                "কলোসিয়াম"
              ]
            }
        }
      },
      {
        "question": "Who is the patron saint of England?",
        "options": [
          "St Andrew",
          "St Patrick",
          "St David",
          "St George"
        ],
        "correct_answer": "St George",
        "explanation": "St George is the patron saint of England, and his day is celebrated on 23rd April.",
         "translations": {
            "bn": {
              "question": "ইংল্যান্ডের পৃষ্ঠপোষক সন্ত কে?",
              "options": [
                "সেন্ট অ্যান্ড্রু",
                "সেন্ট প্যাট্রিক",
                "সেন্ট ডেভিড",
                "সেন্ট জর্জ"
              ]
            }
        }
      },
      {
        "question": "What is the name of the UK's national anthem?",
        "options": [
          "God Save the King",
          "Rule, Britannia!",
          "Land of Hope and Glory",
          "Jerusalem"
        ],
        "correct_answer": "God Save the King",
        "explanation": "The national anthem of the UK is 'God Save the King'. The words change depending on whether the monarch is a King or a Queen.",
        "translations": {
            "bn": {
              "question": "যুক্তরাজ্যের জাতীয় সংগীতের নাম কি?",
              "options": [
                "গড সেভ দ্য কিং",
                "রুল, ব্রিটানিয়া!",
                "ল্যান্ড অফ হোপ অ্যান্ড গ্লোরি",
                "জেরুজালেম"
              ]
            }
        }
      },
      {
        "question": "Which flower is a symbol of Wales?",
        "options": [
          "Rose",
          "Thistle",
          "Daffodil",
          "Shamrock"
        ],
        "correct_answer": "Daffodil",
        "explanation": "The daffodil is a national symbol of Wales, often worn on St David's Day.",
        "translations": {
            "bn": {
              "question": "কোন ফুল ওয়েলসের প্রতীক?",
              "options": [
                "গোলাপ",
                "থিসল",
                "ড্যাফোডিল",
                "শ্যামরক"
              ]
            }
        }
      },
      {
        "question": "What is the minimum age to vote in a UK General Election?",
        "options": [
          "16",
          "18",
          "21",
          "25"
        ],
        "correct_answer": "18",
        "explanation": "You must be 18 years old or over to vote in a UK General Election.",
        "translations": {
            "bn": {
              "question": "যুক্তরাজ্যের সাধারণ নির্বাচনে ভোট দেওয়ার সর্বনিম্ন বয়স কত?",
              "options": [
                "১৬",
                "১৮",
                "২১",
                "২৫"
              ]
            }
        }
      },
      {
        "question": "What does the abbreviation MP stand for?",
        "options": [
          "Member of Parliament",
          "Master of Politics",
          "Minister of the Palace",
          "Member of the Public"
        ],
        "correct_answer": "Member of Parliament",
        "explanation": "MP stands for Member of Parliament. They are elected to represent a constituency in the House of Commons.",
        "translations": {
            "bn": {
              "question": "MP এর পূর্ণরূপ কি?",
              "options": [
                "মেম্বার অফ পার্লামেন্ট",
                "মাস্টার অফ পলিটিক্স",
                "মিনিস্টার অফ দ্য প্যালেস",
                "মেম্বার অফ দ্য পাবলিক"
              ]
            }
        }
      },
      {
        "question": "Which of these is a British overseas territory?",
        "options": [
          "Canada",
          "Australia",
          "Gibraltar",
          "New Zealand"
        ],
        "correct_answer": "Gibraltar",
        "explanation": "Gibraltar is a British overseas territory located at the southern tip of the Iberian Peninsula.",
        "translations": {
            "bn": {
              "question": "এর মধ্যে কোনটি ব্রিটিশ ওভারসিজ টেরিটরি?",
              "options": [
                "কানাডা",
                "অস্ট্রেলিয়া",
                "জিব্রাল্টার",
                "নিউজিল্যান্ড"
              ]
            }
        }
      },
      {
        "question": "What is the traditional Christmas meal in the UK?",
        "options": [
          "Roast beef",
          "Roast turkey",
          "Roast chicken",
          "Roast lamb"
        ],
        "correct_answer": "Roast turkey",
        "explanation": "A roast turkey is the centerpiece of the traditional British Christmas dinner.",
        "translations": {
            "bn": {
              "question": "যুক্তরাজ্যে ঐতিহ্যবাহী ক্রিসমাস খাবার কি?",
              "options": [
                "রোস্ট বিফ",
                "রোস্ট টার্কি",
                "রোস্ট চিকেন",
                "রোস্ট ল্যাম্ব"
              ]
            }
        }
      },
      {
        "question": "Who was the monarch during the Second World War?",
        "options": [
          "Queen Victoria",
          "King George V",
          "King George VI",
          "Queen Elizabeth II"
        ],
        "correct_answer": "King George VI",
        "explanation": "King George VI, the father of Queen Elizabeth II, was the reigning monarch during the Second World War.",
        "translations": {
            "bn": {
              "question": "দ্বিতীয় বিশ্বযুদ্ধের সময় রাজা কে ছিলেন?",
              "options": [
                "রানী ভিক্টোরিয়া",
                "রাজা পঞ্চম জর্জ",
                "রাজা ষষ্ঠ জর্জ",
                "রানী দ্বিতীয় এলিজাবেথ"
              ]
            }
        }
      },
      {
        "question": "What is the name of the river that flows through London?",
        "options": [
          "The Severn",
          "The Thames",
          "The Trent",
          "The Mersey"
        ],
        "correct_answer": "The Thames",
        "explanation": "The River Thames is the famous river that flows through the capital city, London.",
        "translations": {
            "bn": {
              "question": "লন্ডনের মধ্যে দিয়ে প্রবাহিত নদীটির নাম কি?",
              "options": [
                "দ্য সেভার্ন",
                "দ্য টেমস",
                "দ্য ট্রেন্ট",
                "দ্য मर्সি"
              ]
            }
        }
      },
      {
        "question": "What is 'Hogmanay'?",
        "options": [
          "A Welsh festival",
          "The Scottish word for New Year's Eve",
          "An English cheese",
          "A Northern Irish dance"
        ],
        "correct_answer": "The Scottish word for New Year's Eve",
        "explanation": "Hogmanay is the Scots word for the last day of the old year and is synonymous with the celebration of the New Year in the Scottish manner.",
        "translations": {
            "bn": {
              "question": "'হগমানে' কি?",
              "options": [
                "একটি ওয়েলশ উৎসব",
                "নববর্ষের আগের দিনের জন্য স্কটিশ শব্দ",
                "একটি ইংরেজি পনির",
                "একটি উত্তর আইরিশ নাচ"
              ]
            }
        }
      },
      {
        "question": "Which of these is a famous British scientist?",
        "options": [
          "Albert Einstein",
          "Isaac Newton",
          "Galileo Galilei",
          "Marie Curie"
        ],
        "correct_answer": "Isaac Newton",
        "explanation": "Sir Isaac Newton was an English mathematician, physicist, and astronomer, widely recognised as one of the most influential scientists of all time.",
        "translations": {
            "bn": {
              "question": "এর মধ্যে কে একজন বিখ্যাত ব্রিটিশ বিজ্ঞানী?",
              "options": [
                "আলবার্ট আইনস্টাইন",
                "আইজ্যাক নিউটন",
                "গ্যালিলিও গ্যালিলি",
                "মেরি কুরি"
              ]
            }
        }
      },
      {
        "question": "What is the capital city of Scotland?",
        "options": [
          "Glasgow",
          "Aberdeen",
          "Edinburgh",
          "Dundee"
        ],
        "correct_answer": "Edinburgh",
        "explanation": "Edinburgh is the capital city of Scotland.",
        "translations": {
            "bn": {
              "question": "স্কটল্যান্ডের রাজধানী শহর কোনটি?",
              "options": [
                "গ্লাসগো",
                "অ্যাবারডিন",
                "এডিনবার্গ",
                "ডান্ডি"
              ]
            }
        }
      },
      {
        "question": "The monarch is the head of which church?",
        "options": [
          "The Catholic Church",
          "The Church of England",
          "The Church of Scotland",
          "The Methodist Church"
        ],
        "correct_answer": "The Church of England",
        "explanation": "The monarch is the Supreme Governor of the Church of England.",
        "translations": {
            "bn": {
              "question": "রাজা কোন গির্জার প্রধান?",
              "options": [
                "ক্যাথলিক গির্জা",
                "চার্চ অফ ইংল্যান্ড",
                "চার্চ অফ স্কটল্যান্ড",
                "মেথডিস্ট গির্জা"
              ]
            }
        }
      },
      {
        "question": "What is the speed limit on UK motorways for cars?",
        "options": [
          "60 mph",
          "70 mph",
          "80 mph",
          "50 mph"
        ],
        "correct_answer": "70 mph",
        "explanation": "The national speed limit for cars on a motorway is 70 miles per hour.",
        "translations": {
            "bn": {
              "question": "যুক্তরাজ্যের মোটরওয়েতে গাড়ির জন্য গতিসীমা কত?",
              "options": [
                "৬০ মাইল প্রতি ঘন্টা",
                "৭০ মাইল প্রতি ঘন্টা",
                "৮০ মাইল প্রতি ঘন্টা",
                "৫০ মাইল প্রতি ঘন্টা"
              ]
            }
        }
      },
      {
        "question": "Which famous battle took place in 1066?",
        "options": [
          "The Battle of Agincourt",
          "The Battle of Waterloo",
          "The Battle of Hastings",
          "The Battle of Britain"
        ],
        "correct_answer": "The Battle of Hastings",
        "explanation": "The Battle of Hastings was fought on 14 October 1066 between the Norman-French army of William, the Duke of Normandy, and an English army under the Anglo-Saxon King Harold Godwinson, beginning the Norman conquest of England.",
        "translations": {
            "bn": {
              "question": "১০৬৬ সালে কোন বিখ্যাত যুদ্ধ হয়েছিল?",
              "options": [
                "অ্যাজিনকোর্টের যুদ্ধ",
                "ওয়াটারলুর যুদ্ধ",
                "হেস্টিংসের যুদ্ধ",
                "ব্রিটেনের যুদ্ধ"
              ]
            }
        }
      },
      {
        "question": "What is the main role of the House of Lords?",
        "options": [
          "To make and pass laws",
          "To act as a revising chamber, checking and challenging the work of the House of Commons",
          "To represent the people",
          "To run the government"
        ],
        "correct_answer": "To act as a revising chamber, checking and challenging the work of the House of Commons",
        "explanation": "The House of Lords' main function is to act as a 'revising' chamber, scrutinising and amending legislation from the House of Commons.",
        "translations": {
            "bn": {
              "question": "হাউস অফ লর্ডসের প্রধান ভূমিকা কি?",
              "options": [
                "আইন তৈরি এবং পাস করা",
                "একটি সংশোধনকারী চেম্বার হিসাবে কাজ করা, হাউস অফ কমন্সের কাজ পরীক্ষা এবং চ্যালেঞ্জ করা",
                "জনগণের প্রতিনিধিত্ব করা",
                "সরকার চালানো"
              ]
            }
        }
      },
      {
        "question": "Which of these is a fundamental principle of British life?",
        "options": [
          "Driving on the right",
          "Respect and tolerance for others",
          "Compulsory military service",
          "A state-controlled media"
        ],
        "correct_answer": "Respect and tolerance for others",
        "explanation": "The fundamental principles of British life include democracy, the rule of law, individual liberty, and mutual respect for and tolerance of those with different faiths and beliefs and for those without faith.",
        "translations": {
            "bn": {
              "question": "এর মধ্যে কোনটি ব্রিটিশ জীবনের একটি মৌলিক নীতি?",
              "options": [
                "ডান দিকে গাড়ি চালানো",
                "অন্যদের প্রতি শ্রদ্ধা এবং সহনশীলতা",
                "বাধ্যতামূলক সামরিক সেবা",
                "একটি রাষ্ট্র-নিয়ন্ত্রিত মিডিয়া"
              ]
            }
        }
      },
      {
        "question": "What is Remembrance Day?",
        "options": [
          "A day to celebrate the Queen's birthday",
          "A day to remember those who died in wars",
          "A day to celebrate the signing of the Magna Carta",
          "A day to celebrate the UK joining the EU"
        ],
        "correct_answer": "A day to remember those who died in wars",
        "explanation": "Remembrance Day is held on 11th November to commemorate the members of the armed forces who have died in the line of duty.",
        "translations": {
            "bn": {
              "question": "স্মরণ দিবস কি?",
              "options": [
                "রাণীর জন্মদিন উদযাপনের একটি দিন",
                "যারা যুদ্ধে মারা গেছেন তাদের স্মরণ করার একটি দিন",
                "ম্যাগনা কার্টা স্বাক্ষরিত হওয়ার উদযাপনের একটি দিন",
                "যুক্তরাজ্যের ইইউতে যোগদানের উদযাপনের একটি দিন"
              ]
            }
        }
      },
      {
        "question": "Who built the Tower of London?",
        "options": [
          "Henry VIII",
          "Queen Victoria",
          "William the Conqueror",
          "Oliver Cromwell"
        ],
        "correct_answer": "William the Conqueror",
        "explanation": "The Tower of London was founded towards the end of 1066 as part of the Norman Conquest of England. The White Tower, which gives the entire castle its name, was built by William the Conqueror in 1078.",
        "translations": {
            "bn": {
              "question": "টাওয়ার অফ লন্ডন কে নির্মাণ করেন?",
              "options": [
                "অষ্টম হেনরি",
                "রানী ভিক্টোরিয়া",
                "উইলিয়াম দ্য কনকারার",
                "অলিভার ক্রোমওয়েল"
              ]
            }
        }
      },
      {
        "question": "What is the currency of the UK?",
        "options": [
          "Euro",
          "Pound sterling",
          "Dollar",
          "Franc"
        ],
        "correct_answer": "Pound sterling",
        "explanation": "The official currency of the United Kingdom is the pound sterling, commonly known as the pound.",
        "translations": {
            "bn": {
              "question": "যুক্তরাজ্যের মুদ্রা কি?",
              "options": [
                "ইউরো",
                "পাউন্ড স্টার্লিং",
                "ডলার",
                "ফ্রাঙ্ক"
              ]
            }
        }
      },
      {
        "question": "Which sport is famously associated with Wimbledon?",
        "options": [
          "Football",
          "Cricket",
          "Rugby",
          "Tennis"
        ],
        "correct_answer": "Tennis",
        "explanation": "The Wimbledon Championships is the oldest tennis tournament in the world and is widely regarded as the most prestigious.",
        "translations": {
            "bn": {
              "question": "কোন খেলাটি উইম্বলডনের সাথে বিখ্যাতভাবে জড়িত?",
              "options": [
                "ফুটবল",
                "ক্রিকেট",
                "রাগবি",
                "টেনিস"
              ]
            }
        }
      },
      {
        "question": "In what year did the UK host the Olympic Games most recently?",
        "options": [
          "1948",
          "2000",
          "2012",
          "2020"
        ],
        "correct_answer": "2012",
        "explanation": "London hosted the Summer Olympic Games in 2012.",
        "translations": {
            "bn": {
              "question": "যুক্তরাজ্য সম্প্রতি কোন বছরে অলিম্পিক গেমস আয়োজন করেছিল?",
              "options": [
                "১৯৪৮",
                "২০০০",
                "২০১২",
                "২০২০"
              ]
            }
        }
      }
    ]
  },
  exam2: {
    "questions": [
      {
        "question": "Which of the following is NOT a part of the United Kingdom?",
        "options": [
          "Wales",
          "The Republic of Ireland",
          "Northern Ireland",
          "Scotland"
        ],
        "correct_answer": "The Republic of Ireland",
        "explanation": "The Republic of Ireland is an independent country and is not part of the UK. Northern Ireland is part of the UK.",
        "translations": {
            "bn": {
              "question": "নিচের কোনটি যুক্তরাজ্যের অংশ নয়?",
              "options": [
                "ওয়েলস",
                "আয়ারল্যান্ড প্রজাতন্ত্র",
                "উত্তর আয়ারল্যান্ড",
                "স্কটল্যান্ড"
              ]
            }
        }
      },
      {
        "question": "What is the 'Crown Jewels'?",
        "options": [
          "A famous painting",
          "The regalia and vestments worn by the monarch",
          "A brand of tea",
          "A national park"
        ],
        "correct_answer": "The regalia and vestments worn by the monarch",
        "explanation": "The Crown Jewels are the royal objects, including crowns, sceptres, and orbs, which are used at coronations and other state occasions. They are kept in the Tower of London.",
        "translations": {
            "bn": {
              "question": "'ক্রাউন জুয়েলস' কি?",
              "options": [
                "একটি বিখ্যাত চিত্রকর্ম",
                "রাজকীয় পোশাক এবং রাজার পরিধেয় বস্ত্র",
                "একটি চায়ের ব্র্যান্ড",
                "একটি জাতীয় উদ্যান"
              ]
            }
        }
      },
      {
        "question": "Who is the patron saint of Scotland?",
        "options": [
          "St George",
          "St David",
          "St Andrew",
          "St Patrick"
        ],
        "correct_answer": "St Andrew",
        "explanation": "St Andrew is the patron saint of Scotland, and St Andrew's Day is celebrated on 30th November.",
        "translations": {
            "bn": {
              "question": "স্কটল্যান্ডের পৃষ্ঠপোষক সন্ত কে?",
              "options": [
                "সেন্ট জর্জ",
                "সেন্ট ডেভিড",
                "সেন্ট অ্যান্ড্রু",
                "সেন্ট প্যাট্রিক"
              ]
            }
        }
      },
      {
        "question": "What is the upper house of the UK Parliament called?",
        "options": [
          "The House of Commons",
          "The House of Lords",
          "The Senate",
          "The National Assembly"
        ],
        "correct_answer": "The House of Lords",
        "explanation": "The UK Parliament is bicameral, with an upper house (the House of Lords) and a lower house (the House of Commons).",
        "translations": {
            "bn": {
              "question": "যুক্তরাজ্যের সংসদের উচ্চকক্ষের নাম কি?",
              "options": [
                "হাউস অফ কমন্স",
                "হাউস অফ লর্ডস",
                "সিনেট",
                "জাতীয় পরিষদ"
              ]
            }
        }
      },
      {
        "question": "Which flower is a symbol of England?",
        "options": [
          "Daffodil",
          "Shamrock",
          "Thistle",
          "Rose"
        ],
        "correct_answer": "Rose",
        "explanation": "The Tudor rose is the national floral emblem of England.",
        "translations": {
            "bn": {
              "question": "কোন ফুল ইংল্যান্ডের প্রতীক?",
              "options": [
                "ড্যাফোডিল",
                "শ্যামরক",
                "থিসল",
                "গোলাপ"
              ]
            }
        }
      },
      {
        "question": "To become a permanent resident or citizen of the UK, you are usually required to:",
        "options": [
          "Pass the Life in the UK Test",
          "Own a property",
          "Have served in the military",
          "Be married to a UK citizen"
        ],
        "correct_answer": "Pass the Life in the UK Test",
        "explanation": "Passing the Life in the UK Test is one of the requirements for anyone seeking Indefinite Leave to Remain in the UK or naturalisation as a British citizen.",
        "translations": {
            "bn": {
              "question": "যুক্তরাজ্যের স্থায়ী বাসিন্দা বা নাগরিক হতে, আপনাকে সাধারণত যা করতে হয়:",
              "options": [
                "লাইফ ইন দ্য ইউকে পরীক্ষায় পাস করা",
                "একটি সম্পত্তির মালিক হওয়া",
                "সামরিক বাহিনীতে কাজ করা",
                "একজন যুক্তরাজ্যের নাগরিককে বিয়ে করা"
              ]
            }
        }
      },
      {
        "question": "What is the name of the Prime Minister's official residence?",
        "options": [
          "Buckingham Palace",
          "Windsor Castle",
          "10 Downing Street",
          "The Houses of Parliament"
        ],
        "correct_answer": "10 Downing Street",
        "explanation": "10 Downing Street in London is the official residence and office of the Prime Minister of the United Kingdom.",
        "translations": {
            "bn": {
              "question": "প্রধানমন্ত্রীর সরকারী বাসভবনের নাম কি?",
              "options": [
                "বাকিংহাম প্যালেস",
                "উইন্ডসর ক্যাসেল",
                "১০ ডাউনিং স্ট্রিট",
                "হাউসেস অফ পার্লামেন্ট"
              ]
            }
        }
      },
      {
        "question": "Which of these is a famous British author?",
        "options": [
          "Leo Tolstoy",
          "Mark Twain",
          "Charles Dickens",
          "Victor Hugo"
        ],
        "correct_answer": "Charles Dickens",
        "explanation": "Charles Dickens was a famous English writer and social critic who created some of the world's best-known fictional characters.",
        "translations": {
            "bn": {
              "question": "এর মধ্যে কে একজন বিখ্যাত ব্রিটিশ লেখক?",
              "options": [
                "লিও টলস্টয়",
                "মার্ক টোয়েন",
                "চার্লস ডিকেন্স",
                "ভিক্টর হুগো"
              ]
            }
        }
      },
      {
        "question": "What is 'Bonfire Night' celebrated for?",
        "options": [
          "The end of winter",
          "The failure of the Gunpowder Plot",
          "The Queen's birthday",
          "A harvest festival"
        ],
        "correct_answer": "The failure of the Gunpowder Plot",
        "explanation": "Bonfire Night, on 5th November, commemorates the failure of the Gunpowder Plot of 1605, when Guy Fawkes and his co-conspirators tried to blow up the Houses of Parliament.",
        "translations": {
            "bn": {
              "question": "'বনফায়ার নাইট' কিসের জন্য উদযাপন করা হয়?",
              "options": [
                "শীতের শেষ",
                "গানপাউডার প্লটের ব্যর্থতা",
                "রাণীর জন্মদিন",
                "একটি ফসল উৎসব"
              ]
            }
        }
      },
      {
        "question": "Who was the first female Prime Minister of the UK?",
        "options": [
          "Theresa May",
          "Margaret Thatcher",
          "Queen Elizabeth I",
          "Harriet Harman"
        ],
        "correct_answer": "Margaret Thatcher",
        "explanation": "Margaret Thatcher was the first female Prime Minister of the UK, serving from 1979 to 1990.",
        "translations": {
            "bn": {
              "question": "যুক্তরাজ্যের প্রথম মহিলা প্রধানমন্ত্রী কে ছিলেন?",
              "options": [
                "থেরেসো মে",
                "মার্গারেট থ্যাচার",
                "রানী প্রথম এলিজাবেথ",
                "হ্যারিয়েট হারমান"
              ]
            }
        }
      },
      {
        "question": "What is the highest mountain in the UK?",
        "options": [
          "Snowdon",
          "Scafell Pike",
          "Ben Nevis",
          "Slieve Donard"
        ],
        "correct_answer": "Ben Nevis",
        "explanation": "Ben Nevis, located in Scotland, is the highest mountain in the British Isles.",
        "translations": {
            "bn": {
              "question": "যুক্তরাজ্যের সর্বোচ্চ পর্বত কোনটি?",
              "options": [
                "স্নোডন",
                "স্কাফেল পাইক",
                "বেন নেভিস",
                "স্লিভ ডোনার্ড"
              ]
            }
        }
      },
      {
        "question": "What is a 'constituency'?",
        "options": [
          "A type of local council",
          "A geographical area represented by an MP",
          "A political party",
          "A government department"
        ],
        "correct_answer": "A geographical area represented by an MP",
        "explanation": "A constituency is a specific geographical area of the country, and the residents of that area vote to elect an MP to represent them in the House of Commons.",
        "translations": {
            "bn": {
              "question": "'নির্বাচনী এলাকা' কি?",
              "options": [
                "এক ধরণের স্থানীয় কাউন্সিল",
                "একজন এমপির প্রতিনিধিত্ব করা একটি ভৌগলিক এলাকা",
                "একটি রাজনৈতিক দল",
                "একটি সরকারী বিভাগ"
              ]
            }
        }
      },
      {
        "question": "Which of these is a famous British film franchise?",
        "options": [
          "Star Wars",
          "The Lord of the Rings",
          "James Bond",
          "The Godfather"
        ],
        "correct_answer": "James Bond",
        "explanation": "The James Bond series of films is a British spy film series based on the fictional character of MI6 agent James Bond, '007'.",
        "translations": {
            "bn": {
              "question": "এর মধ্যে কোনটি একটি বিখ্যাত ব্রিটিশ চলচ্চিত্র ফ্র্যাঞ্চাইজি?",
              "options": [
                "স্টার ওয়ার্স",
                "দ্য লর্ড অফ দ্য রিংস",
                "জেমস বন্ড",
                "দ্য গডফাদার"
              ]
            }
        }
      },
      {
        "question": "What is the capital city of Wales?",
        "options": [
          "Swansea",
          "Newport",
          "Cardiff",
          "Wrexham"
        ],
        "correct_answer": "Cardiff",
        "explanation": "Cardiff is the capital and largest city of Wales.",
        "translations": {
            "bn": {
              "question": "ওয়েলসের রাজধানী শহর কোনটি?",
              "options": [
                "সোয়ানসি",
                "নিউপোর্ট",
                "কার্ডিফ",
                "রেক্সহ্যাম"
              ]
            }
        }
      },
      {
        "question": "What is the role of the Speaker in the House of Commons?",
        "options": [
          "To lead the government",
          "To lead the opposition",
          "To remain politically impartial and control debates",
          "To represent the monarch"
        ],
        "correct_answer": "To remain politically impartial and control debates",
        "explanation": "The Speaker is the presiding officer of the House of Commons. They are expected to be politically impartial and their main role is to chair debates.",
        "translations": {
            "bn": {
              "question": "হাউস অফ কমন্সে স্পিকারের ভূমিকা কি?",
              "options": [
                "সরকারকে নেতৃত্ব দেওয়া",
                "বিরোধীদের নেতৃত্ব দেওয়া",
                "রাজনৈতিকভাবে নিরপেক্ষ থাকা এবং বিতর্ক নিয়ন্ত্রণ করা",
                "রাজার প্রতিনিধিত্ব করা"
              ]
            }
        }
      },
      {
        "question": "At what age can you legally buy alcohol in the UK?",
        "options": [
          "16",
          "18",
          "21",
          "There is no age limit"
        ],
        "correct_answer": "18",
        "explanation": "It is illegal for someone under 18 to buy alcohol in pubs, off-licences or supermarkets in the UK.",
        "translations": {
            "bn": {
              "question": "যুক্তরাজ্যে আইনত কত বছর বয়সে অ্যালকোহল কেনা যায়?",
              "options": [
                "১৬",
                "১৮",
                "২১",
                "কোনো বয়সসীমা নেই"
              ]
            }
        }
      },
      {
        "question": "The signing of which document in 1215 limited the power of the monarch?",
        "options": [
          "The Bill of Rights",
          "The Magna Carta",
          "The Act of Union",
          "The Declaration of Independence"
        ],
        "correct_answer": "The Magna Carta",
        "explanation": "The Magna Carta, signed by King John in 1215, was a foundational document that established the principle that everyone, including the king, was subject to the law.",
        "translations": {
            "bn": {
              "question": "১২১৫ সালে কোন দলিল স্বাক্ষরের মাধ্যমে রাজার ক্ষমতা সীমিত করা হয়েছিল?",
              "options": [
                "বিল অফ রাইটস",
                "ম্যাগনা কার্টা",
                "অ্যাক্ট অফ ইউনিয়ন",
                "স্বাধীনতার ঘোষণা"
              ]
            }
        }
      },
      {
        "question": "What does 'NHS' stand for?",
        "options": [
          "National Health Service",
          "National Housing Service",
          "New Health System",
          "National Help Scheme"
        ],
        "correct_answer": "National Health Service",
        "explanation": "The NHS stands for the National Health Service, which is the publicly funded healthcare system in the UK.",
        "translations": {
            "bn": {
              "question": "'NHS' এর পূর্ণরূপ কি?",
              "options": [
                "ন্যাশনাল হেলথ সার্ভিস",
                "ন্যাশনাল হাউজিং সার্ভিস",
                "নিউ হেলথ সিস্টেম",
                "ন্যাশনাল হেল্প স্কিম"
              ]
            }
        }
      },
      {
        "question": "Which of the following is a core value of the UK?",
        "options": [
          "The rule of law",
          "Arranged marriage",
          "Class distinction",
          "State ownership of property"
        ],
        "correct_answer": "The rule of law",
        "explanation": "The rule of law is a fundamental principle of the UK constitution, meaning that all citizens and the government itself are subject to and accountable under the law.",
        "translations": {
            "bn": {
              "question": "নিচের কোনটি যুক্তরাজ্যের একটি মূল নীতি?",
              "options": [
                "আইনের শাসন",
                "পারিবারিকভাবে আয়োজিত বিবাহ",
                "শ্রেণী বিভেদ",
                "সম্পত্তির রাষ্ট্রীয় মালিকানা"
              ]
            }
        }
      },
      {
        "question": "What is 'Boxing Day'?",
        "options": [
          "The day before Christmas",
          "A day for sporting events",
          "The day after Christmas, which is a public holiday",
          "The first day of the year"
        ],
        "correct_answer": "The day after Christmas, which is a public holiday",
        "explanation": "Boxing Day is a bank holiday in the UK that falls on 26th December, the day after Christmas.",
        "translations": {
            "bn": {
              "question": "'বক্সিং ডে' কি?",
              "options": [
                "ক্রিসমাসের আগের দিন",
                "ক্রীড়া অনুষ্ঠানের জন্য একটি দিন",
                "ক্রিসমাসের পরের দিন, যা একটি সরকারী ছুটির দিন",
                "বছরের প্রথম দিন"
              ]
            }
        }
      },
      {
        "question": "Which Roman emperor built a wall across the north of England?",
        "options": [
          "Julius Caesar",
          "Augustus",
          "Hadrian",
          "Nero"
        ],
        "correct_answer": "Hadrian",
        "explanation": "Hadrian's Wall was a defensive fortification in the Roman province of Britannia, begun in AD 122 in the reign of the emperor Hadrian.",
        "translations": {
            "bn": {
              "question": "কোন রোমান সম্রাট ইংল্যান্ডের উত্তরে একটি প্রাচীর নির্মাণ করেছিলেন?",
              "options": [
                "জুলিয়াস সিজার",
                "অগাস্টাস",
                "হ্যাড্রিয়ান",
                "নিরো"
              ]
            }
        }
      },
      {
        "question": "If your car is over three years old, what must it pass each year?",
        "options": [
          "A driving test",
          "An MOT test",
          "A police check",
          "A customs inspection"
        ],
        "correct_answer": "An MOT test",
        "explanation": "The MOT test is an annual test of vehicle safety, roadworthiness aspects and exhaust emissions required for most vehicles over three years old.",
        "translations": {
            "bn": {
              "question": "যদি আপনার গাড়ির বয়স তিন বছরের বেশি হয়, তবে প্রতি বছর এটিকে কী পাস করতে হবে?",
              "options": [
                "একটি ড্রাইভিং পরীক্ষা",
                "একটি এমওটি পরীক্ষা",
                "একটি পুলিশি তল্লাশি",
                "একটি শুল্ক পরিদর্শন"
              ]
            }
        }
      },
      {
        "question": "Which of these is a popular British television programme?",
        "options": [
          "Friends",
          "The Simpsons",
          "Doctor Who",
          "Breaking Bad"
        ],
        "correct_answer": "Doctor Who",
        "explanation": "Doctor Who is a long-running and iconic British science fiction television programme produced by the BBC.",
        "translations": {
            "bn": {
              "question": "এর মধ্যে কোনটি একটি জনপ্রিয় ব্রিটিশ টেলিভিশন প্রোগ্রাম?",
              "options": [
                "ফ্রেন্ডস",
                "দ্য সিম্পসনস",
                "ডক্টর হু",
                "ব্রেকিং ব্যাড"
              ]
            }
        }
      },
      {
        "question": "What event is held annually between Oxford and Cambridge universities on the River Thames?",
        "options": [
          "A swimming race",
          "A sailing regatta",
          "The Boat Race",
          "A rowing competition"
        ],
        "correct_answer": "The Boat Race",
        "explanation": "The Boat Race is an annual rowing race between the Oxford University Boat Club and the Cambridge University Boat Club, rowed between crews of eight on the River Thames in London.",
        "translations": {
            "bn": {
              "question": "অক্সফোর্ড এবং কেমব্রিজ বিশ্ববিদ্যালয়ের মধ্যে টেমস নদীতে বার্ষিকভাবে কোন অনুষ্ঠানটি অনুষ্ঠিত হয়?",
              "options": [
                "একটি সাঁতার প্রতিযোগিতা",
                "একটি নৌবিহার",
                "দ্য বোট রেস",
                "একটি নৌকাবাইচ প্রতিযোগিতা"
              ]
            }
        }
      }
    ]
  },
  exam3: {
    "questions": [
        {"question": "What is the capital city of Northern Ireland?", "options": ["Dublin", "Cork", "Belfast", "Derry"], "correct_answer": "Belfast", "explanation": "Belfast is the capital and largest city of Northern Ireland.", "translations": {"bn": {"question": "উত্তর আয়ারল্যান্ডের রাজধানী শহর কোনটি?", "options": ["ডাবলিন", "কর্ক", "বেলফাস্ট", "ডেরি"]}}},
        {"question": "Which of these is a valid form of identification in the UK?", "options": ["Student ID card", "Library card", "Passport", "Gym membership card"], "correct_answer": "Passport", "explanation": "A passport is a government-issued document that is a valid form of identification.", "translations": {"bn": {"question": "যুক্তরাজ্যে নিচের কোনটি একটি বৈধ পরিচয়পত্র?", "options": ["ছাত্র আইডি কার্ড", "লাইব্রেরি কার্ড", "পাসপোর্ট", "জিম সদস্যপদ কার্ড"]}}},
        {"question": "The 'Beefeaters' are the ceremonial guards of which landmark?", "options": ["Buckingham Palace", "The Houses of Parliament", "Windsor Castle", "The Tower of London"], "correct_answer": "The Tower of London", "explanation": "The Yeomen Warders, popularly known as 'Beefeaters', are the ceremonial guardians of the Tower of London.", "translations": {"bn": {"question": "'বিফিটার' কোন ল্যান্ডমার্কের আনুষ্ঠানিক রক্ষী?", "options": ["বাকিংহাম প্যালেস", "হাউসেস অফ পার্লামেন্ট", "উইন্ডসর ক্যাসেল", "টাওয়ার অফ লন্ডন"]}}},
        {"question": "What is the name of the agreement that established power-sharing in Northern Ireland?", "options": ["The Treaty of Versailles", "The Good Friday Agreement", "The Maastricht Treaty", "The Act of Union"], "correct_answer": "The Good Friday Agreement", "explanation": "The Good Friday Agreement, or Belfast Agreement, was a major political development in the Northern Ireland peace process of the 1990s.", "translations": {"bn": {"question": "উত্তর আয়ারল্যান্ডে ক্ষমতা ভাগাভাগি প্রতিষ্ঠা করেছিল কোন চুক্তির মাধ্যমে?", "options": ["ভার্সাই চুক্তি", "গুড ফ্রাইডে চুক্তি", "ম্যাস্ট্রিক্ট চুক্তি", "অ্যাক্ট অফ ইউনিয়ন"]}}},
        {"question": "What is the emergency telephone number in the UK?", "options": ["111", "101", "999", "123"], "correct_answer": "999", "explanation": "999 is the official emergency number for the United Kingdom, but calls are also accepted on the European Union emergency number, 112.", "translations": {"bn": {"question": "যুক্তরাজ্যের জরুরি টেলিফোন নম্বর কত?", "options": ["১১১", "১০১", "৯৯৯", "১২৩"]}}},
        {"question": "Which monarch had the longest reign in British history?", "options": ["Queen Victoria", "King George III", "Queen Elizabeth II", "Henry VIII"], "correct_answer": "Queen Elizabeth II", "explanation": "Queen Elizabeth II was the longest-reigning British monarch, ruling from 1952 to 2022.", "translations": {"bn": {"question": "ব্রিটিশ ইতিহাসে কোন রাজার রাজত্বকাল সবচেয়ে দীর্ঘ ছিল?", "options": ["রানী ভিক্টোরিয়া", "রাজা তৃতীয় জর্জ", "রানী দ্বিতীয় এলিজাবেথ", "অষ্টম হেনরি"]}}},
        {"question": "What is 'Pancake Day' also known as?", "options": ["Ash Wednesday", "Good Friday", "Shrove Tuesday", "Easter Sunday"], "correct_answer": "Shrove Tuesday", "explanation": "Shrove Tuesday is the day before Ash Wednesday, observed in many Christian countries through participating in confession and absolution, the ritual burning of palms from the previous year's Palm Sunday, finalizing one's Lenten sacrifice, as well as eating pancakes.", "translations": {"bn": {"question": "'প্যানকেক ডে' আর কী নামে পরিচিত?", "options": ["অ্যাশ ওয়েডনেসডে", "গুড ফ্রাইডে", "শ্রোভ টিউসডে", "ইস্টার সানডে"]}}},
        {"question": "Who wrote the play 'Romeo and Juliet'?", "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "George Orwell"], "correct_answer": "William Shakespeare", "explanation": "William Shakespeare, an English playwright, poet and actor, is widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. He wrote 'Romeo and Juliet'.", "translations": {"bn": {"question": "'রোমিও অ্যান্ড জুলিয়েট' নাটকটি কে লিখেছেন?", "options": ["চার্লস ডিকেন্স", "উইলিয়াম শেক্সপিয়ার", "জেন অস্টেন", "জর্জ অরওয়েল"]}}},
        {"question": "Which of these is a public holiday in Scotland but not in England?", "options": ["Christmas Day", "New Year's Day", "St Andrew's Day", "Good Friday"], "correct_answer": "St Andrew's Day", "explanation": "St Andrew's Day (30 November) is an official bank holiday in Scotland. It is also a national day, marking the feast day of the patron saint.", "translations": {"bn": {"question": "এর মধ্যে কোনটি স্কটল্যান্ডের সরকারি ছুটির দিন কিন্তু ইংল্যান্ডের নয়?", "options": ["ক্রিসমাস ডে", "নববর্ষের দিন", "সেন্ট অ্যান্ড্রুস ডে", "গুড ফ্রাইডে"]}}},
        {"question": "What is the small claims court limit in England and Wales?", "options": ["£5,000", "£10,000", "£25,000", "£50,000"], "correct_answer": "£10,000", "explanation": "The small claims track is the normal track for any claim which has a financial value of not more than £10,000.", "translations": {"bn": {"question": "ইংল্যান্ড এবং ওয়েলসে ছোট দাবির আদালতের সীমা কত?", "options": ["£৫,০০০", "£১০,০০০", "£২৫,০০০", "£৫০,০০০"]}}},
        {"question": "Which historical period is associated with Queen Victoria?", "options": ["The Georgian era", "The Elizabethan era", "The Victorian era", "The Stuart period"], "correct_answer": "The Victorian era", "explanation": "The Victorian era of British history was the period of Queen Victoria's reign, from 20 June 1837 until her death on 22 January 1901.", "translations": {"bn": {"question": "কোন ঐতিহাসিক সময়কাল রানী ভিক্টোরিয়ার সাথে জড়িত?", "options": ["জর্জিয়ান যুগ", "এলিজাবেথান যুগ", "ভিক্টোরিয়ান যুগ", "স্টুয়ার্ট যুগ"]}}},
        {"question": "How often are General Elections held in the UK?", "options": ["Every 3 years", "Every 4 years", "Every 5 years", "At the monarch's discretion"], "correct_answer": "Every 5 years", "explanation": "Under the Fixed-term Parliaments Act 2011, General Elections are automatically scheduled to be held every five years.", "translations": {"bn": {"question": "যুক্তরাজ্যে সাধারণ নির্বাচন কত বছর পর পর অনুষ্ঠিত হয়?", "options": ["প্রতি ৩ বছর", "প্রতি ৪ বছর", "প্রতি ৫ বছর", "রাজার বিবেচনার উপর"]}}},
        {"question": "What is the traditional dish of Scotland?", "options": ["Fish and Chips", "Irish Stew", "Haggis", "Lancashire Hotpot"], "correct_answer": "Haggis", "explanation": "Haggis is a savoury pudding containing sheep's pluck, minced with onion, oatmeal, suet, spices, and stock, traditionally encased in the animal's stomach. It is the national dish of Scotland.", "translations": {"bn": {"question": "স্কটল্যান্ডের ঐতিহ্যবাহী খাবার কোনটি?", "options": ["ফিশ অ্যান্ড চিপস", "আইরিশ স্টু", "হ্যাগিস", "ল্যাঙ্কাশায়ার হটপট"]}}},
        {"question": "Who must you register with to vote in an election?", "options": ["Your local council", "The police", "The post office", "Your employer"], "correct_answer": "Your local council", "explanation": "You must register to vote with your local Electoral Registration Office, which is usually part of the local council.", "translations": {"bn": {"question": "নির্বাচনে ভোট দেওয়ার জন্য আপনাকে কার কাছে নিবন্ধন করতে হবে?", "options": ["আপনার স্থানীয় কাউন্সিল", "পুলিশ", "ডাকঘর", "আপনার নিয়োগকর্তা"]}}},
        {"question": "The Industrial Revolution started in which country?", "options": ["USA", "France", "Germany", "Britain"], "correct_answer": "Britain", "explanation": "The Industrial Revolution was the transition to new manufacturing processes in Great Britain, continental Europe, and the United States, in the period from about 1760 to some time between 1820 and 1840.", "translations": {"bn": {"question": "শিল্প বিপ্লব কোন দেশে শুরু হয়েছিল?", "options": ["মার্কিন যুক্তরাষ্ট্র", "ফ্রান্স", "জার্মানি", "ব্রিটেন"]}}},
        {"question": "How many members does a jury normally have in England, Wales and Northern Ireland?", "options": ["8", "10", "12", "15"], "correct_answer": "12", "explanation": "A jury in England, Wales and Northern Ireland is a sworn body of 12 people convened to render an impartial verdict.", "translations": {"bn": {"question": "ইংল্যান্ড, ওয়েলস এবং উত্তর আয়ারল্যান্ডে একটি জুরিতে সাধারণত কতজন সদস্য থাকে?", "options": ["৮", "১০", "১২", "১৫"]}}},
        {"question": "The UK is a member of which international organisation?", "options": ["The European Union", "The Commonwealth", "NAFTA", "ASEAN"], "correct_answer": "The Commonwealth", "explanation": "The UK is a member of the Commonwealth, a political association of 56 member states, the vast majority of which are former territories of the British Empire.", "translations": {"bn": {"question": "যুক্তরাজ্য কোন আন্তর্জাতিক সংস্থার সদস্য?", "options": ["ইউরোপীয় ইউনিয়ন", "কমনওয়েলথ", "নাফটা", "আসিয়ান"]}}},
        {"question": "What is a 'bank holiday'?", "options": ["A day when banks are closed", "A public holiday", "A day for financial reporting", "A day to honour the Bank of England"], "correct_answer": "A public holiday", "explanation": "In the United Kingdom, 'bank holiday' is a common term for a public holiday.", "translations": {"bn": {"question": "'ব্যাঙ্ক হলিডে' কী?", "options": ["যেদিন ব্যাঙ্ক বন্ধ থাকে", "একটি সরকারি ছুটির দিন", "আর্থিক প্রতিবেদনের জন্য একটি দিন", "ব্যাঙ্ক অফ ইংল্যান্ডকে সম্মান জানানোর দিন"]}}},
        {"question": "Who was the leader of the Labour Party who introduced the NHS?", "options": ["Winston Churchill", "Clement Attlee", "Neville Chamberlain", "Harold Wilson"], "correct_answer": "Clement Attlee", "explanation": "The National Health Service (NHS) was established in 1948 by the Labour government of Clement Attlee.", "translations": {"bn": {"question": "এনএইচএস চালুকারী লেবার পার্টির নেতা কে ছিলেন?", "options": ["উইনস্টন চার্চিল", "ক্লেমেন্ট অ্যাটলি", "নেভিল চেম্বারলেইন", "হ্যারল্ড উইলসন"]}}},
        {"question": "Which of these is a type of biscuit?", "options": ["Cheddar", "Stilton", "Shortbread", "Wensleydale"], "correct_answer": "Shortbread", "explanation": "Shortbread is a traditional Scottish biscuit. The other options are types of cheese.", "translations": {"bn": {"question": "এর মধ্যে কোনটি এক ধরণের বিস্কুট?", "options": ["চেডার", "স্টিলটন", "শর্টব্রেড", "ওয়েন্সলিডেল"]}}},
        {"question": "If you want to make a complaint about the police, who do you contact?", "options": ["Your MP", "The Independent Office for Police Conduct (IOPC)", "The local council", "The Home Office"], "correct_answer": "The Independent Office for Police Conduct (IOPC)", "explanation": "The IOPC oversees the police complaints system in England and Wales and sets the standards by which the police should handle complaints.", "translations": {"bn": {"question": "আপনি যদি পুলিশ সম্পর্কে অভিযোগ করতে চান, তাহলে কার সাথে যোগাযোগ করবেন?", "options": ["আপনার এমপি", "ইন্ডিপেন্ডেন্ট অফিস ফর পুলিশ কন্ডাক্ট (IOPC)", "স্থানীয় কাউন্সিল", "স্বরাষ্ট্র দপ্তর"]}}},
        {"question": "What is the name for the period in the 1960s known for cultural and social change?", "options": ["The Roaring Twenties", "The Swinging Sixties", "The Digital Age", "The Belle Époque"], "correct_answer": "The Swinging Sixties", "explanation": "Swinging Sixties was a youth-driven cultural revolution that took place in the United Kingdom during the mid-to-late 1960s, emphasising modernity and fun-loving hedonism.", "translations": {"bn": {"question": "১৯৬০-এর দশকে সাংস্কৃতিক ও সামাজিক পরিবর্তনের জন্য পরিচিত সময়কালটির নাম কী?", "options": ["দ্য রোরিং টুয়েন্টিজ", "দ্য সুইংগিং সিক্সটিজ", "দ্য ডিজিটাল এজ", "দ্য বেল ইপোক"]}}},
        {"question": "Which of these is a famous UK music festival?", "options": ["Coachella", "Lollapalooza", "Glastonbury", "Tomorrowland"], "correct_answer": "Glastonbury", "explanation": "Glastonbury Festival is a five-day festival of contemporary performing arts that takes place in Pilton, Somerset, England.", "translations": {"bn": {"question": "এর মধ্যে কোনটি যুক্তরাজ্যের একটি বিখ্যাত সঙ্গীত উৎসব?", "options": ["কোচেলা", "লোলাপালুজা", "গ্লাস্টনবারি", "টুমরোল্যান্ড"]}}},
        {"question": "What must you have to watch live television in the UK?", "options": ["A satellite dish", "A cable subscription", "A TV Licence", "A smart TV"], "correct_answer": "A TV Licence", "explanation": "You need to be covered by a TV Licence to watch or record live TV programmes on any channel, or download or watch BBC programmes on iPlayer.", "translations": {"bn": {"question": "যুক্তরাজ্যে লাইভ টেলিভিশন দেখার জন্য আপনার কী থাকতে হবে?", "options": ["একটি স্যাটেলাইট ডিশ", "একটি কেবল সাবস্ক্রিপশন", "একটি টিভি লাইসেন্স", "একটি স্মার্ট টিভি"]}}}
    ]
  },
  exam4: {
    "questions": [
        {"question": "What flower is associated with Scotland?", "options": ["Rose", "Thistle", "Daffodil", "Shamrock"], "correct_answer": "Thistle", "explanation": "The thistle is the national flower of Scotland.", "translations": {"bn": {"question": "কোন ফুল স্কটল্যান্ডের সাথে জড়িত?", "options": ["গোলাপ", "থিসল", "ড্যাফোডিল", "শ্যামরক"]}}},
        {"question": "Who is the Head of State in the UK?", "options": ["The Prime Minister", "The Speaker of the House", "The Monarch", "The Archbishop of Canterbury"], "correct_answer": "The Monarch", "explanation": "The monarch (currently King Charles III) is the UK's Head of State.", "translations": {"bn": {"question": "যুক্তরাজ্যের রাষ্ট্রপ্রধান কে?", "options": ["প্রধানমন্ত্রী", "হাউসের স্পিকার", "রাজা", "ক্যান্টারবারির আর্চবিশপ"]}}},
        {"question": "Which of these is a famous British food?", "options": ["Pizza", "Sushi", "Fish and Chips", "Tacos"], "correct_answer": "Fish and Chips", "explanation": "Fish and chips is a hot dish consisting of fried fish in batter, served with chips. It is a common take-away food in the United Kingdom.", "translations": {"bn": {"question": "এর মধ্যে কোনটি একটি বিখ্যাত ব্রিটিশ খাবার?", "options": ["পিজা", "সুশি", "ফিশ অ্যান্ড চিপস", "টাকো"]}}},
        {"question": "What is the name of the UK's lower house of Parliament?", "options": ["The House of Lords", "The House of Commons", "The Senate", "The Congress"], "correct_answer": "The House of Commons", "explanation": "The House of Commons is the lower house of the Parliament of the United Kingdom.", "translations": {"bn": {"question": "যুক্তরাজ্যের সংসদের নিম্নকক্ষের নাম কী?", "options": ["হাউস অফ লর্ডস", "হাউস অফ কমন্স", "সিনেট", "কংগ্রেস"]}}},
        {"question": "The story of the Loch Ness Monster is associated with which country?", "options": ["England", "Wales", "Northern Ireland", "Scotland"], "correct_answer": "Scotland", "explanation": "Loch Ness is a large freshwater loch in the Scottish Highlands, famous for alleged sightings of the cryptozoological Loch Ness Monster.", "translations": {"bn": {"question": "লচ নেস মনস্টারের গল্প কোন দেশের সাথে জড়িত?", "options": ["ইংল্যান্ড", "ওয়েলস", "উত্তর আয়ারল্যান্ড", "স্কটল্যান্ড"]}}},
        {"question": "What does it mean to be a 'conscientious objector'?", "options": ["Someone who objects to paying taxes", "Someone who refuses to serve in the armed forces for moral or religious reasons", "Someone who objects to jury service", "Someone who protests against the government"], "correct_answer": "Someone who refuses to serve in the armed forces for moral or religious reasons", "explanation": "A conscientious objector is an individual who has claimed the right to refuse to perform military service on the grounds of freedom of thought, conscience, or religion.", "translations": {"bn": {"question": "'সচেতন আপত্তিকারী' হওয়ার অর্থ কী?", "options": ["কর দিতে আপত্তি করে এমন কেউ", "নৈতিক বা ধর্মীয় কারণে সশস্ত্র বাহিনীতে কাজ করতে অস্বীকার করে এমন কেউ", "জুরি পরিষেবাতে আপত্তি করে এমন কেউ", "সরকারের বিরুদ্ধে প্রতিবাদ করে এমন কেউ"]}}},
        {"question": "Which event led to the establishment of the Church of England?", "options": ["The Battle of Hastings", "The desire of Henry VIII to divorce his wife", "The Glorious Revolution", "The signing of the Magna Carta"], "correct_answer": "The desire of Henry VIII to divorce his wife", "explanation": "The English Reformation began with Henry VIII's quest for an annulment of his marriage, leading to a separation from the Roman Catholic Church and the establishment of the independent Church of England.", "translations": {"bn": {"question": "কোন ঘটনাটি চার্চ অফ ইংল্যান্ড প্রতিষ্ঠার দিকে পরিচালিত করেছিল?", "options": ["হেস্টিংসের যুদ্ধ", "অষ্টম হেনরির তার স্ত্রীকে তালাক দেওয়ার ইচ্ছা", "গৌরবময় বিপ্লব", "ম্যাগনা কার্টা স্বাক্ষর"]}}},
        {"question": "What is the maximum number of people who can sit in the House of Commons?", "options": ["450", "550", "650", "750"], "correct_answer": "650", "explanation": "There are 650 Members of Parliament (MPs), each representing a single constituency.", "translations": {"bn": {"question": "হাউস অফ কমন্সে সর্বোচ্চ কতজন বসতে পারে?", "options": ["৪৫০", "৫৫০", "৬৫০", "৭৫০"]}}},
        {"question": "Which famous British nurse is known for her work during the Crimean War?", "options": ["Marie Curie", "Florence Nightingale", "Mary Seacole", "Edith Cavell"], "correct_answer": "Florence Nightingale", "explanation": "Florence Nightingale was an English social reformer, statistician and the founder of modern nursing. She came to prominence while serving as a manager and trainer of nurses during the Crimean War.", "translations": {"bn": {"question": "কোন বিখ্যাত ব্রিটিশ নার্স ক্রিমিয়ান যুদ্ধের সময় তার কাজের জন্য পরিচিত?", "options": ["মেরি কুরি", "ফ্লোরেন্স নাইটিঙ্গেল", "মেরি সিকোল", "এডিথ কাভেল"]}}},
        {"question": "What is a 'referendum'?", "options": ["A general election", "A vote on a single political question", "A local council election", "A debate in Parliament"], "correct_answer": "A vote on a single political question", "explanation": "A referendum is a direct vote by the electorate on a particular proposal or issue.", "translations": {"bn": {"question": "'গণভোট' কী?", "options": ["একটি সাধারণ নির্বাচন", "একটি একক রাজনৈতিক প্রশ্নের উপর ভোট", "একটি স্থানীয় কাউন্সিল নির্বাচন", "সংসদে একটি বিতর্ক"]}}},
        {"question": "Who appoints the members of the House of Lords?", "options": ["The public", "The Prime Minister", "The Monarch, on the advice of the Prime Minister", "The Speaker"], "correct_answer": "The Monarch, on the advice of the Prime Minister", "explanation": "Most new members of the House of Lords are appointed by the monarch on the advice of the Prime Minister.", "translations": {"bn": {"question": "হাউস অফ লর্ডসের সদস্যদের কে নিয়োগ করেন?", "options": ["জনগণ", "প্রধানমন্ত্রী", "রাজা, প্রধানমন্ত্রীর পরামর্শে", "স্পিকার"]}}},
        {"question": "Which king was executed in 1649 after the English Civil War?", "options": ["Charles I", "Charles II", "James II", "Henry VIII"], "correct_answer": "Charles I", "explanation": "Charles I was executed for treason in January 1649, following the English Civil War.", "translations": {"bn": {"question": "ইংরেজ গৃহযুদ্ধের পর ১৬৪৯ সালে কোন রাজাকে মৃত্যুদণ্ড দেওয়া হয়েছিল?", "options": ["প্রথম চার্লস", "দ্বিতীয় চার্লস", "দ্বিতীয় জেমস", "অষ্টম হেনরি"]}}},
        {"question": "What is the national sport of Wales?", "options": ["Football", "Cricket", "Rugby Union", "Golf"], "correct_answer": "Rugby Union", "explanation": "Rugby Union is seen as the national sport of Wales and is a large part of the country's culture.", "translations": {"bn": {"question": "ওয়েলসের জাতীয় খেলা কোনটি?", "options": ["ফুটবল", "ক্রিকেট", "রাগবি ইউনিয়ন", "গল্ফ"]}}},
        {"question": "The Eden Project, famous for its large biomes, is in which part of the UK?", "options": ["Cornwall", "Yorkshire", "The Scottish Highlands", "Kent"], "correct_answer": "Cornwall", "explanation": "The Eden Project is a visitor attraction in Cornwall, England, UK. Inside the two biomes are plants that are collected from many diverse climates and environments.", "translations": {"bn": {"question": "ইডেন প্রজেক্ট, যা তার বিশাল বায়োমের জন্য বিখ্যাত, যুক্তরাজ্যের কোন অংশে অবস্থিত?", "options": ["কর্নওয়াল", "ইয়র্কশায়ার", "স্কটিশ হাইল্যান্ডস", "কেন্ট"]}}},
        {"question": "What is the 'Shadow Cabinet'?", "options": ["A committee of civil servants", "A group of senior members of the opposition party", "A secret government committee", "The monarch's personal advisors"], "correct_answer": "A group of senior members of the opposition party", "explanation": "The Shadow Cabinet is a team of senior spokespeople chosen by the Leader of the Opposition to mirror the Cabinet in Government.", "translations": {"bn": {"question": "'ছায়া মন্ত্রিসভা' কী?", "options": ["সরকারি কর্মচারীদের একটি কমিটি", "বিরোধী দলের সিনিয়র সদস্যদের একটি দল", "একটি গোপন সরকারি কমিটি", "রাজার ব্যক্তিগত উপদেষ্টা"]}}},
        {"question": "When is St. Patrick's Day celebrated?", "options": ["1st March", "17th March", "23rd April", "30th November"], "correct_answer": "17th March", "explanation": "St. Patrick's Day, the feast day of the patron saint of Ireland, is celebrated on 17th March.", "translations": {"bn": {"question": "সেন্ট প্যাট্রিক ডে কখন পালিত হয়?", "options": ["১লা মার্চ", "১৭ই মার্চ", "২৩শে এপ্রিল", "৩০শে নভেম্বর"]}}},
        {"question": "Who defeated the Spanish Armada in 1588?", "options": ["Henry VIII", "Elizabeth I", "William the Conqueror", "Queen Victoria"], "correct_answer": "Elizabeth I", "explanation": "The Spanish Armada was a Spanish fleet that sailed against England under the command of the Duke of Medina Sidonia in 1588, with the intention of overthrowing Elizabeth I of England.", "translations": {"bn": {"question": "১৫৮৮ সালে স্প্যানিশ আর্মাডাকে কে পরাজিত করেন?", "options": ["অষ্টম হেনরি", "প্রথম এলিজাবেথ", "উইলিয়াম দ্য কনকারার", "রানী ভিক্টোরিয়া"]}}},
        {"question": "You must be how old to stand for public office?", "options": ["16", "18", "21", "25"], "correct_answer": "18", "explanation": "You must be at least 18 years old to stand as a candidate in most elections in the UK.", "translations": {"bn": {"question": "সরকারি পদের জন্য প্রার্থী হতে আপনার বয়স কত হতে হবে?", "options": ["১৬", "১৮", "২১", "২৫"]}}},
        {"question": "The Beatles came from which UK city?", "options": ["London", "Manchester", "Liverpool", "Birmingham"], "correct_answer": "Liverpool", "explanation": "The Beatles were an English rock band formed in Liverpool in 1960.", "translations": {"bn": {"question": "বিটলস যুক্তরাজ্যের কোন শহর থেকে এসেছে?", "options": ["লন্ডন", "ম্যানচেস্টার", "লিভারপুল", "বার্মিংহাম"]}}},
        {"question": "What is 'habeas corpus'?", "options": ["A type of tax", "A legal right to be brought before a court if arrested", "A parliamentary procedure", "A royal decree"], "correct_answer": "A legal right to be brought before a court if arrested", "explanation": "The Habeas Corpus Act of 1679 is a procedural device to force the courts to determine whether a person is being unlawfully imprisoned.", "translations": {"bn": {"question": "'হেবিয়াস কর্পাস' কী?", "options": ["এক ধরণের কর", "গ্রেপ্তার হলে আদালতের সামনে হাজির হওয়ার আইনি অধিকার", "একটি সংসদীয় পদ্ধতি", "একটি রাজকীয় ফরমান"]}}},
        {"question": "Which of these is a famous university in the UK?", "options": ["Harvard", "Yale", "Oxford", "Sorbonne"], "correct_answer": "Oxford", "explanation": "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world.", "translations": {"bn": {"question": "এর মধ্যে কোনটি যুক্তরাজ্যের একটি বিখ্যাত বিশ্ববিদ্যালয়?", "options": ["হার্ভার্ড", "ইয়েল", "অক্সফোর্ড", "সোরবোন"]}}},
        {"question": "What is the name of the flag of the United Kingdom?", "options": ["The Stars and Stripes", "The Maple Leaf", "The Union Flag", "The Tricolour"], "correct_answer": "The Union Flag", "explanation": "The national flag of the United Kingdom is the Union Flag, also known as the Union Jack.", "translations": {"bn": {"question": "যুক্তরাজ্যের পতাকার নাম কী?", "options": ["দ্য স্টারস অ্যান্ড স্ট্রাইপস", "দ্য ম্যাপল লিফ", "দ্য ইউনিয়ন ফ্ল্যাগ", "দ্য ট্রাইকালার"]}}},
        {"question": "Who was the British Prime Minister during most of World War II?", "options": ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"], "correct_answer": "Winston Churchill", "explanation": "Winston Churchill was Prime Minister of the United Kingdom from 1940 to 1945, during the Second World War, and again from 1951 to 1955.", "translations": {"bn": {"question": "দ্বিতীয় বিশ্বযুদ্ধের বেশিরভাগ সময় ব্রিটিশ প্রধানমন্ত্রী কে ছিলেন?", "options": ["নেভিল চেম্বারলেইন", "উইনস্টন চার্চিল", "ক্লেমেন্ট অ্যাটলি", "অ্যান্টনি ইডেন"]}}},
        {"question": "Which of these is a responsibility of UK citizens?", "options": ["To own a home", "To serve on a jury if called", "To join a political party", "To have children"], "correct_answer": "To serve on a jury if called", "explanation": "Jury service is a public duty, and all registered electors between the ages of 18 and 70 can be asked to serve.", "translations": {"bn": {"question": "এর মধ্যে কোনটি যুক্তরাজ্যের নাগরিকদের দায়িত্ব?", "options": ["একটি বাড়ির মালিক হওয়া", "ডাকলে জুরিতে কাজ করা", "একটি রাজনৈতিক দলে যোগ দেওয়া", "সন্তান ধারণ করা"]}}}
    ]
  },
  exam5: {
    "questions": [
        {"question": "What is the patron saint of Wales?", "options": ["St. George", "St. Andrew", "St. Patrick", "St. David"], "correct_answer": "St. David", "explanation": "Saint David is the patron saint of Wales. His feast day is on 1st March.", "translations": {"bn": {"question": "ওয়েলসের পৃষ্ঠপোষক সন্ত কে?", "options": ["সেন্ট জর্জ", "সেন্ট অ্যান্ড্রু", "সেন্ট প্যাট্রিক", "সেন্ট ডেভিড"]}}},
        {"question": "The UK government is a...", "options": ["Dictatorship", "Parliamentary democracy", "Absolute monarchy", "Republic"], "correct_answer": "Parliamentary democracy", "explanation": "The United Kingdom is a parliamentary democracy under a constitutional monarchy.", "translations": {"bn": {"question": "যুক্তরাজ্য সরকার একটি...", "options": ["একনায়কতন্ত্র", "সংসদীয় গণতন্ত্র", "পরম রাজতন্ত্র", "প্রজাতন্ত্র"]}}},
        {"question": "Which of these famous structures is located in Wales?", "options": ["Stonehenge", "Hadrian's Wall", "Caernarfon Castle", "Edinburgh Castle"], "correct_answer": "Caernarfon Castle", "explanation": "Caernarfon Castle is a medieval fortress in Caernarfon, Gwynedd, north-west Wales.", "translations": {"bn": {"question": "এই বিখ্যাত কাঠামোগুলোর মধ্যে কোনটি ওয়েলসে অবস্থিত?", "options": ["স্টোনহেঞ্জ", "হ্যাড্রিয়ানের প্রাচীর", "কার্নারফন ক্যাসেল", "এডিনবার্গ ক্যাসেল"]}}},
        {"question": "What is the name for the day when people play practical jokes on each other?", "options": ["Boxing Day", "April Fool's Day", "May Day", "Halloween"], "correct_answer": "April Fool's Day", "explanation": "April Fool's Day on 1st April is a day when people traditionally play practical jokes and hoaxes on each other.", "translations": {"bn": {"question": "যেদিন মানুষ একে অপরের সাথে মজা করে তার নাম কী?", "options": ["বক্সিং ডে", "এপ্রিল ফুলস ডে", "মে ডে", "হ্যালোইন"]}}},
        {"question": "Who can you contact if you disagree with a decision made by a government department?", "options": ["The police", "The Parliamentary and Health Service Ombudsman", "Your local GP", "The Queen"], "correct_answer": "The Parliamentary and Health Service Ombudsman", "explanation": "If you think a UK government department or another UK public organisation has not treated you fairly or has given you a poor service, you can complain to the Ombudsman.", "translations": {"bn": {"question": "সরকারি কোনো বিভাগের সিদ্ধান্তে আপনি একমত না হলে কার সাথে যোগাযোগ করতে পারেন?", "options": ["পুলিশ", "সংসদীয় ও স্বাস্থ্য পরিষেবা ন্যায়পাল", "আপনার স্থানীয় জিপি", "রানী"]}}},
        {"question": "In which year were women first given the right to vote in the UK?", "options": ["1832", "1918", "1928", "1945"], "correct_answer": "1918", "explanation": "The Representation of the People Act 1918 granted the vote to women over the age of 30 who met a property qualification. Universal suffrage for all adults over 21 was established in 1928.", "translations": {"bn": {"question": "যুক্তরাজ্যে নারীরা প্রথম কোন সালে ভোটের অধিকার পায়?", "options": ["১৮৩২", "১৯১৮", "১৯২৮", "১৯৪৫"]}}},
        {"question": "What is the name of the body that controls the UK's money supply and interest rates?", "options": ["The Treasury", "The Bank of England", "The Royal Mint", "The London Stock Exchange"], "correct_answer": "The Bank of England", "explanation": "The Bank of England is the central bank of the United Kingdom and the model on which most modern central banks have been based. It is responsible for monetary policy.", "translations": {"bn": {"question": "যুক্তরাজ্যের অর্থ সরবরাহ এবং সুদের হার নিয়ন্ত্রণকারী সংস্থার নাম কী?", "options": ["ট্রেজারি", "ব্যাংক অফ ইংল্যান্ড", "দ্য রয়্যাল মিন্ট", "লন্ডন স্টক এক্সচেঞ্জ"]}}},
        {"question": "The 'Last Night of the Proms' is a famous event in which field?", "options": ["Theatre", "Sport", "Classical Music", "Literature"], "correct_answer": "Classical Music", "explanation": "The Last Night of the Proms is the culmination of the BBC Proms, an eight-week summer season of daily orchestral classical music concerts.", "translations": {"bn": {"question": "'লাস্ট নাইট অফ দ্য প্রমস' কোন ক্ষেত্রে একটি বিখ্যাত অনুষ্ঠান?", "options": ["থিয়েটার", "খেলাধুলা", "শাস্ত্রীয় সঙ্গীত", "সাহিত্য"]}}},
        {"question": "Which of these is NOT a Crown Dependency?", "options": ["The Isle of Man", "The Isle of Wight", "Jersey", "Guernsey"], "correct_answer": "The Isle of Wight", "explanation": "The Isle of Wight is a county and the largest and second-most populous island of England. The Isle of Man, Jersey and Guernsey are self-governing Crown Dependencies.", "translations": {"bn": {"question": "এর মধ্যে কোনটি ক্রাউন ডিপেন্ডেন্সি নয়?", "options": ["আইল অফ ম্যান", "আইল অফ ওয়াইট", "জার্সি", "গুর্নসি"]}}},
        {"question": "Who has the power to dismiss the Prime Minister?", "options": ["The Public", "The Monarch", "The Speaker", "The House of Lords"], "correct_answer": "The Monarch", "explanation": "The monarch retains the constitutional power to dismiss a prime minister, but this is a power that would only be exercised in very extreme circumstances.", "translations": {"bn": {"question": "প্রধানমন্ত্রীর বরখাস্ত করার ক্ষমতা কার আছে?", "options": ["জনগণ", "রাজা", "স্পিকার", "হাউস অফ লর্ডস"]}}},
        {"question": "The Bayeux Tapestry depicts which historical event?", "options": ["The signing of the Magna Carta", "The Norman Conquest of England", "The Great Fire of London", "The Battle of Waterloo"], "correct_answer": "The Norman Conquest of England", "explanation": "The Bayeux Tapestry is an embroidered cloth nearly 70 metres long which depicts the events leading up to the Norman conquest of England concerning William, Duke of Normandy, and Harold, Earl of Wessex, later King of England, and culminating in the Battle of Hastings.", "translations": {"bn": {"question": "বেয়াক্স ট্যাপেস্ট্রি কোন ঐতিহাসিক ঘটনাকে চিত্রিত করে?", "options": ["ম্যাগনা কার্টা স্বাক্ষর", "ইংল্যান্ডের নরম্যান বিজয়", "লন্ডনের মহাঅগ্নিকাণ্ড", "ওয়াটারলুর যুদ্ধ"]}}},
        {"question": "What is the speed limit in a built-up area unless otherwise stated?", "options": ["20 mph", "30 mph", "40 mph", "50 mph"], "correct_answer": "30 mph", "explanation": "The speed limit in built-up areas (where there are streetlights) is 30 mph unless signs show otherwise.", "translations": {"bn": {"question": "অন্যথায় উল্লেখ না থাকলে একটি বিল্ট-আপ এলাকায় গতিসীমা কত?", "options": ["২০ মাইল প্রতি ঘন্টা", "৩০ মাইল প্রতি ঘন্টা", "৪০ মাইল প্রতি ঘন্টা", "৫০ মাইল প্রতি ঘন্টা"]}}},
        {"question": "Which of these is a famous British fashion designer?", "options": ["Coco Chanel", "Giorgio Armani", "Vivienne Westwood", "Ralph Lauren"], "correct_answer": "Vivienne Westwood", "explanation": "Dame Vivienne Westwood was an English fashion designer and businesswoman, largely responsible for bringing modern punk and new wave fashions into the mainstream.", "translations": {"bn": {"question": "এর মধ্যে কে একজন বিখ্যাত ব্রিটিশ ফ্যাশন ডিজাইনার?", "options": ["কোকো চ্যানেল", "জিওর্জিও আরমানি", "ভিভিয়েন ওয়েস্টউড", "রালফ লরেন"]}}},
        {"question": "What is the 'Civil Service'?", "options": ["The armed forces", "A volunteer organisation", "The politically neutral employees of the government", "A charity organisation"], "correct_answer": "The politically neutral employees of the government", "explanation": "The Civil Service is the permanent, politically impartial professional branch of government.", "translations": {"bn": {"question": "'সিভিল সার্ভিস' কী?", "options": ["সশস্ত্র বাহিনী", "একটি স্বেচ্ছাসেবী সংস্থা", "সরকারের রাজনৈতিকভাবে নিরপেক্ষ কর্মচারী", "একটি দাতব্য সংস্থা"]}}},
        {"question": "Where does the UK Parliament meet?", "options": ["10 Downing Street", "Buckingham Palace", "The Palace of Westminster", "The Tower of London"], "correct_answer": "The Palace of Westminster", "explanation": "The Palace of Westminster serves as the meeting place for both the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom.", "translations": {"bn": {"question": "যুক্তরাজ্যের সংসদ কোথায় মিলিত হয়?", "options": ["১০ ডাউনিং স্ট্রিট", "বাকিংহাম প্যালেস", "প্যালেস অফ ওয়েস্টমিনস্টার", "টাওয়ার অফ লন্ডন"]}}},
        {"question": "Who was Boudicca?", "options": ["A Roman empress", "A queen of a Celtic tribe who led an uprising against the Romans", "A medieval saint", "A Norman queen"], "correct_answer": "A queen of a Celtic tribe who led an uprising against the Romans", "explanation": "Boudicca was a queen of the British Celtic Iceni tribe who led an uprising against the conquering forces of the Roman Empire in AD 60 or 61.", "translations": {"bn": {"question": "বৌডিকা কে ছিলেন?", "options": ["একজন রোমান সম্রাজ্ঞী", "একটি সেল্টিক উপজাতির রানী যিনি রোমানদের বিরুদ্ধে বিদ্রোহের নেতৃত্ব দিয়েছিলেন", "একজন মধ্যযুগীয় সাধু", "একজন নরম্যান রানী"]}}},
        {"question": "What is a 'by-election'?", "options": ["An election held between general elections to fill a vacant seat", "A local election", "An election for the Prime Minister", "A second round of voting"], "correct_answer": "An election held between general elections to fill a vacant seat", "explanation": "A by-election occurs when a seat in the House of Commons becomes vacant between General Elections.", "translations": {"bn": {"question": "'উপনির্বাচন' কী?", "options": ["সাধারণ নির্বাচনের মধ্যে একটি শূন্য আসন পূরণের জন্য অনুষ্ঠিত নির্বাচন", "একটি স্থানীয় নির্বাচন", "প্রধানমন্ত্রীর জন্য একটি নির্বাচন", "ভোটের দ্বিতীয় দফা"]}}},
        {"question": "What is the Lake District?", "options": ["A region and national park in Cumbria, northwest England", "A series of lakes in Scotland", "A man-made reservoir in Wales", "A financial district in London"], "correct_answer": "A region and national park in Cumbria, northwest England", "explanation": "The Lake District is a mountainous region in North West England. A popular holiday destination, it is famous for its lakes, forests and mountains (or fells).", "translations": {"bn": {"question": "লেক ডিস্ট্রিক্ট কী?", "options": ["উত্তর-পশ্চিম ইংল্যান্ডের কামব্রিয়ার একটি অঞ্চল এবং জাতীয় উদ্যান", "স্কটল্যান্ডের হ্রদগুলোর একটি সিরিজ", "ওয়েলসের একটি মানবসৃষ্ট জলাধার", "লন্ডনের একটি আর্থিক জেলা"]}}},
        {"question": "Which of these is a devolved power in Scotland?", "options": ["Defence", "Immigration", "Foreign Policy", "Education"], "correct_answer": "Education", "explanation": "Education is a devolved matter, meaning the Scottish Parliament has the power to make laws on it. Defence, immigration and foreign policy are reserved matters, handled by the UK Parliament.", "translations": {"bn": {"question": "এর মধ্যে কোনটি স্কটল্যান্ডের একটি হস্তান্তরিত ক্ষমতা?", "options": ["প্রতিরক্ষা", "অভিবাসন", "বৈদেশিক নীতি", "শিক্ষা"]}}},
        {"question": "What is 'small talk' in British culture?", "options": ["Serious political discussion", "Polite conversation about unimportant things", "A formal debate", "Whispering"], "correct_answer": "Polite conversation about unimportant things", "explanation": "Small talk is a form of polite conversation about unimportant or uncontroversial matters, such as the weather, which is very common in the UK.", "translations": {"bn": {"question": "ব্রিটিশ সংস্কৃতিতে 'স্মল টক' কী?", "options": ["গুরুতর রাজনৈতিক আলোচনা", "অগুরুত্বপূর্ণ বিষয় নিয়ে ভদ্র আলাপ", "একটি আনুষ্ঠানিক বিতর্ক", "ফিসফিস করা"]}}},
        {"question": "Who invented the World Wide Web?", "options": ["Bill Gates", "Steve Jobs", "Sir Tim Berners-Lee", "Alan Turing"], "correct_answer": "Sir Tim Berners-Lee", "explanation": "Sir Tim Berners-Lee, a British computer scientist, invented the World Wide Web in 1989.", "translations": {"bn": {"question": "ওয়ার্ল্ড ওয়াইড ওয়েব কে আবিষ্কার করেন?", "options": ["বিল গেটস", "স্টিভ জবস", "স্যার টিম বার্নার্স-লি", "অ্যালান টুরিং"]}}},
        {"question": "If you are self-employed, who are you responsible for paying your tax to?", "options": ["Your local council", "HM Revenue and Customs (HMRC)", "The Department for Work and Pensions", "Your clients"], "correct_answer": "HM Revenue and Customs (HMRC)", "explanation": "Self-employed individuals are responsible for paying their own tax and National Insurance contributions directly to HMRC through a process called Self Assessment.", "translations": {"bn": {"question": "আপনি যদি স্ব-নিযুক্ত হন, তাহলে আপনার কর পরিশোধের জন্য আপনি কার কাছে দায়ী?", "options": ["আপনার স্থানীয় কাউন্সিল", "এইচএম রেভিনিউ অ্যান্ড কাস্টমস (HMRC)", "কর্ম ও পেনশন বিভাগ", "আপনার ক্লায়েন্ট"]}}},
        {"question": "The 'Proms' are a series of concerts of which type of music?", "options": ["Rock", "Pop", "Jazz", "Classical"], "correct_answer": "Classical", "explanation": "The Proms is an eight-week summer season of daily orchestral classical music concerts and other events held annually, predominantly in the Royal Albert Hall in central London.", "translations": {"bn": {"question": "'প্রমস' কোন ধরনের সঙ্গীতের কনসার্টের একটি সিরিজ?", "options": ["রক", "পপ", "জ্যাজ", "শাস্ত্রীয়"]}}},
        {"question": "What is the official church in Scotland?", "options": ["The Church of England", "The Catholic Church", "The Church of Scotland", "The Baptist Church"], "correct_answer": "The Church of Scotland", "explanation": "The Church of Scotland, a Presbyterian church, is the national church and is not subject to state control.", "translations": {"bn": {"question": "স্কটল্যান্ডের সরকারি গির্জা কোনটি?", "options": ["চার্চ অফ ইংল্যান্ড", "ক্যাথলিক চার্চ", "চার্চ অফ স্কটল্যান্ড", "ব্যাপটিস্ট চার্চ"]}}}
    ]
  },
  exam6: {
    "questions": [
        {"question": "How often is the census taken in the UK?", "options": ["Every year", "Every 5 years", "Every 10 years", "Every 20 years"], "correct_answer": "Every 10 years", "explanation": "A census is a count of all people and households. It is taken every 10 years in the UK.", "translations": {"bn": {"question": "যুক্তরাজ্যে আদমশুমারি কত বছর পর পর করা হয়?", "options": ["প্রতি বছর", "প্রতি ৫ বছর", "প্রতি ১০ বছর", "প্রতি ২০ বছর"]}}},
        {"question": "What is the symbol of Northern Ireland?", "options": ["Daffodil", "Thistle", "Rose", "Shamrock"], "correct_answer": "Shamrock", "explanation": "The shamrock, a type of clover, is a traditional symbol of Ireland and Northern Ireland.", "translations": {"bn": {"question": "উত্তর আয়ারল্যান্ডের প্রতীক কী?", "options": ["ড্যাফোডিল", "থিসল", "গোলাপ", "শ্যামরক"]}}},
        {"question": "Which king signed the Magna Carta?", "options": ["King John", "Richard the Lionheart", "Henry V", "Edward I"], "correct_answer": "King John", "explanation": "King John of England signed the Magna Carta at Runnymede in 1215.", "translations": {"bn": {"question": "কোন রাজা ম্যাগনা কার্টা স্বাক্ষর করেন?", "options": ["রাজা জন", "রিচার্ড দ্য লায়নহার্ট", "পঞ্চম হেনরি", "প্রথম এডওয়ার্ড"]}}},
        {"question": "What is the Turner Prize awarded for?", "options": ["Literature", "Music", "Contemporary Art", "Science"], "correct_answer": "Contemporary Art", "explanation": "The Turner Prize is an annual prize presented to a British visual artist.", "translations": {"bn": {"question": "টার্নার পুরস্কার কিসের জন্য দেওয়া হয়?", "options": ["সাহিত্য", "সঙ্গীত", "সমসাময়িক শিল্প", "বিজ্ঞান"]}}},
        {"question": "Who is the leader of the political party that is in opposition?", "options": ["The Prime Minister", "The Leader of the Opposition", "The Speaker", "The Monarch"], "correct_answer": "The Leader of the Opposition", "explanation": "The Leader of the Opposition is the leader of the largest political party in the House of Commons that is not in government.", "translations": {"bn": {"question": "বিরোধী রাজনৈতিক দলের নেতা কে?", "options": ["প্রধানমন্ত্রী", "বিরোধী দলের নেতা", "স্পিকার", "রাজা"]}}},
        {"question": "The 'Highlands' are a famous mountainous region in which country?", "options": ["Wales", "England", "Scotland", "Northern Ireland"], "correct_answer": "Scotland", "explanation": "The Scottish Highlands are a historic region of Scotland, known for their rugged mountains and lochs.", "translations": {"bn": {"question": "'হাইল্যান্ডস' কোন দেশের একটি বিখ্যাত পার্বত্য অঞ্চল?", "options": ["ওয়েলস", "ইংল্যান্ড", "স্কটল্যান্ড", "উত্তর আয়ারল্যান্ড"]}}},
        {"question": "What was the 'Blitz' during World War II?", "options": ["A naval battle", "A land invasion", "A sustained bombing campaign by Nazi Germany", "A secret spy operation"], "correct_answer": "A sustained bombing campaign by Nazi Germany", "explanation": "The Blitz was a German bombing offensive against Britain in 1940 and 1941, during the Second World War.", "translations": {"bn": {"question": "দ্বিতীয় বিশ্বযুদ্ধের সময় 'ব্লিটজ' কী ছিল?", "options": ["একটি নৌ যুদ্ধ", "একটি স্থল আক্রমণ", "নাৎসি জার্মানির একটি অবিরাম বোমাবর্ষণ অভিযান", "একটি গোপন গুপ্তচর অভিযান"]}}},
        {"question": "At what age are you entitled to a free bus pass in England?", "options": ["60", "65", "State pension age", "70"], "correct_answer": "State pension age", "explanation": "In England you can get a bus pass for free travel when you reach the female State Pension age, whether you’re a man or a woman.", "translations": {"bn": {"question": "ইংল্যান্ডে কত বছর বয়সে আপনি বিনামূল্যে বাস পাসের অধিকারী হন?", "options": ["৬০", "৬৫", "রাষ্ট্রীয় পেনশন বয়স", "৭০"]}}},
        {"question": "What is the name for the formal opening of a parliamentary session?", "options": ["The Prime Minister's Questions", "The Budget", "The State Opening of Parliament", "The Queen's Speech"], "correct_answer": "The State Opening of Parliament", "explanation": "The State Opening of Parliament marks the formal start of the parliamentary year and the Queen's Speech sets out the government's agenda for the coming session.", "translations": {"bn": {"question": "সংসদীয় অধিবেশনের আনুষ্ঠানিক উদ্বোধনের নাম কী?", "options": ["প্রধানমন্ত্রীর প্রশ্ন", "বাজেট", "সংসদের রাষ্ট্রীয় উদ্বোধন", "রাণীর ভাষণ"]}}},
        {"question": "Which of these is a famous British comedian?", "options": ["Jerry Seinfeld", "Chris Rock", "Rowan Atkinson", "Jim Carrey"], "correct_answer": "Rowan Atkinson", "explanation": "Rowan Atkinson is an English actor, comedian and writer, best known for his work on the sitcoms Blackadder and Mr. Bean.", "translations": {"bn": {"question": "এর মধ্যে কে একজন বিখ্যাত ব্রিটিশ কৌতুকাভিনেতা?", "options": ["জেরি সিনফেল্ড", "ক্রিস রক", "রোয়ান অ্যাটকিনসন", "জিম ক্যারি"]}}},
        {"question": "What does 'freedom of speech' mean?", "options": ["The right to say anything without consequences", "The right to express opinions and ideas without fear of government retaliation or censorship", "The right to remain silent", "The right to a fair trial"], "correct_answer": "The right to express opinions and ideas without fear of government retaliation or censorship", "explanation": "Freedom of speech is a principle that supports the freedom of an individual or a community to articulate their opinions and ideas without fear of retaliation, censorship, or legal sanction. There are some legal limits to this, such as incitement to violence.", "translations": {"bn": {"question": "'বাকস্বাধীনতা'র অর্থ কী?", "options": ["পরিণতি ছাড়াই যেকোনো কিছু বলার অধিকার", "সরকারি প্রতিশোধ বা সেন্সরশিপের ভয় ছাড়াই মতামত ও ধারণা প্রকাশের অধিকার", "চুপ থাকার অধিকার", "ন্যায্য বিচারের অধিকার"]}}},
        {"question": "What did the Romans build in Britain?", "options": ["Cathedrals", "Roads, forts, and public baths", "Canals", "Railways"], "correct_answer": "Roads, forts, and public baths", "explanation": "During their occupation of Britain, the Romans built an extensive network of roads, as well as forts, villas, and public buildings like baths.", "translations": {"bn": {"question": "রোমানরা ব্রিটেনে কী নির্মাণ করেছিল?", "options": ["ক্যাথেড্রাল", "রাস্তা, দুর্গ এবং পাবলিক বাথ", "খাল", "রেলপথ"]}}},
        {"question": "What is the title given to the heir to the British throne?", "options": ["Duke of York", "Prince of Wales", "Earl of Wessex", "Duke of Cambridge"], "correct_answer": "Prince of Wales", "explanation": "The Prince of Wales is a title traditionally held by the heir apparent to the English and later British throne.", "translations": {"bn": {"question": "ব্রিটিশ সিংহাসনের উত্তরাধিকারীকে কী উপাধি দেওয়া হয়?", "options": ["ডিউক অফ ইয়র্ক", "প্রিন্স অফ ওয়েলস", "আর্ল অফ ওয়েসেক্স", "ডিউক অফ কেমব্রিজ"]}}},
        {"question": "Which of these is a popular style of music that originated in the UK?", "options": ["Hip Hop", "Country", "Britpop", "Salsa"], "correct_answer": "Britpop", "explanation": "Britpop is a UK-based music and culture movement of the mid-1990s which emphasised 'Britishness'.", "translations": {"bn": {"question": "এর মধ্যে কোনটি যুক্তরাজ্যে উদ্ভূত একটি জনপ্রিয় সঙ্গীত শৈলী?", "options": ["হিপ হপ", "কান্ট্রি", "ব্রিটপপ", "সালসা"]}}},
        {"question": "Who must approve a bill before it can become law?", "options": ["The Prime Minister", "The Speaker", "The Public", "The Monarch"], "correct_answer": "The Monarch", "explanation": "After a bill has passed through both Houses of Parliament, it must receive Royal Assent from the monarch to become an Act of Parliament (law).", "translations": {"bn": {"question": "একটি বিল আইনে পরিণত হওয়ার আগে কার অনুমোদন প্রয়োজন?", "options": ["প্রধানমন্ত্রী", "স্পিকার", "জনগণ", "রাজা"]}}},
        {"question": "What is 'Diwali'?", "options": ["The Jewish festival of lights", "The Hindu festival of lights", "The Muslim festival of breaking the fast", "The Sikh festival of harvest"], "correct_answer": "The Hindu festival of lights", "explanation": "Diwali is the five-day festival of lights, celebrated by millions of Hindus, Sikhs and Jains across the world.", "translations": {"bn": {"question": "'দিওয়ালি' কী?", "options": ["ইহুদিদের আলোর উৎসব", "হিন্দুদের আলোর উৎসব", "মুসলমানদের রোজা ভাঙার উৎসব", "শিখদের ফসল কাটার উৎসব"]}}},
        {"question": "What is the purpose of National Insurance?", "options": ["To pay for private health insurance", "To fund state benefits and services, such as the NHS and state pension", "To pay for road repairs", "To fund the military"], "correct_answer": "To fund state benefits and services, such as the NHS and state pension", "explanation": "National Insurance contributions are a tax on earnings paid by employees and employers to fund state benefits.", "translations": {"bn": {"question": "জাতীয় বীমার উদ্দেশ্য কী?", "options": ["বেসরকারি স্বাস্থ্য বীমার জন্য অর্থ প্রদান করা", "এনএইচএস এবং রাষ্ট্রীয় পেনশনের মতো রাষ্ট্রীয় সুবিধা এবং পরিষেবাগুলোর জন্য তহবিল সরবরাহ করা", "রাস্তা মেরামতের জন্য অর্থ প্রদান করা", "সামরিক বাহিনীকে তহবিল সরবরাহ করা"]}}},
        {"question": "Which of these is a famous prehistoric monument in England?", "options": ["The Pyramids", "The Colosseum", "Stonehenge", "The Acropolis"], "correct_answer": "Stonehenge", "explanation": "Stonehenge is a prehistoric monument on Salisbury Plain in Wiltshire, England, consisting of a ring of standing stones.", "translations": {"bn": {"question": "এর মধ্যে কোনটি ইংল্যান্ডের একটি বিখ্যাত প্রাগৈতিহাসিক স্মৃতিস্তম্ভ?", "options": ["পিরামিড", "কলোসিয়াম", "স্টোনহেঞ্জ", "অ্যাক্রোপলিস"]}}},
        {"question": "How are members of the House of Commons chosen?", "options": ["They are appointed by the Monarch", "They inherit their seats", "They are elected by the public in a general election", "They are chosen by the Prime Minister"], "correct_answer": "They are elected by the public in a general election", "explanation": "Members of Parliament (MPs) in the House of Commons are chosen through general elections held in constituencies across the UK.", "translations": {"bn": {"question": "হাউস অফ কমন্সের সদস্যরা কীভাবে নির্বাচিত হন?", "options": ["তারা রাজা দ্বারা নিযুক্ত হন", "তারা তাদের আসন উত্তরাধিকার সূত্রে পান", "তারা সাধারণ নির্বাচনে জনগণের দ্বারা নির্বাচিত হন", "তারা প্রধানমন্ত্রী দ্বারা নির্বাচিত হন"]}}},
        {"question": "What is the 'Territorial Army' now known as?", "options": ["The Army Reserve", "The Special Forces", "The Home Guard", "The Royal Marines"], "correct_answer": "The Army Reserve", "explanation": "The Territorial Army was renamed the Army Reserve in 2014.", "translations": {"bn": {"question": "'টেরিটোরিয়াল আর্মি' এখন কী নামে পরিচিত?", "options": ["আর্মি রিজার্ভ", "স্পেশাল ফোর্সেস", "হোম গার্ড", "রয়্যাল মেরিনস"]}}},
        {"question": "Which document sets out the government's plans for new laws at the start of a parliamentary session?", "options": ["The Budget", "The Queen's Speech", "The party manifesto", "The coalition agreement"], "correct_answer": "The Queen's Speech", "explanation": "The Queen's Speech is delivered by the monarch at the State Opening of Parliament and outlines the government's proposed policies and legislation for the new session.", "translations": {"bn": {"question": "কোন দলিলটি সংসদীয় অধিবেশনের শুরুতে নতুন আইনের জন্য সরকারের পরিকল্পনা নির্ধারণ করে?", "options": ["বাজেট", "রাণীর ভাষণ", "দলীয় ইশতেহার", "জোট চুক্তি"]}}},
        {"question": "Who was Emmeline Pankhurst?", "options": ["A famous scientist", "A novelist", "A leader of the British suffragette movement", "The first female MP"], "correct_answer": "A leader of the British suffragette movement", "explanation": "Emmeline Pankhurst was a British political activist who organised the UK suffragette movement and helped women win the right to vote.", "translations": {"bn": {"question": "এমেলিন পাঙ্কহার্স্ট কে ছিলেন?", "options": ["একজন বিখ্যাত বিজ্ঞানী", "একজন ঔপন্যাসিক", "ব্রিটিশ ভোটাধিকার আন্দোলনের একজন নেত্রী", "প্রথম মহিলা এমপি"]}}},
        {"question": "What is the name of the garden party held at Buckingham Palace by the Monarch?", "options": ["A Royal Gala", "A State Banquet", "A Garden Party", "A Coronation Ball"], "correct_answer": "A Garden Party", "explanation": "The Queen hosts three Garden Parties at Buckingham Palace and one at the Palace of Holyroodhouse in Scotland each summer, as a way of recognising and rewarding public service.", "translations": {"bn": {"question": "বাকিংহাম প্যালেসে রাজা কর্তৃক আয়োজিত বাগান পার্টির নাম কী?", "options": ["একটি রয়্যাল গালা", "একটি স্টেট ব্যাঙ্কুয়েট", "একটি গার্ডেন পার্টি", "একটি করোনেশন বল"]}}},
        {"question": "Which of these is a UK-based international charity?", "options": ["Red Cross", "UNICEF", "Oxfam", "Doctors Without Borders"], "correct_answer": "Oxfam", "explanation": "Oxfam is a confederation of 21 independent charitable organizations focusing on the alleviation of global poverty, founded in Oxford in 1942.", "translations": {"bn": {"question": "এর মধ্যে কোনটি যুক্তরাজ্য-ভিত্তিক আন্তর্জাতিক দাতব্য সংস্থা?", "options": ["রেড ক্রস", "ইউনিসেফ", "অক্সফাম", "ডক্টরস উইদাউট বর্ডারস"]}}}
    ]
  },
  exam7: { "questions": [] },
  exam8: { "questions": [] },
  exam9: { "questions": [] },
  exam10: { "questions": [] },
  exam11: { "questions": [] },
  exam12: { "questions": [] },
  exam13: { "questions": [] },
  exam14: { "questions": [] },
  exam15: { "questions": [] },
  exam16: { "questions": [] },
  exam17: { "questions": [] },
  exam18: { "questions": [] },
  exam19: { "questions": [] },
  exam20: { "questions": [] }
};

const allExams = [
    ...lifeInUKMockExams.exam3.questions,
    ...lifeInUKMockExams.exam4.questions,
    ...lifeInUKMockExams.exam5.questions,
    ...lifeInUKMockExams.exam6.questions
];

function getRandomQuestions(count: number): MockQuestion[] {
    const shuffled = allExams.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

lifeInUKMockExams.exam7.questions = getRandomQuestions(24);
lifeInUKMockExams.exam8.questions = getRandomQuestions(24);
lifeInUKMockExams.exam9.questions = getRandomQuestions(24);
lifeInUKMockExams.exam10.questions = getRandomQuestions(24);
lifeInUKMockExams.exam11.questions = getRandomQuestions(24);
lifeInUKMockExams.exam12.questions = getRandomQuestions(24);
lifeInUKMockExams.exam13.questions = getRandomQuestions(24);
lifeInUKMockExams.exam14.questions = getRandomQuestions(24);
lifeInUKMockExams.exam15.questions = getRandomQuestions(24);
lifeInUKMockExams.exam16.questions = getRandomQuestions(24);
lifeInUKMockExams.exam17.questions = getRandomQuestions(24);
lifeInUKMockExams.exam18.questions = getRandomQuestions(24);
lifeInUKMockExams.exam19.questions = getRandomQuestions(24);
lifeInUKMockExams.exam20.questions = getRandomQuestions(24);
