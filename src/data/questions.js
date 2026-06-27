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
    q: "The two main functions of the ear, according to the lesson, are:",
    options: [
      "Balance and discernment",
      "Hearing and transmission",
      "Hearing and balance",
      "Hearing and sensitivity",
    ],
    answer: 2,
  },
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
    q: "In Jesus' wilderness temptation, the offer of 'the kingdoms of the world' corresponds to:",
    options: [
      "The lust of the eyes",
      "The lust of the flesh",
      "The pride of life",
      "The desire for security",
    ],
    answer: 0,
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
  {
    q: "When something evil happens, the believer should understand that:",
    options: [
      "God is not its author, yet He can work it together for the good of His children",
      "God authors all events, both good and evil, for His purposes",
      "God is unaware of it until the believer brings it to Him in prayer",
      "God permits it as a direct punishment to correct His children",
    ],
    answer: 0,
  },
  {
    q: "'Sanctified eyes,' according to the lesson, are best understood as:",
    options: [
      "A natural trait that some believers are simply born with",
      "Eyes that have been physically protected from all worldly images",
      "The by-product of a regenerated life in Christ, consciously guarded against pollution",
      "A special grace given only to mature believers after years of service",
    ],
    answer: 2,
  },
  {
    q: "Giving thanks 'in everything' is described in Scripture as:",
    options: [
      "The will of God in Christ Jesus concerning every believer",
      "A spiritual discipline that matures believers over time",
      "A duty required mainly during seasons of blessing",
      "A response that guarantees a trouble-free life",
    ],
    answer: 0,
  },
  {
    q: "Rebuilding the altar in 'these Last Days' is necessary because:",
    options: [
      "The love between believers grows cold in many hearts",
      "False prophets will deceive the undiscerning",
      "Persecution against the church will intensify",
      "The love of God grows cold in many hearts",
    ],
    answer: 3,
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
  },
  {
    q: "When believers neglect their health while focusing on career, family and ministry, the lesson warns that:",
    options: [
      "They merely become less productive in ministry",
      "They put their health at risk, leading to problems ranging from minor to chronic",
      "They lose fellowship with God until their health is restored",
      "They experience spiritual stagnation as the primary consequence",
    ],
    answer: 1,
  },
  {
    q: "Neglecting God's altar inevitably leads a person to:",
    options: [
      "Lose their salvation immediately and permanently",
      "Experience material loss as a sign of God's displeasure",
      "Build other altars, devoting their time, talents and resources to them",
      "Remain spiritually neutral until they choose to repent",
    ],
    answer: 2,
  },
  {
    q: "Daniel's refusal of the king's rich food is best interpreted as:",
    options: [
      "A protest against the customs of Babylon",
      "A personal preference for plain food over royal delicacies",
      "A disciplined conviction that what you consume controls your output",
      "A temporary fast undertaken for a specific prayer request",
    ],
    answer: 2,
  },
  {
    q: "The single most important test of any prophecy is whether it:",
    options: [
      "Predicts future events that come to pass accurately",
      "Agrees with the written Word of God",
      "Comes from a person of strong spiritual reputation",
      "Stirs a powerful emotional response in the hearers",
    ],
    answer: 1,
  },
  {
    q: "The healthy-living tips in the lesson are summarised by the principle that believers should:",
    options: [
      "First involve God in their pursuit of health, then act practically and wisely",
      "Follow medical advice while keeping faith separate from health",
      "Rely primarily on willpower and discipline to maintain good health",
      "Depend on prayer alone, trusting God to keep them well",
    ],
    answer: 0,
  },
];

export default QUESTIONS;