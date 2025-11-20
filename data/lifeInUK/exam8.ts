import { MockQuestion } from "../../types";

export const exam8: { questions: MockQuestion[] } = {
  questions: [
    {
      question: "Who appoints the Prime Minister?",
      options: ["The public directly", "The Monarch", "The Speaker", "The House of Lords"],
      correct_answer: "The Monarch",
      explanation: "The Monarch formally appoints the Prime Minister, usually the leader of the largest party.",
      translations: { bn: { question: "প্রধানমন্ত্রীকে কে নিয়োগ দেন?", options: ["জনগণ সরাসরি", "রাজা", "স্পিকার", "হাউস অফ লর্ডস"] } }
    },
    {
      question: "How many parliamentary constituencies are there in the UK?",
      options: ["600", "650", "700", "750"],
      correct_answer: "650",
      explanation: "There are currently 650 constituencies, each electing one MP.",
      translations: { bn: { question: "যুক্তরাজ্যে কয়টি সংসদীয় নির্বাচনী এলাকা আছে?", options: ["৬০০", "৬৫০", "৭০০", "৭৫০"] } }
    },
    {
      question: "What is the role of the opposition?",
      options: ["To support the government", "To challenge and question the government", "To make laws", "To manage the economy"],
      correct_answer: "To challenge and question the government",
      explanation: "The opposition holds the government to account and provides an alternative.",
      translations: { bn: { question: "বিরোধীদের ভূমিকা কি?", options: ["সরকারকে সমর্থন করা", "সরকারকে চ্যালেঞ্জ ও প্রশ্ন করা", "আইন তৈরি করা", "অর্থনীতি পরিচালনা করা"] } }
    },
    {
      question: "What is 'Hansard'?",
      options: ["The Prime Minister's diary", "Reports of parliamentary proceedings", "A law book", "The name of the Parliament building"],
      correct_answer: "Reports of parliamentary proceedings",
      explanation: "Hansard is the official report of everything said in Parliament.",
      translations: { bn: { question: "'হানসার্ড' কি?", options: ["প্রধানমন্ত্রীর ডায়েরি", "সংসদীয় কার্যবিবরণীর প্রতিবেদন", "একটি আইনের বই", "সংসদ ভবনের নাম"] } }
    },
    {
      question: "Who chairs the debates in the House of Commons?",
      options: ["The Prime Minister", "The Speaker", "The Leader of the Opposition", "The Monarch"],
      correct_answer: "The Speaker",
      explanation: "The Speaker is the chief officer and highest authority of the House of Commons.",
      translations: { bn: { question: "হাউস অফ কমন্সে বিতর্কে সভাপতিত্ব করেন কে?", options: ["প্রধানমন্ত্রী", "স্পিকার", "বিরোধী দলের নেতা", "রাজা"] } }
    },
    {
      question: "Where does the Scottish Parliament meet?",
      options: ["Edinburgh", "Glasgow", "Aberdeen", "Inverness"],
      correct_answer: "Edinburgh",
      explanation: "The Scottish Parliament meets at Holyrood in Edinburgh.",
      translations: { bn: { question: "স্কটিশ পার্লামেন্ট কোথায় বসে?", options: ["এডিনবার্গ", "গ্লাসগো", "অ্যাবারডিন", "ইনভারনেস"] } }
    },
    {
      question: "Which of these is a devolved matter in Scotland?",
      options: ["Defence", "Foreign Affairs", "Health", "Immigration"],
      correct_answer: "Health",
      explanation: "Health, education, and transport are devolved matters; defence is reserved.",
      translations: { bn: { question: "এর মধ্যে কোনটি স্কটল্যান্ডে একটি হস্তান্তরিত বিষয়?", options: ["প্রতিরক্ষা", "পররাষ্ট্র", "স্বাস্থ্য", "অভিবাসন"] } }
    },
    {
      question: "What is the Commonwealth?",
      options: ["A European alliance", "An association of 56 sovereign states", "A British colony", "A charity"],
      correct_answer: "An association of 56 sovereign states",
      explanation: "The Commonwealth is a voluntary association of independent countries.",
      translations: { bn: { question: "কমনওয়েলথ কি?", options: ["একটি ইউরোপীয় জোট", "৫৬টি সার্বভৌম রাষ্ট্রের একটি সমিতি", "একটি ব্রিটিশ উপনিবেশ", "একটি দাতব্য সংস্থা"] } }
    },
    {
      question: "Who represents the Queen in Commonwealth realms?",
      options: ["The Prime Minister", "The Governor-General", "The Ambassador", "The President"],
      correct_answer: "The Governor-General",
      explanation: "In Commonwealth countries where the Queen is head of state, she is represented by a Governor-General.",
      translations: { bn: { question: "কমনওয়েলথ রাজ্যে রাণীর প্রতিনিধিত্ব কে করেন?", options: ["প্রধানমন্ত্রী", "গভর্নর-জেনারেল", "রাষ্ট্রদূত", "রাষ্ট্রপতি"] } }
    },
    {
      question: "How often are general elections usually held?",
      options: ["Every 3 years", "Every 4 years", "Every 5 years", "Every 10 years"],
      correct_answer: "Every 5 years",
      explanation: "General elections are usually held every 5 years.",
      translations: { bn: { question: "সাধারণ নির্বাচন সাধারণত কত ঘন ঘন অনুষ্ঠিত হয়?", options: ["প্রতি ৩ বছর", "প্রতি ৪ বছর", "প্রতি ৫ বছর", "প্রতি ১০ বছর"] } }
    },
    {
      question: "What is the minimum age to stand as an MP?",
      options: ["16", "18", "21", "25"],
      correct_answer: "18",
      explanation: "You must be 18 years old to stand for election as an MP.",
      translations: { bn: { question: "এমপি হিসেবে দাঁড়ানোর সর্বনিম্ন বয়স কত?", options: ["১৬", "১৮", "২১", "২৫"] } }
    },
    {
      question: "What is the 'Cabinet'?",
      options: ["A piece of furniture", "A committee of senior ministers", "The whole parliament", "The civil service"],
      correct_answer: "A committee of senior ministers",
      explanation: "The Cabinet is the senior decision-making body of the government.",
      translations: { bn: { question: "'মন্ত্রিসভা' কি?", options: ["আসবাবের একটি টুকরা", "সিনিয়র মন্ত্রীদের একটি কমিটি", "পুরো সংসদ", "সিভিল সার্ভিস"] } }
    },
    {
      question: "What is a 'by-election'?",
      options: ["An election in a single constituency to fill a vacancy", "A national election", "A local council election", "A vote on a specific issue"],
      correct_answer: "An election in a single constituency to fill a vacancy",
      explanation: "A by-election happens when an MP dies or resigns.",
      translations: { bn: { question: "'উপ-নির্বাচন' কি?", options: ["শূন্যপদ পূরণের জন্য একটি একক নির্বাচনী এলাকায় নির্বাচন", "একটি জাতীয় নির্বাচন", "একটি স্থানীয় কাউন্সিল নির্বাচন", "একটি নির্দিষ্ট বিষয়ে ভোট"] } }
    },
    {
      question: "Who makes up the 'Great Offices of State'?",
      options: ["PM, Chancellor, Foreign Secretary, Home Secretary", "PM, Speaker, Queen, Prince of Wales", "Army, Navy, Air Force, Police", "Judges, Magistrates, Lawyers, Police"],
      correct_answer: "PM, Chancellor, Foreign Secretary, Home Secretary",
      explanation: "These are the four most senior positions in the government.",
      translations: { bn: { question: "'গ্রেট অফিসেস অফ স্টেট' কারা গঠন করে?", options: ["প্রধানমন্ত্রী, চ্যান্সেলর, পররাষ্ট্র সচিব, স্বরাষ্ট্র সচিব", "প্রধানমন্ত্রী, স্পিকার, রানী, প্রিন্স অফ ওয়েলস", "সেনাবাহিনী, নৌবাহিনী, বিমান বাহিনী, পুলিশ", "বিচারক, ম্যাজিস্ট্রেট, আইনজীবী, পুলিশ"] } }
    },
    {
      question: "What is the role of the Civil Service?",
      options: ["To vote on laws", "To implement government policy impartially", "To campaign for parties", "To judge court cases"],
      correct_answer: "To implement government policy impartially",
      explanation: "Civil servants support the government in delivering public services impartially.",
      translations: { bn: { question: "সিভিল সার্ভিসের ভূমিকা কি?", options: ["আইনে ভোট দেওয়া", "নিরপেক্ষভাবে সরকারি নীতি বাস্তবায়ন করা", "দলের হয়ে প্রচার করা", "আদালতের মামলার বিচার করা"] } }
    },
    {
      question: "What is the 'judiciary'?",
      options: ["The police", "The army", "The judges and courts", "The prison service"],
      correct_answer: "The judges and courts",
      explanation: "The judiciary is the branch of the state responsible for interpreting the law.",
      translations: { bn: { question: "'বিচার বিভাগ' কি?", options: ["পুলিশ", "সেনাবাহিনী", "বিচারক এবং আদালত", "কারাগার পরিষেবা"] } }
    },
    {
      question: "Who settles disputes between employees and employers?",
      options: ["Criminal courts", "Employment Tribunals", "The police", "The House of Lords"],
      correct_answer: "Employment Tribunals",
      explanation: "Employment Tribunals hear claims about employment law.",
      translations: { bn: { question: "কর্মচারী এবং নিয়োগকর্তাদের মধ্যে বিরোধ কে নিষ্পত্তি করে?", options: ["ফৌজদারি আদালত", "এমপ্লয়মেন্ট ট্রাইব্যুনাল", "পুলিশ", "হাউস অফ লর্ডস"] } }
    },
    {
      question: "What is the 'Small Claims Track'?",
      options: ["A racing track", "A simplified court procedure for small values", "A tax system", "A benefit claim"],
      correct_answer: "A simplified court procedure for small values",
      explanation: "It is for claims of lower value (usually under £10,000 in England).",
      translations: { bn: { question: "'স্মল ক্লেইমস ট্র্যাক' কি?", options: ["একটি রেসিং ট্র্যাক", "ছোট মানের জন্য একটি সরলীকৃত আদালত পদ্ধতি", "একটি কর ব্যবস্থা", "একটি সুবিধা দাবি"] } }
    },
    {
      question: "Which country has its own legal system distinct from England?",
      options: ["Wales", "Northern Ireland", "Scotland", "Cornwall"],
      correct_answer: "Scotland",
      explanation: "Scotland has a legal system that is different from England, Wales, and Northern Ireland.",
      translations: { bn: { question: "কোন দেশের নিজস্ব আইনি ব্যবস্থা ইংল্যান্ড থেকে আলাদা?", options: ["ওয়েলস", "উত্তর আয়ারল্যান্ড", "স্কটল্যান্ড", "কর্নওয়াল"] } }
    },
    {
      question: "Who can serve on a jury?",
      options: ["Only lawyers", "Most citizens on the electoral register", "Only judges", "Police officers"],
      correct_answer: "Most citizens on the electoral register",
      explanation: "Jury service is a civic duty for registered voters aged 18-70.",
      translations: { bn: { question: "কে জুরিতে কাজ করতে পারেন?", options: ["শুধুমাত্র আইনজীবীরা", "ভোটার তালিকার অধিকাংশ নাগরিক", "শুধুমাত্র বিচারকরা", "পুলিশ কর্মকর্তারা"] } }
    },
    {
      question: "What is a 'policymaker'?",
      options: ["Someone who makes police uniforms", "A politician or civil servant who decides on new policies", "A judge", "A teacher"],
      correct_answer: "A politician or civil servant who decides on new policies",
      explanation: "They are responsible for creating plans of action for the government.",
      translations: { bn: { question: "'নীতিনির্ধারক' কে?", options: ["পুলিশের ইউনিফর্ম তৈরি করেন এমন কেউ", "একজন রাজনীতিবিদ বা বেসামরিক কর্মচারী যিনি নতুন নীতির বিষয়ে সিদ্ধান্ত নেন", "একজন বিচারক", "একজন শিক্ষক"] } }
    },
    {
      question: "Which organisation regulates the media in the UK?",
      options: ["Ofcom", "Ofgem", "Ofwat", "Ofsted"],
      correct_answer: "Ofcom",
      explanation: "Ofcom is the communications regulator.",
      translations: { bn: { question: "কোন সংস্থা যুক্তরাজ্যে মিডিয়া নিয়ন্ত্রণ করে?", options: ["অফকম", "অফগেম", "অফওয়াট", "অফস্টেড"] } }
    },
    {
      question: "What is 'The Crown'?",
      options: ["Just the Queen", "The state and the monarch", "A coin", "A building"],
      correct_answer: "The state and the monarch",
      explanation: "'The Crown' represents the monarch as the head of state and the government.",
      translations: { bn: { question: "'দ্য ক্রাউন' কি?", options: ["শুধুমাত্র রানী", "রাষ্ট্র এবং রাজা", "একটি মুদ্রা", "একটি ভবন"] } }
    },
    {
      question: "What happens if a vote in the Commons is tied?",
      options: ["The PM decides", "The Speaker has the casting vote", "The Queen decides", "They flip a coin"],
      correct_answer: "The Speaker has the casting vote",
      explanation: "The Speaker votes to break a tie, usually voting to keep the status quo.",
      translations: { bn: { question: "কমন্সে ভোট টাই হলে কি হবে?", options: ["প্রধানমন্ত্রী সিদ্ধান্ত নেন", "স্পিকারের কাস্টিং ভোট আছে", "রানী সিদ্ধান্ত নেন", "তারা একটি মুদ্রা টস করেন"] } }
    }
  ]
};