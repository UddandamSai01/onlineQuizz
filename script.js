const individualSectionBtech=document.getElementById('individualSectionBtech');
const individualSectionBa=document.getElementById('individualSectionBa');
const individualSectionBsc=document.getElementById('individualSectionBsc');
const individualSectionBaa=document.getElementById('individualSectionBaa');
const individualSectionLlb=document.getElementById('individualSectionLlb');
const individualSectionMbbs=document.getElementById('individualSectionMbbs');

const course=[
    {img:"imgaes/ba.png",name:'BA'},
    {img:'imgaes/bsc.png',name:'BSc'},
    {img:'imgaes/b.tech.jpg',name:'BTech'},
    {img:'imgaes/baa.png',name:'BAA'},
    {img:'imgaes/llb.png',name:'LLB'},
    {img:'imgaes/mbbs.png',name:'MBBS'},
];


const cards = [];
const home=document.getElementById('home');

course.forEach((item,index )=> {
    let card = document.createElement('div');
    card.classList.add('homeCard');

    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h2>${item.name}</h2>
        
        <button value="${item.name}">Choose</button>
    `;
    let btn=card.querySelector('button');
    btn.addEventListener('click',(e)=>{
        const value=e.target.value;
        if (value==='BTech'){
            individualSectionBtech.style.display='block';
            home.style.display='none';
        }
        else if (value==='BAA'){
            individualSectionBaa.style.display='block';
            home.style.display='none';
        }
        else if (value==='BA'){
            individualSectionBa.style.display='block';
            home.style.display='none';
        }
        else if (value==='LLB'){
            individualSectionLlb.style.display='block';
            home.style.display='none';
        }
        else if (value==='BSc'){
            individualSectionBsc.style.display='block';
            home.style.display='none';
        }
        else if (value==='MBBS'){
            individualSectionMbbs.style.display='block';
            home.style.display='none';
        }
    });


    home.appendChild(card);
    cards.push({ element: card, name: item.name });
    
});

const Btech=document.getElementById('btech');
const BTech=[
    {img:"imgaes/eee.jpg",name:'EEE'},
    {img:"imgaes/ece.jpg",name:'ECE'},
    {img:"imgaes/mech.jpg",name:'MECH'},
    {img:"imgaes/civil.jpg",name:'CIVIL'},
    {img:"imgaes/cse.webp",name:'CSE'},
    {img:"imgaes/aeronatical.jpg",name:'AERONATICAL'}
];

const Ba=document.getElementById('ba');
const BA=[
    {img:"imgaes/english.jpg",name:'ENGLISH'},
    {img:"imgaes/psycho.png",name:'PSYCHOLOGY'},
    {img:"imgaes/ploiticalScience.jpg",name:'POLITICAL_SCIENCE'},
    {img:"imgaes/journalism.webp",name:'JOURNALISM'}
];

const Baa=document.getElementById('baa');
const BAA=[
    {img:"imgaes/JusticeStudie.jpg",name:'JUSTICE_STUDIES'},
    {img:"imgaes/design.webp",name:'DESIGN'},
    {img:"imgaes/Media.jpg",name:'MEDIA_COMMNICATION'}
];

const Llb=document.getElementById('llb');
const LLB=[
    {img:"imgaes/crimnal.jpg",name:'CRIMINAL_LAW'},
    {img:"imgaes/civilLaw.webp",name:'CIVIL_LAW'},
    {img:"imgaes/cyber.avif",name:'CYBER_LAW'}
];

const Bsc=document.getElementById('bsc');
const BSC=[
    {img:"imgaes/cs.jpg",name:'COMPUTER_SCIENCE'},
    {img:"imgaes/it.png",name:'INFORMATION_TECHNOLOGY'},
    {img:"imgaes/ds.jpg",name:'DATA_SCIENCE'},
];

const Mbbs=document.getElementById('mbbs');
const MBBS=[
    {img:"imgaes/radiology.png",name:'RADIOLOGY'},
    {img:"imgaes/Gmedecien.jpg",name:'GENERAL_MEDICINE'},
    {img:"imgaes/psychiatry.jpg",name:'PSYCHIATRY'}
];



function creatingCards(data,id){
       data.forEach(Item=>{
        let card=document.createElement('div');
        card.classList.add('Card');
        card.innerHTML = `
            <img src="${Item.img}" alt="${Item.name}">
            <h2>${Item.name}</h2>
            <button value="${Item.name}">Take Test</button>
            `;
        let btn=card.querySelector('button');
        card.addEventListener('click',(e)=>{
            const value=e.target.value;
            const SubjectNames=['EEE','MECH','CIVIL','CSE','ECE','AERONATICAL','ENGLISH','PSYCHOLOGY','POLITICAL_SCIENCE','JOURNALISM','COMPUTER_SCIENCE','INFORMATION_TECHNOLOGY',]
        //    BTECH-----
            if (value==='EEE'){
                createQuizz(EEE)   
            }
            else if (value==='MECH'){
                createQuizz(MECH)
            } 
            else if (value==='CIVIL'){
                createQuizz(CIVIL)
            } 
            else if (value==='ECE'){
                createQuizz(ECE)
            } 
            else if (value==='CSE'){
                createQuizz(CSE)
            } 
            else if (value==='AERONATICAL'){
                createQuizz(AERONATICAL)
            } 

        // BA----------
            else if (value==='ENGLISH'){
                createQuizz(ENGLISH)
            } 
            else if (value==='PSYCHOLOGY'){
                createQuizz(PSYCHOLOGY)
            } 
            else if (value==='POLITICAL_SCIENCE'){
                createQuizz(POLITICAL_SCIENCE)
            } 
            else if (value==='JOURNALISM'){
                createQuizz(JOURNALISM)
            } 
        
        //  BSc-------
            else if (value==='COMPUTER_SCIENCE'){
                createQuizz(COMPUTER_SCIENCE)
            } 
            else if (value==='INFORMATION_TECHNOLOGY'){
                createQuizz(INFORMATION_TECHNOLOGY)
            } 
            else if (value==='DATA_SCIENCE'){
                createQuizz(DATA_SCIENCE)
            } 

        // BAA--------
            else if (value==='JUSTICE_STUDIES'){
                createQuizz(JUSTICE_STUDIES)
            } 
            else if (value==='DESIGN'){
                createQuizz(DESIGN)
            }
            else if (value==='MMEDIA_COMMNICATION'){
                createQuizz(MEDIA_COMMNICATION)
            } 
            
            
        // LLB---------
            else if (value==='CRIMINAL_LAW'){
                createQuizz(CRIMINAL_LAW)
            } 
            else if (value==='CIVIL_LAW'){
                createQuizz(CIVIL_LAW)
            }
            else if (value==='CYBER_LAW'){
                createQuizz(CYBER_LAW)
            } 

        // MBBS---------
            else if (value==='RADIOLOGY'){
                createQuizz(RADIOLOGY)
            } 
            else if (value==='GENERAL_MEDICINE'){
                createQuizz(GENERAL_MEDICINE)
            }
            else if (value==='PSYCHIATRY'){
                createQuizz(PSYCHIATRY)
            }
        });

        
        id.appendChild(card);
    }); 

};

const MainCradIds=[Btech,Ba,Baa,Bsc,Llb,Mbbs];
const childCardsData=[BTech,BA,BAA,BSC,LLB,MBBS];

for (let i=0;i<MainCradIds.length;i++){
    creatingCards(childCardsData[i],MainCradIds[i]);
};


// All the quizz Data[questions,options,correctanswer] in formate of objects in list

const EEE = [
  {
    question: "1. What does EEE stand for?",
    options: ["Electrical and Electronic Engineering", "Electric Energy Engineering", "Electronic Equipment Engineering", "Electromagnetic Engineering"],
    correctAnswer: "Electrical and Electronic Engineering"
  },
  {
    question: "2. Which device converts electrical energy into mechanical energy?",
    options: ["Transformer", "Generator", "Motor", "Rectifier"],
    correctAnswer: "Motor"
  },
  {
    question: "3. Which law is used to calculate current in a circuit?",
    options: ["Ohm’s Law", "Faraday’s Law", "Lenz’s Law", "Coulomb’s Law"],
    correctAnswer: "Ohm’s Law"
  },
  {
    question: "4. The unit of electrical resistance is?",
    options: ["Ampere", "Volt", "Ohm", "Watt"],
    correctAnswer: "Ohm"
  },
  {
    question: "5. A transformer works on the principle of?",
    options: ["Ohm’s Law", "Mutual Induction", "Electrolysis", "Resistance"],
    correctAnswer: "Mutual Induction"
  },
  {
    question: "6. Which material is commonly used as a conductor?",
    options: ["Copper", "Rubber", "Glass", "Wood"],
    correctAnswer: "Copper"
  },
  {
    question: "7. What is the frequency of AC supply in India?",
    options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
    correctAnswer: "50 Hz"
  },
  {
    question: "8. Which of the following is a passive component?",
    options: ["Transistor", "Diode", "Resistor", "SCR"],
    correctAnswer: "Resistor"
  },
  {
    question: "9. The instrument used to measure current is?",
    options: ["Voltmeter", "Ammeter", "Ohmmeter", "Thermometer"],
    correctAnswer: "Ammeter"
  },
  {
    question: "10. What is the SI unit of electric charge?",
    options: ["Coulomb", "Volt", "Ampere", "Watt"],
    correctAnswer: "Coulomb"
  }
];

const MECH = [
  {
    question: "1. What does ME stand for?",
    options: ["Mechanical Engineering", "Mechatronics Engineering", "Metal Engineering", "Machine Engineering"],
    correctAnswer: "Mechanical Engineering"
  },
  {
    question: "2. Which of the following is a thermodynamic cycle?",
    options: ["Brayton Cycle", "Darcy Cycle", "Ohm Cycle", "Pascal Cycle"],
    correctAnswer: "Brayton Cycle"
  },
  {
    question: "3. What is the unit of torque?",
    options: ["Newton-meter", "Pascal", "Watt", "Joule"],
    correctAnswer: "Newton-meter"
  },
  {
    question: "4. Which material is commonly used for high-strength shafts?",
    options: ["Mild Steel", "Cast Iron", "Alloy Steel", "Aluminum"],
    correctAnswer: "Alloy Steel"
  },
  {
    question: "5. What does CNC stand for in manufacturing?",
    options: ["Computer Numeric Control", "Central Numerical Calculator", "Controlled Numeric Circuit", "Computerized Network Control"],
    correctAnswer: "Computer Numeric Control"
  },
  {
    question: "6. What is the primary function of a flywheel?",
    options: ["Store rotational energy", "Increase friction", "Cool the engine", "Measure torque"],
    correctAnswer: "Store rotational energy"
  },
  {
    question: "7. Which of these is a type of welding?",
    options: ["Arc welding", "Flux welding", "Gas welding", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "8. Which law governs the motion of fluids?",
    options: ["Bernoulli's principle", "Hooke's law", "Newton's law of cooling", "Pascal's law"],
    correctAnswer: "Bernoulli's principle"
  },
  {
    question: "9. What is the efficiency of an ideal machine?",
    options: ["100%", "75%", "50%", "0%"],
    correctAnswer: "100%"
  },
  {
    question: "10. In gears, the ratio of the number of teeth is called?",
    options: ["Velocity ratio", "Torque ratio", "Power ratio", "Mechanical advantage"],
    correctAnswer: "Velocity ratio"
  }
];

const CIVIL = [
  {
    question: "1. What does CE stand for?",
    options: ["Civil Engineering", "Chemical Engineering", "Construction Engineering", "Computer Engineering"],
    correctAnswer: "Civil Engineering"
  },
  {
    question: "2. What is the main material used in RCC?",
    options: ["Concrete and Steel", "Bricks and Cement", "Wood and Steel", "Sand and Gravel"],
    correctAnswer: "Concrete and Steel"
  },
  {
    question: "3. The main purpose of a retaining wall is?",
    options: ["Hold back soil", "Carry water", "Support bridges", "Reduce friction"],
    correctAnswer: "Hold back soil"
  },
  {
    question: "4. What is the unit of stress?",
    options: ["Pascal", "Newton", "Watt", "Joule"],
    correctAnswer: "Pascal"
  },
  {
    question: "5. Which of the following is a type of foundation?",
    options: ["Shallow foundation", "Deep foundation", "Pile foundation", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "6. The bending moment at a simply supported beam's center under a point load is?",
    options: ["Maximum", "Minimum", "Zero", "Depends on load type"],
    correctAnswer: "Maximum"
  },
  {
    question: "7. What is the standard mix ratio of concrete for M20 grade?",
    options: ["1:1.5:3", "1:2:4", "1:3:6", "1:2:2"],
    correctAnswer: "1:1.5:3"
  },
  {
    question: "8. Which soil type has the highest permeability?",
    options: ["Gravel", "Clay", "Silt", "Sand"],
    correctAnswer: "Gravel"
  },
  {
    question: "9. The purpose of a weir in hydraulics is?",
    options: ["Measure flow", "Store water", "Reduce velocity", "Control temperature"],
    correctAnswer: "Measure flow"
  },
  {
    question: "10. Which method is used to test concrete strength?",
    options: ["Rebound hammer", "Ultrasonic pulse velocity", "Compressive strength test", "All of the above"],
    correctAnswer: "All of the above"
  }
];

const ECE = [
  {
    question: "1. What does ECE stand for?",
    options: ["Electronics and Communication Engineering", "Electrical and Civil Engineering", "Electronic Computer Engineering", "Energy and Communication Engineering"],
    correctAnswer: "Electronics and Communication Engineering"
  },
  {
    question: "2. What is the basic unit of resistance?",
    options: ["Ohm", "Volt", "Ampere", "Watt"],
    correctAnswer: "Ohm"
  },
  {
    question: "3. Which device is used to amplify signals?",
    options: ["Transistor", "Resistor", "Capacitor", "Inductor"],
    correctAnswer: "Transistor"
  },
  {
    question: "4. What is the function of a diode?",
    options: ["Allow current in one direction", "Store charge", "Increase voltage", "Measure current"],
    correctAnswer: "Allow current in one direction"
  },
  {
    question: "5. What type of wave is used in communication systems?",
    options: ["Electromagnetic waves", "Sound waves", "Water waves", "Mechanical waves"],
    correctAnswer: "Electromagnetic waves"
  },
  {
    question: "6. The unit of capacitance is?",
    options: ["Farad", "Henry", "Ohm", "Tesla"],
    correctAnswer: "Farad"
  },
  {
    question: "7. What does ADC stand for?",
    options: ["Analog to Digital Converter", "Alternating Direct Current", "Amplifier Digital Circuit", "Analog Digital Control"],
    correctAnswer: "Analog to Digital Converter"
  },
  {
    question: "8. Which modulation technique is used in digital communication?",
    options: ["PSK", "AM", "FM", "CMOS"],
    correctAnswer: "PSK"
  },
  {
    question: "9. What is the main purpose of an oscillator?",
    options: ["Generate periodic signals", "Store energy", "Amplify current", "Measure resistance"],
    correctAnswer: "Generate periodic signals"
  },
  {
    question: "10. Which component is used to filter signals?",
    options: ["Capacitor", "Diode", "Transistor", "Resistor"],
    correctAnswer: "Capacitor"
  }
];

const CSE = [
  {
    question: "1. What does CSE stand for?",
    options: ["Computer Science Engineering", "Civil Structural Engineering", "Communication Systems Engineering", "Chemical Science Engineering"],
    correctAnswer: "Computer Science Engineering"
  },
  {
    question: "2. Which language is primarily used for web development?",
    options: ["HTML", "C++", "Python", "Java"],
    correctAnswer: "HTML"
  },
  {
    question: "3. What is the full form of CPU?",
    options: ["Central Processing Unit", "Computer Primary Unit", "Control Processing Unit", "Central Power Unit"],
    correctAnswer: "Central Processing Unit"
  },
  {
    question: "4. Which data structure uses FIFO principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: "Queue"
  },
  {
    question: "5. Which of the following is an operating system?",
    options: ["Linux", "Python", "MySQL", "HTML"],
    correctAnswer: "Linux"
  },
  {
    question: "6. What does SQL stand for?",
    options: ["Structured Query Language", "Simple Question Language", "Sequential Query Logic", "Structured Quick List"],
    correctAnswer: "Structured Query Language"
  },
  {
    question: "7. Which of the following is a programming paradigm?",
    options: ["Object-Oriented Programming", "Linear Programming", "Constraint Programming", "Quantum Programming"],
    correctAnswer: "Object-Oriented Programming"
  },
  {
    question: "8. What is the time complexity of binary search in a sorted array?",
    options: ["O(log n)", "O(n)", "O(n²)", "O(1)"],
    correctAnswer: "O(log n)"
  },
  {
    question: "9. Which of these is a high-level programming language?",
    options: ["Python", "Assembly", "Machine Code", "Binary"],
    correctAnswer: "Python"
  },
  {
    question: "10. In networking, what does IP stand for?",
    options: ["Internet Protocol", "Internal Process", "Integrated Program", "Input Port"],
    correctAnswer: "Internet Protocol"
  }
];

const AERONATICAL = [
  {
    question: "1. What does AE stand for?",
    options: ["Aeronautical Engineering", "Automotive Engineering", "Aerospace Electronics", "Applied Engineering"],
    correctAnswer: "Aeronautical Engineering"
  },
  {
    question: "2. What is the primary force that keeps an airplane in the air?",
    options: ["Lift", "Thrust", "Drag", "Weight"],
    correctAnswer: "Lift"
  },
  {
    question: "3. Which law explains the lift generation on a wing?",
    options: ["Bernoulli's Principle", "Ohm's Law", "Newton's First Law", "Pascal's Law"],
    correctAnswer: "Bernoulli's Principle"
  },
  {
    question: "4. What is the function of an aileron?",
    options: ["Control roll", "Control pitch", "Control yaw", "Increase lift"],
    correctAnswer: "Control roll"
  },
  {
    question: "5. Which engine is commonly used in modern jet aircraft?",
    options: ["Turbofan engine", "Piston engine", "Rotary engine", "Steam engine"],
    correctAnswer: "Turbofan engine"
  },
  {
    question: "6. What is the main purpose of flaps on an aircraft wing?",
    options: ["Increase lift during takeoff/landing", "Reduce fuel consumption", "Increase speed", "Reduce weight"],
    correctAnswer: "Increase lift during takeoff/landing"
  },
  {
    question: "7. What is the typical material used for modern aircraft fuselage?",
    options: ["Aluminum alloy", "Wood", "Cast iron", "Concrete"],
    correctAnswer: "Aluminum alloy"
  },
  {
    question: "8. Which parameter is crucial for aircraft stability?",
    options: ["Center of gravity", "Wing color", "Landing gear size", "Cockpit design"],
    correctAnswer: "Center of gravity"
  },
  {
    question: "9. The Mach number is the ratio of?",
    options: ["Aircraft speed to speed of sound", "Lift to weight", "Thrust to drag", "Drag to lift"],
    correctAnswer: "Aircraft speed to speed of sound"
  },
  {
    question: "10. Which device measures altitude in an aircraft?",
    options: ["Altimeter", "Airspeed indicator", "Gyroscope", "Thermometer"],
    correctAnswer: "Altimeter"
  }
];

const ENGLISH = [
  {
    question: "1. Which of the following is a synonym of 'Happy'?",
    options: ["Joyful", "Sad", "Angry", "Tired"],
    correctAnswer: "Joyful"
  },
  {
    question: "2. Choose the correct form of the verb: 'She _____ to the market yesterday.'",
    options: ["went", "goes", "gone", "going"],
    correctAnswer: "went"
  },
  {
    question: "3. Identify the noun in the sentence: 'The cat is sleeping on the sofa.'",
    options: ["cat", "sleeping", "on", "is"],
    correctAnswer: "cat"
  },
  {
    question: "4. Which of these is an antonym of 'Ancient'?",
    options: ["Modern", "Old", "Historic", "Aged"],
    correctAnswer: "Modern"
  },
  {
    question: "5. Choose the correct article: 'I saw _____ owl in the tree.'",
    options: ["an", "a", "the", "none"],
    correctAnswer: "an"
  },
  {
    question: "6. Identify the adjective in the sentence: 'The bright sun warmed the garden.'",
    options: ["bright", "sun", "warmed", "garden"],
    correctAnswer: "bright"
  },
  {
    question: "7. Which sentence is in passive voice?",
    options: ["The book was read by John.", "John read the book.", "John is reading the book.", "Reading the book was fun."],
    correctAnswer: "The book was read by John."
  },
  {
    question: "8. Choose the correct preposition: 'He is good _____ mathematics.'",
    options: ["at", "in", "on", "for"],
    correctAnswer: "at"
  },
  {
    question: "9. Which of the following is a compound sentence?",
    options: ["I went to the market, and I bought some fruits.", "I went to the market.", "Buying fruits is fun.", "The market is big."],
    correctAnswer: "I went to the market, and I bought some fruits."
  },
  {
    question: "10. Pick the correct plural form: 'Child'",
    options: ["Children", "Childs", "Childes", "Childen"],
    correctAnswer: "Children"
  }
];

const PSYCHOLOGY = [
  {
    question: "1. Who is known as the father of psychology?",
    options: ["Wilhelm Wundt", "Sigmund Freud", "B.F. Skinner", "Jean Piaget"],
    correctAnswer: "Wilhelm Wundt"
  },
  {
    question: "2. What is the study of behavior and mental processes called?",
    options: ["Psychology", "Sociology", "Anthropology", "Philosophy"],
    correctAnswer: "Psychology"
  },
  {
    question: "3. Which psychologist is associated with classical conditioning?",
    options: ["Ivan Pavlov", "B.F. Skinner", "Albert Bandura", "Carl Rogers"],
    correctAnswer: "Ivan Pavlov"
  },
  {
    question: "4. What part of the brain is responsible for memory?",
    options: ["Hippocampus", "Cerebellum", "Medulla", "Thalamus"],
    correctAnswer: "Hippocampus"
  },
  {
    question: "5. Which approach in psychology focuses on observable behavior?",
    options: ["Behaviorism", "Psychoanalysis", "Humanistic", "Cognitive"],
    correctAnswer: "Behaviorism"
  },
  {
    question: "6. Who developed the theory of cognitive development in children?",
    options: ["Jean Piaget", "Erik Erikson", "Sigmund Freud", "Lev Vygotsky"],
    correctAnswer: "Jean Piaget"
  },
  {
    question: "7. Which term refers to a person’s consistent patterns of thinking, feeling, and behaving?",
    options: ["Personality", "Emotion", "Cognition", "Motivation"],
    correctAnswer: "Personality"
  },
  {
    question: "8. The fight-or-flight response is primarily controlled by which system?",
    options: ["Autonomic nervous system", "Central nervous system", "Endocrine system", "Somatic nervous system"],
    correctAnswer: "Autonomic nervous system"
  },
  {
    question: "9. Which type of memory has the shortest duration?",
    options: ["Sensory memory", "Short-term memory", "Long-term memory", "Working memory"],
    correctAnswer: "Sensory memory"
  },
  {
    question: "10. Who proposed the hierarchy of needs theory?",
    options: ["Abraham Maslow", "Carl Jung", "William James", "Ivan Pavlov"],
    correctAnswer: "Abraham Maslow"
  }
];

const POLITICAL_SCIENCE = [
  {
    question: "1. Who is considered the father of political science?",
    options: ["Aristotle", "Plato", "Machiavelli", "John Locke"],
    correctAnswer: "Aristotle"
  },
  {
    question: "2. What is the basic unit of political organization?",
    options: ["State", "Nation", "Government", "Society"],
    correctAnswer: "State"
  },
  {
    question: "3. Which form of government is ruled by one person?",
    options: ["Monarchy", "Democracy", "Oligarchy", "Republic"],
    correctAnswer: "Monarchy"
  },
  {
    question: "4. What is the principle of separation of powers?",
    options: ["Dividing government into legislative, executive, and judicial branches", "Having multiple political parties", "Distributing wealth equally", "Giving power to local authorities"],
    correctAnswer: "Dividing government into legislative, executive, and judicial branches"
  },
  {
    question: "5. Which political ideology advocates for state ownership of resources?",
    options: ["Socialism", "Liberalism", "Conservatism", "Anarchism"],
    correctAnswer: "Socialism"
  },
  {
    question: "6. Who wrote 'The Prince'?",
    options: ["Machiavelli", "Aristotle", "Thomas Hobbes", "Plato"],
    correctAnswer: "Machiavelli"
  },
  {
    question: "7. What is the term for a government elected by the people?",
    options: ["Democracy", "Autocracy", "Oligarchy", "Theocracy"],
    correctAnswer: "Democracy"
  },
  {
    question: "8. Which type of democracy allows citizens to vote directly on laws?",
    options: ["Direct democracy", "Representative democracy", "Constitutional monarchy", "Federalism"],
    correctAnswer: "Direct democracy"
  },
  {
    question: "9. What is federalism?",
    options: ["Division of powers between central and regional governments", "Rule by one leader", "A system without government", "Majority rule in parliament"],
    correctAnswer: "Division of powers between central and regional governments"
  },
  {
    question: "10. Which political thinker is associated with the social contract theory?",
    options: ["John Locke", "Karl Marx", "Plato", "Niccolò Machiavelli"],
    correctAnswer: "John Locke"
  }
];

const JOURNALISM = [
  {
    question: "1. Who is considered the father of modern journalism?",
    options: ["Joseph Pulitzer", "William Randolph Hearst", "Edward R. Murrow", "Benjamin Franklin"],
    correctAnswer: "Joseph Pulitzer"
  },
  {
    question: "2. What is the primary purpose of journalism?",
    options: ["Inform the public", "Entertain celebrities", "Promote businesses", "Publish fiction"],
    correctAnswer: "Inform the public"
  },
  {
    question: "3. Which type of journalism investigates and exposes issues of public concern?",
    options: ["Investigative journalism", "Entertainment journalism", "Sports journalism", "Fashion journalism"],
    correctAnswer: "Investigative journalism"
  },
  {
    question: "4. What is a lead in a news article?",
    options: ["The opening paragraph summarizing the story", "The headline image", "The author’s biography", "The last paragraph"],
    correctAnswer: "The opening paragraph summarizing the story"
  },
  {
    question: "5. Which code of ethics is important for journalists?",
    options: ["Accuracy, fairness, and objectivity", "Speed over accuracy", "Sensationalism", "Bias and opinion"],
    correctAnswer: "Accuracy, fairness, and objectivity"
  },
  {
    question: "6. What is the inverted pyramid style in journalism?",
    options: ["Placing the most important information first", "Writing in chronological order", "Starting with a quote", "Ending with a summary"],
    correctAnswer: "Placing the most important information first"
  },
  {
    question: "7. Which medium is considered the fastest for breaking news?",
    options: ["Television news", "Newspapers", "Magazines", "Radio"],
    correctAnswer: "Television news"
  },
  {
    question: "8. What is the term for a journalist’s personal viewpoint in an article?",
    options: ["Editorial", "News report", "Feature story", "Interview"],
    correctAnswer: "Editorial"
  },
  {
    question: "9. What is a press release?",
    options: ["An official statement issued to media", "A gossip article", "A personal blog post", "A feature story"],
    correctAnswer: "An official statement issued to media"
  },
  {
    question: "10. Which organization monitors press freedom worldwide?",
    options: ["Reporters Without Borders", "UNESCO", "WHO", "FIFA"],
    correctAnswer: "Reporters Without Borders"
  }
];

const COMPUTER_SCIENCE = [
  {
    question: "1. What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Primary Unit", "Central Programming Unit", "Control Processing Unit"],
    correctAnswer: "Central Processing Unit"
  },
  {
    question: "2. Which data structure uses LIFO (Last In First Out) principle?",
    options: ["Stack", "Queue", "Linked List", "Array"],
    correctAnswer: "Stack"
  },
  {
    question: "3. What does HTTP stand for?",
    options: ["HyperText Transfer Protocol", "Hyperlink Text Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Protocol"],
    correctAnswer: "HyperText Transfer Protocol"
  },
  {
    question: "4. Which programming language is primarily used for web development?",
    options: ["JavaScript", "C", "Python", "Java"],
    correctAnswer: "JavaScript"
  },
  {
    question: "5. What is the time complexity of binary search in a sorted array?",
    options: ["O(log n)", "O(n)", "O(n²)", "O(1)"],
    correctAnswer: "O(log n)"
  },
  {
    question: "6. Which database language is used to manage relational databases?",
    options: ["SQL", "HTML", "Python", "C++"],
    correctAnswer: "SQL"
  },
  {
    question: "7. Which of the following is an example of a high-level programming language?",
    options: ["Python", "Assembly", "Machine Code", "Binary"],
    correctAnswer: "Python"
  },
  {
    question: "8. What is the main function of an operating system?",
    options: ["Manage hardware and software resources", "Compile code", "Transmit data over the network", "Store documents"],
    correctAnswer: "Manage hardware and software resources"
  },
  {
    question: "9. Which of the following is a sorting algorithm?",
    options: ["Quick Sort", "Binary Search", "Linear Search", "DFS"],
    correctAnswer: "Quick Sort"
  },
  {
    question: "10. In networking, what does IP stand for?",
    options: ["Internet Protocol", "Internal Process", "Integrated Program", "Input Port"],
    correctAnswer: "Internet Protocol"
  }
];

const INFORMATION_TECHNOLOGY = [
  {
    question: "1. What does IT stand for?",
    options: ["Information Technology", "Internet Technology", "Integrated Technology", "Internal Transmission"],
    correctAnswer: "Information Technology"
  },
  {
    question: "2. Which protocol is used to transfer files over the Internet?",
    options: ["FTP", "HTTP", "SMTP", "DNS"],
    correctAnswer: "FTP"
  },
  {
    question: "3. What is the main function of a firewall?",
    options: ["Network security", "Data storage", "Processing information", "Database management"],
    correctAnswer: "Network security"
  },
  {
    question: "4. Which of the following is an example of cloud computing service?",
    options: ["Google Drive", "Microsoft Word", "Adobe Photoshop", "MySQL"],
    correctAnswer: "Google Drive"
  },
  {
    question: "5. Which programming language is commonly used for web development?",
    options: ["JavaScript", "C", "Python", "Java"],
    correctAnswer: "JavaScript"
  },
  {
    question: "6. What does DNS stand for?",
    options: ["Domain Name System", "Data Network Security", "Digital Name Server", "Direct Network Service"],
    correctAnswer: "Domain Name System"
  },
  {
    question: "7. What is the purpose of an IP address?",
    options: ["Identify devices on a network", "Store data", "Encrypt messages", "Manage memory"],
    correctAnswer: "Identify devices on a network"
  },
  {
    question: "8. Which of the following is a database management system?",
    options: ["MySQL", "HTML", "CSS", "JavaScript"],
    correctAnswer: "MySQL"
  },
  {
    question: "9. Which type of malware replicates itself to spread to other computers?",
    options: ["Worm", "Trojan", "Spyware", "Adware"],
    correctAnswer: "Worm"
  },
  {
    question: "10. What is the full form of HTTP?",
    options: ["HyperText Transfer Protocol", "Hyperlink Text Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Transmission Protocol"],
    correctAnswer: "HyperText Transfer Protocol"
  }
];

const DATA_SCIENCE = [
  {
    question: "1. What does Data Science primarily deal with?",
    options: ["Extracting insights from data", "Developing hardware", "Networking protocols", "Operating systems"],
    correctAnswer: "Extracting insights from data"
  },
  {
    question: "2. Which programming language is most commonly used in Data Science?",
    options: ["Python", "C++", "Java", "HTML"],
    correctAnswer: "Python"
  },
  {
    question: "3. What is the purpose of data visualization?",
    options: ["Represent data graphically", "Store data efficiently", "Encrypt data", "Clean datasets"],
    correctAnswer: "Represent data graphically"
  },
  {
    question: "4. Which library is commonly used for data analysis in Python?",
    options: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    correctAnswer: "Pandas"
  },
  {
    question: "5. What does 'Big Data' refer to?",
    options: ["Large and complex datasets", "Small datasets", "Encrypted data", "Database schema"],
    correctAnswer: "Large and complex datasets"
  },
  {
    question: "6. Which technique is used to find patterns and relationships in data?",
    options: ["Data mining", "Networking", "Web development", "Encryption"],
    correctAnswer: "Data mining"
  },
  {
    question: "7. What is supervised learning in machine learning?",
    options: ["Learning with labeled data", "Learning without labeled data", "Reinforcement learning", "Deep learning only"],
    correctAnswer: "Learning with labeled data"
  },
  {
    question: "8. What is the purpose of a training dataset?",
    options: ["Train the model to learn patterns", "Test the model performance", "Store visualization charts", "Encrypt data"],
    correctAnswer: "Train the model to learn patterns"
  },
  {
    question: "9. Which of the following is used for visualization in Python?",
    options: ["Matplotlib", "SQL", "C++", "Linux"],
    correctAnswer: "Matplotlib"
  },
  {
    question: "10. Which type of data is unstructured?",
    options: ["Images, videos, text", "Excel spreadsheets", "SQL tables", "CSV files"],
    correctAnswer: "Images, videos, text"
  }
];

const JUSTICE_STUDIES = [
  {
    question: "1. What is the primary focus of Justice Studies?",
    options: ["Law, crime, and social justice", "Medical sciences", "Engineering principles", "Business management"],
    correctAnswer: "Law, crime, and social justice"
  },
  {
    question: "2. Which system handles the interpretation and enforcement of laws?",
    options: ["Judicial system", "Legislative system", "Executive system", "Military system"],
    correctAnswer: "Judicial system"
  },
  {
    question: "3. Who is responsible for prosecuting crimes in court?",
    options: ["Prosecutor", "Defendant", "Judge", "Witness"],
    correctAnswer: "Prosecutor"
  },
  {
    question: "4. What is the term for a crime committed by a government official?",
    options: ["White-collar crime", "Corruption", "Terrorism", "Petty theft"],
    correctAnswer: "Corruption"
  },
  {
    question: "5. Which amendment in many countries guarantees the right to a fair trial?",
    options: ["Legal rights amendment", "Privacy amendment", "Freedom of speech amendment", "Property rights amendment"],
    correctAnswer: "Legal rights amendment"
  },
  {
    question: "6. What is the main goal of restorative justice?",
    options: ["Repair the harm caused by crime", "Punish offenders harshly", "Increase police surveillance", "Write legal textbooks"],
    correctAnswer: "Repair the harm caused by crime"
  },
  {
    question: "7. What is the role of a public defender?",
    options: ["Provide legal defense to those who cannot afford a lawyer", "Investigate crimes", "Prosecute criminals", "Manage court records"],
    correctAnswer: "Provide legal defense to those who cannot afford a lawyer"
  },
  {
    question: "8. Which of the following is an example of a white-collar crime?",
    options: ["Fraud", "Assault", "Burglary", "Arson"],
    correctAnswer: "Fraud"
  },
  {
    question: "9. What is the term for a minor offense punishable by a small fine or short jail term?",
    options: ["Misdemeanor", "Felony", "Treason", "Infraction"],
    correctAnswer: "Misdemeanor"
  },
  {
    question: "10. Which principle ensures that no one is above the law?",
    options: ["Rule of law", "Natural law", "Common law", "Civil law"],
    correctAnswer: "Rule of law"
  }
];

const DESIGN = [
  {
    question: "1. What is the primary purpose of design?",
    options: ["Solve problems visually and functionally", "Write essays", "Conduct experiments", "Manage finances"],
    correctAnswer: "Solve problems visually and functionally"
  },
  {
    question: "2. Which principle deals with the visual weight in a design?",
    options: ["Balance", "Contrast", "Emphasis", "Alignment"],
    correctAnswer: "Balance"
  },
  {
    question: "3. What does UX stand for in design?",
    options: ["User Experience", "Unique eXecution", "Universal X-factor", "User Expression"],
    correctAnswer: "User Experience"
  },
  {
    question: "4. Which software is commonly used for vector graphics?",
    options: ["Adobe Illustrator", "Adobe Photoshop", "MS Word", "AutoCAD"],
    correctAnswer: "Adobe Illustrator"
  },
  {
    question: "5. What is the term for the first visual representation of an idea?",
    options: ["Sketch", "Prototype", "Model", "Blueprint"],
    correctAnswer: "Sketch"
  },
  {
    question: "6. In design, 'contrast' primarily helps to:",
    options: ["Make elements stand out", "Align objects", "Reduce size", "Increase repetition"],
    correctAnswer: "Make elements stand out"
  },
  {
    question: "7. Which principle of design guides the viewer’s eye through a layout?",
    options: ["Hierarchy", "Proximity", "Repetition", "Balance"],
    correctAnswer: "Hierarchy"
  },
  {
    question: "8. Which term refers to the consistency of elements in a design?",
    options: ["Unity", "Variety", "Emphasis", "Contrast"],
    correctAnswer: "Unity"
  },
  {
    question: "9. Which color scheme uses colors opposite each other on the color wheel?",
    options: ["Complementary", "Analogous", "Triadic", "Monochromatic"],
    correctAnswer: "Complementary"
  },
  {
    question: "10. What is a prototype in design?",
    options: ["An early model of a product", "Final artwork", "Sketchbook", "Marketing plan"],
    correctAnswer: "An early model of a product"
  }
];

const MEDIA_COMMNICATION = [
  {
    question: "1. What is the primary purpose of media communication?",
    options: ["Inform, educate, and entertain the public", "Build infrastructure", "Conduct scientific experiments", "Manage finances"],
    correctAnswer: "Inform, educate, and entertain the public"
  },
  {
    question: "2. Which is considered a mass communication medium?",
    options: ["Television", "One-on-one conversation", "Private letter", "Face-to-face discussion"],
    correctAnswer: "Television"
  },
  {
    question: "3. What does PR stand for in media studies?",
    options: ["Public Relations", "Private Reporting", "Professional Reading", "Press Release"],
    correctAnswer: "Public Relations"
  },
  {
    question: "4. Which theory explains media’s influence on shaping public opinion?",
    options: ["Agenda-setting theory", "Chaos theory", "Game theory", "Relativity theory"],
    correctAnswer: "Agenda-setting theory"
  },
  {
    question: "5. Who regulates broadcasting standards in most countries?",
    options: ["Government agencies", "Private companies", "Newspapers", "Universities"],
    correctAnswer: "Government agencies"
  },
  {
    question: "6. Which term describes media content designed to provoke emotional response?",
    options: ["Sensationalism", "Objectivity", "Transparency", "Neutrality"],
    correctAnswer: "Sensationalism"
  },
  {
    question: "7. What is the primary function of advertising in media?",
    options: ["Promote products or services", "Report news", "Conduct interviews", "Analyze data"],
    correctAnswer: "Promote products or services"
  },
  {
    question: "8. Which form of media is interactive and allows user participation?",
    options: ["Digital media", "Print media", "Radio", "Television"],
    correctAnswer: "Digital media"
  },
  {
    question: "9. What is a press release?",
    options: ["Official statement issued to media", "Private diary entry", "Opinion article", "Advertising brochure"],
    correctAnswer: "Official statement issued to media"
  },
  {
    question: "10. Which skill is essential for a media communicator?",
    options: ["Effective writing and speaking", "Mechanical repair", "Mathematical modeling", "Chemical analysis"],
    correctAnswer: "Effective writing and speaking"
  }
];

const CRIMINAL_LAW = [
  {
    question: "1. What is the primary purpose of media communication?",
    options: ["Inform, educate, and entertain the public", "Build infrastructure", "Conduct scientific experiments", "Manage finances"],
    correctAnswer: "Inform, educate, and entertain the public"
  },
  {
    question: "2. Which is considered a mass communication medium?",
    options: ["Television", "One-on-one conversation", "Private letter", "Face-to-face discussion"],
    correctAnswer: "Television"
  },
  {
    question: "3. What does PR stand for in media studies?",
    options: ["Public Relations", "Private Reporting", "Professional Reading", "Press Release"],
    correctAnswer: "Public Relations"
  },
  {
    question: "4. Which theory explains media’s influence on shaping public opinion?",
    options: ["Agenda-setting theory", "Chaos theory", "Game theory", "Relativity theory"],
    correctAnswer: "Agenda-setting theory"
  },
  {
    question: "5. Who regulates broadcasting standards in most countries?",
    options: ["Government agencies", "Private companies", "Newspapers", "Universities"],
    correctAnswer: "Government agencies"
  },
  {
    question: "6. Which term describes media content designed to provoke emotional response?",
    options: ["Sensationalism", "Objectivity", "Transparency", "Neutrality"],
    correctAnswer: "Sensationalism"
  },
  {
    question: "7. What is the primary function of advertising in media?",
    options: ["Promote products or services", "Report news", "Conduct interviews", "Analyze data"],
    correctAnswer: "Promote products or services"
  },
  {
    question: "8. Which form of media is interactive and allows user participation?",
    options: ["Digital media", "Print media", "Radio", "Television"],
    correctAnswer: "Digital media"
  },
  {
    question: "9. What is a press release?",
    options: ["Official statement issued to media", "Private diary entry", "Opinion article", "Advertising brochure"],
    correctAnswer: "Official statement issued to media"
  },
  {
    question: "10. Which skill is essential for a media communicator?",
    options: ["Effective writing and speaking", "Mechanical repair", "Mathematical modeling", "Chemical analysis"],
    correctAnswer: "Effective writing and speaking"
  }
];

const CIVIL_LAW = [
  {
    question: "1. What is the primary purpose of civil law?",
    options: ["Resolve disputes between individuals or organizations", "Punish criminal behavior", "Regulate government policies", "Enforce traffic rules"],
    correctAnswer: "Resolve disputes between individuals or organizations"
  },
  {
    question: "2. Which of the following is a type of civil case?",
    options: ["Breach of contract", "Murder", "Assault", "Theft"],
    correctAnswer: "Breach of contract"
  },
  {
    question: "3. What is a tort?",
    options: ["A civil wrong causing harm to a person or property", "A criminal act", "A legal contract", "A constitutional provision"],
    correctAnswer: "A civil wrong causing harm to a person or property"
  },
  {
    question: "4. Which remedy is commonly awarded in civil cases?",
    options: ["Compensation (damages)", "Imprisonment", "Death penalty", "Fines for law enforcement"],
    correctAnswer: "Compensation (damages)"
  },
  {
    question: "5. What is specific performance in civil law?",
    options: ["Court orders a party to fulfill contractual obligations", "Punishment for criminal acts", "Dismissal of a case", "Settlement by negotiation"],
    correctAnswer: "Court orders a party to fulfill contractual obligations"
  },
  {
    question: "6. Which court primarily handles civil cases in India?",
    options: ["Civil Court", "Sessions Court", "Criminal Court", "Supreme Court"],
    correctAnswer: "Civil Court"
  },
  {
    question: "7. What is the difference between civil law and criminal law?",
    options: ["Civil law deals with disputes between private parties; criminal law deals with offenses against the state", "Civil law punishes; criminal law compensates", "Civil law is international; criminal law is local", "Civil law is written; criminal law is unwritten"],
    correctAnswer: "Civil law deals with disputes between private parties; criminal law deals with offenses against the state"
  },
  {
    question: "8. What is a contract?",
    options: ["A legally enforceable agreement between two or more parties", "A type of criminal act", "A judicial order", "A government regulation"],
    correctAnswer: "A legally enforceable agreement between two or more parties"
  },
  {
    question: "9. What does 'equity' refer to in civil law?",
    options: ["Fairness and justice applied to cases where strict law may not suffice", "Financial compensation only", "Criminal prosecution", "Court hierarchy"],
    correctAnswer: "Fairness and justice applied to cases where strict law may not suffice"
  },
  {
    question: "10. Which of the following is an example of a civil dispute?",
    options: ["Property dispute between neighbors", "Murder case", "Theft case", "Assault case"],
    correctAnswer: "Property dispute between neighbors"
  }
];

const CYBER_LAW = [
  {
    question: "1. What is the main purpose of Cyber Law?",
    options: ["Regulate online activities and protect digital rights", "Regulate agriculture", "Manage criminal procedure in courts", "Oversee taxation"],
    correctAnswer: "Regulate online activities and protect digital rights"
  },
  {
    question: "2. Which Act governs cybercrime and electronic commerce in India?",
    options: ["Information Technology Act, 2000", "Indian Penal Code, 1860", "Companies Act, 2013", "Civil Procedure Code, 1908"],
    correctAnswer: "Information Technology Act, 2000"
  },
  {
    question: "3. What is phishing in cybercrime?",
    options: ["Fraudulent attempt to obtain sensitive information", "Unauthorized access to government files", "Spreading viruses intentionally", "Hacking a server physically"],
    correctAnswer: "Fraudulent attempt to obtain sensitive information"
  },
  {
    question: "4. Which of the following is considered a cybercrime?",
    options: ["Hacking", "Identity theft", "Cyberstalking", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "5. What does digital signature ensure?",
    options: ["Authentication and integrity of electronic documents", "Faster internet speed", "Encryption of files only", "Protection from physical theft"],
    correctAnswer: "Authentication and integrity of electronic documents"
  },
  {
    question: "6. Which section of IT Act deals with hacking?",
    options: ["Section 66", "Section 375", "Section 420", "Section 124A"],
    correctAnswer: "Section 66"
  },
  {
    question: "7. What is cyberstalking?",
    options: ["Using electronic communication to harass someone", "Stealing physical property", "Defaming someone offline", "Running unauthorized software on your own PC"],
    correctAnswer: "Using electronic communication to harass someone"
  },
  {
    question: "8. Which of the following is illegal under Cyber Law?",
    options: ["Unauthorized access to computers", "Spreading malware", "Publishing obscene content online", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "9. What is the main authority for cyber regulation in India?",
    options: ["CERT-In (Computer Emergency Response Team)", "CBI", "Supreme Court", "Election Commission"],
    correctAnswer: "CERT-In (Computer Emergency Response Team)"
  },
  {
    question: "10. What does cyberlaw protect?",
    options: ["Digital rights, privacy, and information security", "Food safety", "Labor rights", "Property registration"],
    correctAnswer: "Digital rights, privacy, and information security"
  }
];

const RADIOLOGY = [
  {
    question: "1. What is the primary purpose of radiology in medicine?",
    options: ["Diagnose and treat diseases using imaging techniques", "Perform surgeries", "Prescribe medications", "Monitor vital signs"],
    correctAnswer: "Diagnose and treat diseases using imaging techniques"
  },
  {
    question: "2. Which imaging technique uses X-rays to view internal structures?",
    options: ["X-ray radiography", "MRI", "Ultrasound", "CT scan"],
    correctAnswer: "X-ray radiography"
  },
  {
    question: "3. What does MRI stand for?",
    options: ["Magnetic Resonance Imaging", "Medical Radiology Imaging", "Magnetic Radiography Investigation", "Multiple Resonance Identification"],
    correctAnswer: "Magnetic Resonance Imaging"
  },
  {
    question: "4. Which modality is most suitable for imaging soft tissues?",
    options: ["MRI", "X-ray", "CT scan", "Fluoroscopy"],
    correctAnswer: "MRI"
  },
  {
    question: "5. What is the role of contrast agents in radiology?",
    options: ["Enhance visibility of structures in imaging", "Treat infections", "Monitor heart rate", "Provide anesthesia"],
    correctAnswer: "Enhance visibility of structures in imaging"
  },
  {
    question: "6. Which imaging technique uses high-frequency sound waves?",
    options: ["Ultrasound", "CT scan", "MRI", "X-ray"],
    correctAnswer: "Ultrasound"
  },
  {
    question: "7. What is a CT scan primarily used for?",
    options: ["Detailed cross-sectional images of body structures", "Measuring blood pressure", "Monitoring heart rate", "Testing reflexes"],
    correctAnswer: "Detailed cross-sectional images of body structures"
  },
  {
    question: "8. What is fluoroscopy used for?",
    options: ["Real-time moving images of internal structures", "Static images only", "Measuring oxygen saturation", "Monitoring neural activity"],
    correctAnswer: "Real-time moving images of internal structures"
  },
  {
    question: "9. What is a major risk associated with X-rays and CT scans?",
    options: ["Radiation exposure", "Allergic reaction", "Infection", "High blood pressure"],
    correctAnswer: "Radiation exposure"
  },
  {
    question: "10. Which imaging modality is safest during pregnancy?",
    options: ["Ultrasound", "X-ray", "CT scan", "PET scan"],
    correctAnswer: "Ultrasound"
  }
];

const GENERAL_MEDICINE = [
  {
    question: "1. What is the normal adult body temperature?",
    options: ["37°C", "35°C", "39°C", "36°C"],
    correctAnswer: "37°C"
  },
  {
    question: "2. Which vitamin deficiency causes scurvy?",
    options: ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin A"],
    correctAnswer: "Vitamin C"
  },
  {
    question: "3. What is the most common cause of type 2 diabetes?",
    options: ["Insulin resistance", "Autoimmune destruction of beta cells", "Excess glucagon", "Low protein intake"],
    correctAnswer: "Insulin resistance"
  },
  {
    question: "4. Which organ is primarily affected by hepatitis?",
    options: ["Liver", "Kidney", "Heart", "Lung"],
    correctAnswer: "Liver"
  },
  {
    question: "5. What is the main symptom of anemia?",
    options: ["Fatigue and pallor", "Fever", "Cough", "Rashes"],
    correctAnswer: "Fatigue and pallor"
  },
  {
    question: "6. Which bacteria causes tuberculosis?",
    options: ["Mycobacterium tuberculosis", "Staphylococcus aureus", "Escherichia coli", "Streptococcus pneumoniae"],
    correctAnswer: "Mycobacterium tuberculosis"
  },
  {
    question: "7. What is the first-line treatment for hypertension?",
    options: ["Lifestyle modifications", "Surgery", "Insulin therapy", "Chemotherapy"],
    correctAnswer: "Lifestyle modifications"
  },
  {
    question: "8. Which electrolyte imbalance can cause cardiac arrhythmias?",
    options: ["Potassium", "Sodium", "Calcium", "Magnesium"],
    correctAnswer: "Potassium"
  },
  {
    question: "9. Which condition is characterized by high blood sugar levels?",
    options: ["Diabetes mellitus", "Hypertension", "Anemia", "Hypothyroidism"],
    correctAnswer: "Diabetes mellitus"
  },
  {
    question: "10. Which disease is prevented by the BCG vaccine?",
    options: ["Tuberculosis", "Polio", "Measles", "Hepatitis B"],
    correctAnswer: "Tuberculosis"
  }
];

const PSYCHIATRY = [
  {
    question: "1. What is the primary focus of psychiatry?",
    options: ["Diagnosis and treatment of mental disorders", "Surgical procedures", "Heart diseases", "Bone fractures"],
    correctAnswer: "Diagnosis and treatment of mental disorders"
  },
  {
    question: "2. Which of the following is a mood disorder?",
    options: ["Depression", "Schizophrenia", "Epilepsy", "Parkinson’s disease"],
    correctAnswer: "Depression"
  },
  {
    question: "3. What is the first-line treatment for major depressive disorder?",
    options: ["Antidepressants", "Antibiotics", "Chemotherapy", "Insulin therapy"],
    correctAnswer: "Antidepressants"
  },
  {
    question: "4. Which disorder is characterized by delusions and hallucinations?",
    options: ["Schizophrenia", "Anxiety disorder", "Bipolar disorder", "Dementia"],
    correctAnswer: "Schizophrenia"
  },
  {
    question: "5. What is cognitive behavioral therapy (CBT)?",
    options: ["A psychotherapy technique", "A type of surgery", "A diagnostic test", "A drug therapy"],
    correctAnswer: "A psychotherapy technique"
  },
  {
    question: "6. Which neurotransmitter is primarily associated with depression?",
    options: ["Serotonin", "Insulin", "Dopamine", "Acetylcholine"],
    correctAnswer: "Serotonin"
  },
  {
    question: "7. Which disorder involves excessive worry and fear without a specific cause?",
    options: ["Generalized Anxiety Disorder", "Bipolar disorder", "Schizophrenia", "Autism"],
    correctAnswer: "Generalized Anxiety Disorder"
  },
  {
    question: "8. What is the term for a sudden, intense episode of fear?",
    options: ["Panic attack", "Mania", "Phobia", "Obsessive-compulsive episode"],
    correctAnswer: "Panic attack"
  },
  {
    question: "9. Which therapy involves family or group sessions to support mental health?",
    options: ["Group therapy", "Surgery", "Radiotherapy", "Antibiotic therapy"],
    correctAnswer: "Group therapy"
  },
  {
    question: "10. Which psychiatric disorder is characterized by alternating episodes of mania and depression?",
    options: ["Bipolar disorder", "Schizophrenia", "Anxiety disorder", "Depression"],
    correctAnswer: "Bipolar disorder"
  }
];

const MainSection=document.getElementById('MainSection');
const QuizSection=document.getElementById('QuizSection');
const testmainCard=document.getElementById('maincard');

//Logi for creating QuizzSection withquestions, option, submit button

function createQuizz(data) {
  QuizSection.style.display = 'block';
  MainSection.style.display = 'none';
  // testmainCard.innerHTML = ''; // clear previous quiz cards
  let UserName=prompt('Enter Your Name: ');
  let userAnswers = [];
  data.forEach((item, index) => {
    let QuizzCard = document.createElement('div');
    QuizzCard.classList.add('quizcard');
    // unique name for each question
    const inputName = `q${index}`;

    // create question HTML
    QuizzCard.innerHTML = `
      <h3>${item.question}</h3>
      <ul>
        ${item.options
          .map(
            (opt, i) => `
            <li>
              <input type="radio" name="${inputName}" id="${inputName}_${i}" value="${opt}">
              <label for="${inputName}_${i}">${opt}</label>
            </li>`
          )
          .join('')}
      </ul>
      <button class="saveBtn">Save</button>
    `;

    testmainCard.appendChild(QuizzCard);

    
  
    // handle save button
    const saveBtn = QuizzCard.querySelector('.saveBtn');
    saveBtn.addEventListener('click', () => {
      const selected = QuizzCard.querySelector(`input[name="${inputName}"]:checked`);
      
      if (selected){
        if (! userAnswers.includes(selected.value)){
          userAnswers.push(selected.value);
          alert(`Selected Option: ${selected.value}`);
        }
      } else {     
        alert("Please select an answer first!");
      }
    });
  });


  // Optional: Add a Submit button to calculate score
  document.getElementById('submitBtn').addEventListener('click', () => {
    
    let score = 0;
    if (userAnswers.length > 0){
      QuizSection.style.display='none';
      data.forEach((q, i) => {
        if (userAnswers[i] === q.correctAnswer) score++;
      });

      const thanksCard=document.querySelector('.thanksCard');
      const cardDiv=document.createElement('div');
      cardDiv.classList.add('submitCard');
      cardDiv.innerHTML=`
          <h1>Thanks For Partcipating</h1>
          <h3>Your Name: ${UserName}</h3>
          <h3>Yuor Score: ${score}/${data.length}</h3>
          <a href="">Back To Main Page</a>`;
      thanksCard.appendChild(cardDiv);
      document.getElementById('thanks').style.display='block';
    }
    else{
      alert(`Please write the quizz First..!`);
    }
  });
}



// logic for back to Mainsection[course section] from qizz
// document.getElementById('BackToMainsection').addEventListener('click',()=>{
//   MainSection.style.display='grid';
//   QuizSection.style.display='none';
// });