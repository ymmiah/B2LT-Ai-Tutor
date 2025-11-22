
import { MockQuestion } from "../../types";

export const exam12: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "What colour are the benches in the House of Commons?",
      options: ["Green", "Red", "Blue", "Brown"],
      correct_answer: "Green",
      explanation: "The Commons benches are green.",
      translations: { bn: { question: "হাউস অফ কমন্সের বেঞ্চগুলো কি রঙের?", options: ["সবুজ", "লাল", "নীল", "বাদামী"] } }
    },
    {
      question: "What colour are the benches in the House of Lords?",
      options: ["Red", "Green", "Blue", "Yellow"],
      correct_answer: "Red",
      explanation: "The Lords benches are red.",
      translations: { bn: { question: "হাউস অফ লর্ডসের বেঞ্চগুলো কি রঙের?", options: ["লাল", "সবুজ", "নীল", "হলুদ"] } }
    },
    {
      question: "Who keeps order during debates in the Commons?",
      options: ["The Speaker", "The Prime Minister", "The Queen", "The Whips"],
      correct_answer: "The Speaker",
      explanation: "The Speaker manages the debates impartially.",
      translations: { bn: { question: "কমন্সে বিতর্কের সময় কে শৃঙ্খলা বজায় রাখে?", options: ["স্পিকার", "প্রধানমন্ত্রী", "রানী", "হুইপ"] } }
    },
    {
      question: "What is the job of a 'Whip'?",
      options: ["To ensure MPs vote with their party", "To clean the Parliament", "To drive the PM", "To cook food"],
      correct_answer: "To ensure MPs vote with their party",
      explanation: "They enforce party discipline.",
      translations: { bn: { question: "'হুইপ'-এর কাজ কি?", options: ["এমপিরা তাদের দলের সাথে ভোট দেয় তা নিশ্চিত করা", "সংসদ পরিষ্কার করা", "প্রধানমন্ত্রীকে চালানো", "খাবার রান্না করা"] } }
    },
    {
      question: "How often does Prime Minister's Questions happen?",
      options: ["Every Wednesday", "Every day", "Every month", "Once a year"],
      correct_answer: "Every Wednesday",
      explanation: "It takes place when Parliament is sitting.",
      translations: { bn: { question: "প্রধানমন্ত্রীর প্রশ্ন কত ঘন ঘন হয়?", options: ["প্রতি বুধবার", "প্রতি দিন", "প্রতি মাসে", "বছরে একবার"] } }
    },
    {
      question: "Who sits in the Cabinet?",
      options: ["Senior government ministers", "All MPs", "The Queen and Prince", "Judges"],
      correct_answer: "Senior government ministers",
      explanation: "They are chosen by the Prime Minister.",
      translations: { bn: { question: "মন্ত্রিসভায় কারা বসেন?", options: ["সিনিয়র সরকারি মন্ত্রীরা", "সব এমপি", "রানী এবং রাজপুত্র", "বিচারক"] } }
    },
    {
      question: "What is the role of the Leader of the Opposition?",
      options: ["To lead the 'Shadow Cabinet'", "To support the PM", "To manage the police", "To count votes"],
      correct_answer: "To lead the 'Shadow Cabinet'",
      explanation: "They challenge the government and prepare to take over.",
      translations: { bn: { question: "বিরোধী দলের নেতার ভূমিকা কি?", options: ["'শ্যাডো ক্যাবিনেট' নেতৃত্ব দেওয়া", "প্রধানমন্ত্রীকে সমর্থন করা", "পুলিশ পরিচালনা করা", "ভোট গণনা করা"] } }
    },
    {
      question: "What is the Shadow Cabinet?",
      options: ["Senior opposition MPs who shadow government ministers", "A secret room", "Retired MPs", "The Lords"],
      correct_answer: "Senior opposition MPs who shadow government ministers",
      explanation: "They critique specific government departments.",
      translations: { bn: { question: "শ্যাডো ক্যাবিনেট কি?", options: ["সিনিয়র বিরোধী এমপি যারা সরকারি মন্ত্রীদের ছায়া দেন", "একটি গোপন ঘর", "অবসরপ্রাপ্ত এমপি", "লর্ডস"] } }
    },
    {
      question: "How are MPs elected in a General Election?",
      options: ["First Past the Post", "Proportional Representation", "Lottery", "By the Queen"],
      correct_answer: "First Past the Post",
      explanation: "The candidate with the most votes in a constituency wins.",
      translations: { bn: { question: "সাধারণ নির্বাচনে এমপিরা কিভাবে নির্বাচিত হন?", options: ["ফার্স্ট পাস্ট দ্য পোস্ট", "আনুপাতিক প্রতিনিধিত্ব", "লটারি", "রানী দ্বারা"] } }
    },
    {
      question: "How many constituencies are there in the UK?",
      options: ["650", "100", "500", "1000"],
      correct_answer: "650",
      explanation: "Each constituency elects one MP.",
      translations: { bn: { question: "যুক্তরাজ্যে কয়টি নির্বাচনী এলাকা আছে?", options: ["৬৫০", "১০০", "৫০০", "১০০০"] } }
    },
    {
      question: "Where do you go to vote?",
      options: ["A polling station", "The police station", "The post office", "The bank"],
      correct_answer: "A polling station",
      explanation: "Polling stations are open on election day.",
      translations: { bn: { question: "আপনি কোথায় ভোট দিতে যান?", options: ["একটি পোলিং স্টেশন", "থানা", "পোস্ট অফিস", "ব্যাংক"] } }
    },
    {
      question: "What time do polling stations usually open?",
      options: ["7 am to 10 pm", "9 am to 5 pm", "12 pm to 12 am", "8 am to 8 pm"],
      correct_answer: "7 am to 10 pm",
      explanation: "They are open long hours to allow everyone to vote.",
      translations: { bn: { question: "পোলিং স্টেশনগুলো সাধারণত কখন খোলে?", options: ["সকাল ৭টা থেকে রাত ১০টা", "সকাল ৯টা থেকে বিকাল ৫টা", "দুপুর ১২টা থেকে রাত ১২টা", "সকাল ৮টা থেকে রাত ৮টা"] } }
    },
    {
      question: "What is a by-election?",
      options: ["An election held when an MP dies or resigns", "A general election", "A local election", "A vote in the Lords"],
      correct_answer: "An election held when an MP dies or resigns",
      explanation: "It happens in a single constituency.",
      translations: { bn: { question: "উপ-নির্বাচন কি?", options: ["এমপি মারা গেলে বা পদত্যাগ করলে অনুষ্ঠিত নির্বাচন", "সাধারণ নির্বাচন", "স্থানীয় নির্বাচন", "লর্ডসে ভোট"] } }
    },
    {
      question: "Who do you vote for in local elections?",
      options: ["Councillors", "MPs", "The Prime Minister", "Judges"],
      correct_answer: "Councillors",
      explanation: "Councillors run the local authority.",
      translations: { bn: { question: "স্থানীয় নির্বাচনে আপনি কাকে ভোট দেন?", options: ["কাউন্সিলর", "এমপি", "প্রধানমন্ত্রী", "বিচারক"] } }
    },
    {
      question: "Where does the Scottish Parliament meet?",
      options: ["Holyrood (Edinburgh)", "Westminster", "Cardiff", "Belfast"],
      correct_answer: "Holyrood (Edinburgh)",
      explanation: "The Scottish Parliament building is in Holyrood.",
      translations: { bn: { question: "স্কটিশ পার্লামেন্ট কোথায় বসে?", options: ["হলিরুড (এডিনবার্গ)", "ওয়েস্টমিনস্টার", "কার্ডিফ", "বেলফাস্ট"] } }
    },
    {
      question: "Where does the Senedd (Welsh Parliament) meet?",
      options: ["Cardiff Bay", "Swansea", "London", "Newport"],
      correct_answer: "Cardiff Bay",
      explanation: "The Senedd is in Cardiff.",
      translations: { bn: { question: "সেনেড (ওয়েলশ পার্লামেন্ট) কোথায় বসে?", options: ["কার্ডিফ বে", "সোয়ানসি", "লন্ডন", "নিউপোর্ট"] } }
    },
    {
      question: "Where does the Northern Ireland Assembly meet?",
      options: ["Stormont (Belfast)", "Dublin", "Londonderry", "Lisburn"],
      correct_answer: "Stormont (Belfast)",
      explanation: "Stormont is the home of the NI Assembly.",
      translations: { bn: { question: "উত্তর আয়ারল্যান্ড অ্যাসেম্বলি কোথায় বসে?", options: ["স্টরমন্ট (বেলফাস্ট)", "ডাবলিন", "লন্ডনডেরি", "লিসবার্ন"] } }
    },
    {
      question: "Which of these is a devolved power?",
      options: ["Education", "Defence", "Foreign Policy", "Immigration"],
      correct_answer: "Education",
      explanation: "Education is managed separately in Scotland, Wales, and NI.",
      translations: { bn: { question: "এর মধ্যে কোনটি হস্তান্তরিত ক্ষমতা?", options: ["শিক্ষা", "প্রতিরক্ষা", "পররাষ্ট্র নীতি", "অভিবাসন"] } }
    },
    {
      question: "Which of these is a reserved power?",
      options: ["Defence", "Health", "Transport", "Housing"],
      correct_answer: "Defence",
      explanation: "Defence is decided by the UK Parliament for everyone.",
      translations: { bn: { question: "এর মধ্যে কোনটি সংরক্ষিত ক্ষমতা?", options: ["প্রতিরক্ষা", "স্বাস্থ্য", "পরিবহন", "হাউজিং"] } }
    },
    {
      question: "What are civil servants expected to be?",
      options: ["Politically neutral", "Members of the ruling party", "Judges", "Soldiers"],
      correct_answer: "Politically neutral",
      explanation: "They serve the government of the day regardless of party.",
      translations: { bn: { question: "বেসামরিক কর্মচারীদের কি হওয়া প্রত্যাশিত?", options: ["রাজনৈতিকভাবে নিরপেক্ষ", "শাসক দলের সদস্য", "বিচারক", "সৈনিক"] } }
    },
    {
      question: "What pays for local services like rubbish collection?",
      options: ["Council Tax", "Income Tax only", "Charity", "Fines"],
      correct_answer: "Council Tax",
      explanation: "Local authorities collect Council Tax.",
      translations: { bn: { question: "আবর্জনা সংগ্রহের মতো স্থানীয় পরিষেবাগুলির জন্য কী অর্থ প্রদান করে?", options: ["কাউন্সিল ট্যাক্স", "শুধুমাত্র আয়কর", "দাতব্য", "জরিমানা"] } }
    },
    {
      question: "Who elects the Mayor of London?",
      options: ["Residents of London", "The Queen", "Parliament", "The City Council"],
      correct_answer: "Residents of London",
      explanation: "The Mayor is directly elected.",
      translations: { bn: { question: "লন্ডনের মেয়র কে নির্বাচন করেন?", options: ["লন্ডনের বাসিন্দারা", "রানী", "সংসদ", "সিটি কাউন্সিল"] } }
    },
    {
      question: "What is the Commonwealth?",
      options: ["A voluntary association of independent nations", "An empire", "A bank", "A charity"],
      correct_answer: "A voluntary association of independent nations",
      explanation: "Member states work together on shared goals.",
      translations: { bn: { question: "কমনওয়েলথ কি?", options: ["স্বাধীন দেশগুলোর একটি স্বেচ্ছাসেবী সমিতি", "একটি সাম্রাজ্য", "একটি ব্যাংক", "একটি দাতব্য সংস্থা"] } }
    },
    {
      question: "Can you visit the Houses of Parliament?",
      options: ["Yes, the public can watch debates", "No, it is secret", "Only MPs families", "Only on Christmas"],
      correct_answer: "Yes, the public can watch debates",
      explanation: "There are public galleries.",
      translations: { bn: { question: "আপনি কি হাউস অফ পার্লামেন্ট পরিদর্শন করতে পারেন?", options: ["হ্যাঁ, জনগণ বিতর্ক দেখতে পারে", "না, এটা গোপন", "শুধুমাত্র এমপিদের পরিবার", "শুধুমাত্র ক্রিসমাসে"] } }
    }
  ]
};
