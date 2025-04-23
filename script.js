//array for random statements before quote
let statement = [
  'Your Quote of the day is: ',
  'The Word of the day is: ',
  'Todays bar is: ',

];

//This allows for their to be a random statenment each time a quote is delivered
const randomstatement = statement[Math.floor(Math.random() * statement.length)]

//Array of random possible quotes
let quote = [
    'Knowing yourself is the beginning of all wisdom. - Aristotle',
    'What is a friend? A single soul dwelling in two bodies. ― Aristotle',
    'No great mind has ever existed without a touch of madness. ― Aristotle',
    'A friend to all is a friend to none. ― Aristotle',
    'He who has overcome his fears will truly be free. - Aristotle',
    'You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius, Meditations',
    'The happiness of your life depends upon the quality of your thoughts - Marcus Aurelius, Meditations',
    'The best revenge is to be unlike him who performed the injury. - Marcus Aurelius, Meditations',
    'Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present. - Marcus Aurelius, Meditations',
    'If it is not right do not do it; if it is not true do not say it. - Marcus Aurelius, Meditations',
    'The only true wisdom is in knowing you know nothing. - Socrates',
    'There is only one good, knowledge, and one evil, ignorance. - Socrates',
    'To find yourself, think for yourself. - Socrates',
    'Be slow to fall into friendship, but when you are in, continue firm and constant. - Socrates',
    'Let him who would move the world first move himself. - Socrates',
  ];

  //Like above this allows for their to be a random quote after the statement each time a quote is requested
  const randomQuote = quote[Math.floor(Math.random() * quote.length)]

 //An array containg strings of phrases to help the user ponder on the quotes for longer throughtout the day 
  let leavingStatement = [
  'How might this wisdom apply to a current challenge in your life?',
  'Consider a past experience that either validates or contradicts this perspective.',
  'What would change in your daily interactions if you fully embraced this idea?',
  'Observe your thoughts when this quote comes to mind - what resists and what resonates?',
  'How might someone with an opposing viewpoint interpret this same wisdom?',
  'In what small way could you experiment with this philosophy today?',
  'What deeper question does this quote invite you to explore?',
  'Notice moments when this wisdom naturally reveals itself in everyday situations.',
];

//allows for there to be a leaving statement after every quote
const randomLeavingStatement = leavingStatement[Math.floor(Math.random() * leavingStatement.length)]


  console.log(randomstatement)
  console.log(randomQuote)
  console.log(randomLeavingStatement)