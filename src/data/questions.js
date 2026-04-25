/**
 * questions.js
 * Each question has:
 *  - q       : question string
 *  - options : array of 4 answer strings
 *  - answer  : index (0-based) of the correct option
 */
const QUESTIONS = [
  {
    q: "In Lesson 1, the title 'Son of Man' was also used by God when He spoke to prophets in the Old Testament. Which prophet is specifically cited? ",
    options: ["Isaiah ", "Jeremiah", "Ezekiel ", "Daniel"],
    answer: 2,
  },
  {
    q: "In the genealogy of Jesus, His connection to the first human being created is established in which scripture? ",
    options: ["Genesis 3:15 ", "Luke 3:38 ", "Romans 8:29 ", "John 1:12"],
    answer: 1,
  },
  {
    q: "Which of these describes the hypostatic union?",
    options: ["Jesus Christ as part man and part God", "The divine power of God", "Jesus Christ being fully man and fully God", "The union of God the father, God the son and God the Holy Spirit"],
    answer: 2,
  },
  {
    q: " A prophetic declaration was made by an audible voice during Jesus baptism. What did the voice say?",
    options: ["This is My beloved Son, hear Him", "This is My beloved Son, in whom I am well pleased", "This is My Son, the Firstborn among many", "Behold My Servant whom I have chosen"],
    answer: 1,
  },
  {
    q: "The word 'Mighty' in 'Mighty God' (Isaiah 9:6) is a translation of which Hebrew word?",
    options: ["El Shaddai", "El Elyon", "El Gibbor", "El Olam"],
    answer: 2,
  },
  {
    q: "Which of the following parables did Jesus use to teach ‘Occupy TillI come’?",
    options: ["Parable of the 10 virgins", "Parable of the minas", "Parable of the talents", "Parable of the unjust steward"],
    answer: 1,
  },
  {
    q: "The memory verse for Lesson 6 (Jesus Christ Head of the Church) is Colossians 1:18. What title does this verse give to Christ in relation to the dead?",
    options: ["The Author of eternal salvation", "The Firstborn from the dead", "The Beginning of all creation", "The Pre-eminent Lord of all"],
    answer: 1,
  },
  {
    q: "Christ sanctifies His Body by washing it from sins through which means?",
    options: ["The washing of water by the Word (Ephesians 5:26)", "The renewing of the mind (Romans 12:2)", "The blood of the cross (Colossians 1:20)", "The fire of the Holy Spirit (Acts 2:3)"],
    answer: 0,
  },
  {
    q: "The memory verse for Lesson 7 (Jesus Christ the Creator) is Colossians 1:16. What does this verse say about ALL things?",
    options: ["All things are upheld by His word of power", " All things were created through Him and for Him", "c) All things consist in Him and by Him", "d) All things are reconciled through His blood"],
    answer: 1,
  },
  {
    q: "In Lesson 7, the light that God called forth in Genesis 1:3 is identified as:",
    options: ["The light of the sun and moon", "Jesus Christ (John 8:12)", "The glory of God (Revelation 21:23)", "The fire of God's presence"],
    answer: 1,
  },
  {
    q: "According to Lesson 8, at Christ's coming all things would be presented to God as a church without spot or wrinkle. His coming is described as:",
    options: ["Announced with great celebration", "Suddenly unannounced", "After the Great Tribulation only", "At the sound of the seventh trumpet"],
    answer: 1,
  },
  {
    q: "In Lesson 9 (The Omnificent God), the word 'omnificence' is defined as:",
    options: ["All-powerful unlimited authority", "The ability to create all things or to have unlimited power to create", "Having wisdom beyond human comprehension", "Being present in all places simultaneously"],
    answer: 1,
  },
  {
    q: "Lesson 9 states that God's omniscience goes together with His omnificence because of which combined attributes?",
    options: ["Omnipotence, omnipresence, omniscience", "Omnipotence (omnipotence) and wisdom (omniscience)", "Omnipotence, wisdom, and omniscience (all-knowing)", "Authority, creativity, and all-knowingness"],
    answer: 2,
  },
  {
    q: "In Lesson 9 (Outline 2), man is described as made in God's image and likeness in Genesis 1:26. What creative attribute did God share with man, as illustrated in Genesis 1:16?",
    options: ["The ability to rule over all creatures", "The ability to design things with intent and function", "The ability to commune with God face to face", "The ability to name and classify all creatures"],
    answer: 1,
  },
  {
    q: "Lesson 10 teaches about the Person of the Holy Spirit. The memory verse is Exodus 31:1–5. In this passage, which man was Spirit-filled for creative artistic work?",
    options: ["Moses", "Aaron", "Bezaleel", "Joshua"],
    answer: 2,
  },
  {
    q: "In Lesson 10, which Old Testament judge was empowered by the Spirit of God to defeat the Midianites with only 300 men?",
    options: ["Samson", "Othniel", "Jephthah", "Gideon"],
    answer: 3,
  },
  {
    q: "Which of these topics was not covered in the first quarter of the Sunday school manual",
    options: [" Jesus Christ the son of God", "Jesus Christ the Beginning and the End", "Jesus Christ the Redeemer", "Jesus Christ The Coming King"],
    answer: 1,
  },
  {
    q: "According to Lesson 11 (Occupy Till I Come), the phrase 'Occupy till I come' means which of the following?",
    options: ["Monetary wealth given to servants", "The talent or spiritual gift given to every child of God", "Physical resources for kingdom business", "The resource and investment of God that is sufficient to fulfil life's purpose"],
    answer: 3,
  },
  {
    q: "Lesson 11(Occupy Till I Come) states that the 'pound' was given equally to every servant. What does this signify for every child of God?",
    options: ["All believers receive the same financial blessing", "God gives the same level of anointing to every believer", "The pound (resource of God) is given to every child of God", "Every believer has equal opportunity to earn salvation"],
    answer: 2,
  },
  {
    q: "The conclusion of Lesson 5 states that 'my redemption cost Jesus everything.'This demands which response from believers?",
    options: ["Living a life of dedicated service and offering", "Also giving Jesus everything in return", "Supporting the work of the Church financially", "Living righteously and avoiding all sin"],
    answer: 1,
  },
  ];

export default QUESTIONS;
