/**
 * questions.js
 * Each question has:
 *  - q       : question string
 *  - options : array of 4 answer strings
 *  - answer  : index (0-based) of the correct option
 *
 * Pre-shuffled: both question order and option order randomized.
 * Source: RCCG Sunday School — Advanced Concept Questions
 */
const QUESTIONS = [
  {
    q: "Absolute surrender to God, as the lesson defines it, means:",
    options: [
      "Letting go of our own will and embracing His will",
      "Surrendering all material possessions to the church",
      "Letting go of our own ways and embracing His ways",
      "Withdrawing from worldly society entirely",
    ],
    answer: 2,
  },
  {
    q: "In the 'Anatomy of Temptation' (1 John 2:16), the three entry points of sin are:",
    options: [
      "The lust of the flesh, the lust of the eyes, and the pride of life",
      "The desire of the flesh, the desire of the world, and the pride of self",
      "The lust of the flesh, the lust of the heart, and the pride of life",
      "The flesh, the world, and the devil",
    ],
    answer: 0,
  },
  {
    q: "The memory verse says bodily exercise 'profiteth little.' The lesson explains this to mean:",
    options: [
      "Exercise is essentially useless and should not be prioritised",
      "Exercise profits the body but harms the spirit",
      "Exercise has value for a season, but it must not be made one's god",
      "Exercise matters only for the young and physically active",
    ],
    answer: 2,
  },
  {
    q: "A 'spiritual altar' in the believer's life is best understood as:",
    options: [
      "A weekly act of devotion performed during church services",
      "A symbol of past commitments that no longer requires attention",
      "The inner place of consecration where one maintains a living relationship with God",
      "A physical place of worship where offerings are presented to God",
    ],
    answer: 2,
  },
  {
    q: "The 'gate of the eye' is also referred to in the lesson as:",
    options: [
      "The windows of the soul",
      "The lamp of the body",
      "The mirror of the soul",
      "The doorway of the heart",
    ],
    answer: 0,
  },
  {
    q: "Why does the lesson argue that being physically unhealthy can make holiness harder?",
    options: [
      "Sleep-deprivation and poor nutrition impair the prefrontal cortex, the seat of moral self-control",
      "Illness is a direct divine punishment that distances one from God",
      "Poor health prevents regular church attendance",
      "Unhealthy people are usually too weak to pray effectively",
    ],
    answer: 0,
  },
  {
    q: "According to Hebrews 5:11, the root reason some people are spiritually dull of hearing is that:",
    options: [
      "They were misled by false teachers in their early walk",
      "Their ears are not trained to recognise the voice of God",
      "Their heart is not cultivated to understand the things of Christ",
      "They have not yet received the indwelling Holy Spirit",
    ],
    answer: 2,
  },
  {
    q: "Spiritually defective eyes are best characterised as eyes that:",
    options: [
      "Are simply distracted by the busyness of everyday life",
      "Are physically damaged and require spiritual healing",
      "Are full of lust and, lacking the fear of God, are drawn toward iniquity",
      "Belong only to unbelievers and never to Christians",
    ],
    answer: 2,
  },
  {
    q: "The difference between a thankful believer and a complaining one is best described as:",
    options: [
      "A thankful believer fixes their focus on God's goodness while a complainer fixes theirs on problems",
      "A thankful believer experiences fewer hardships than a complainer",
      "A thankful believer suppresses negative feelings while a complainer expresses them",
      "A thankful believer ignores difficulties while a complainer dwells on them",
    ],
    answer: 0,
  },
  {
    q: "The inner-ear part that works with the semicircular canals to keep the body balanced is:",
    options: [
      "The cochlea",
      "The eardrum",
      "The vestibule",
      "The auditory nerve",
    ],
    answer: 2,
  },
  {
    q: "Acknowledging God as the source of every achievement means recognising that:",
    options: [
      "Human effort plays no part in a person's accomplishments",
      "All credit for a person's accomplishments ultimately belongs to God",
      "God rewards achievement only when thanks is given first",
      "All praise for a person's accomplishments ultimately belongs to God",
    ],
    answer: 1,
  },
  {
    q: "The 'gate of the ear' is best described as:",
    options: [
      "A sensor that selects what information we allow into the soul or discard",
      "A sensor that stores all information the body receives from the world",
      "A defence mechanism that blocks every form of harmful sound",
      "A faculty concerned only with physical hearing",
    ],
    answer: 0,
  },,
  {
    q: "The slave girl of Acts 16 teaches believers that:",
    options: [
      "Only false information can come from an evil spirit",
      "A message can be factually true yet still proceed from the wrong spirit",
      "Every accurate spiritual statement must originate from God",
      "The source of a message is irrelevant if the words are correct",
    ],
    answer: 1,
  },
  {
    q: "The lesson's conclusion teaches that receiving spiritual information is:",
    options: [
      "Dependent largely on the teaching of one's pastor",
      "Voluntary and within our power to choose",
      "Involuntary but within our power to resist",
      "Automatic for every genuine believer",
    ],
    answer: 1,
  },
  {
    q: "The key difference between tongues and prophecy, according to the Text Review, is that:",
    options: [
      "Both tongues and prophecy speak only to God",
      "Tongues are self-edifying (inward), while prophecy edifies others (outward)",
      "Both tongues and prophecy speak only to men",
      "Tongues edify others (outward), while prophecy is self-edifying (inward)",
    ],
    answer: 1,
  },
  {
    q: " The main reason believers should practise good etiquette is because:",
    options: [
   "It helps them gain acceptance and admiration from society",
   "It reflects their Christian character and honours God through their behaviour",
   "It allows them to avoid conflicts with people around them",
   "It makes them appear more educated and successful"
    ],
    answer: 1,
  },
  {
    q: "According to Revelation 3:16, the half-hearted approach to faith is identified as:",
    options: [
      "Half-heartedness",
      "Spiritual pride",
      "Lukewarmness",
      "Quiet unbelief",
    ],
    answer: 2,
  },
  {
    q: "The instruction 'Test all things; hold fast what is good' teaches believers to:",
    options: [
      "Believe only the prophecies that bring them personal benefit",
      "Accept every prophecy, since God speaks through spiritual gifts",
      "Examine every spiritual message carefully before accepting or rejecting it",
      "Reject prophecy generally, because false prophets are many",
    ],
    answer: 2,
  },
  {
    q: "Agabus's prophecy of famine (Acts 11) illustrates that genuine prophecy:",
    options: [
      "Should always be accompanied by a demand for obedience",
      "Is primarily meant to predict disaster so the church can flee",
      "Often carries a call to practical action and is validated by its fulfilment",
      "Is confirmed only when interpreted by an apostle",
    ],
    answer: 2,
  },
  {
    q: "The lesson teaches that thanksgiving should become a habit because:",
    options: [
      "A repeated habit of thanksgiving secures an easier and smoother life",
      "A consistent grateful attitude keeps believers focused on God rather than circumstances",
      "Thanksgiving is mainly an activity for the start of a new year",
      "Thanksgiving offered often enough prevents misfortune from occurring",
    ],
    answer: 1,
  },
];

export default QUESTIONS;