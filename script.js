const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const resetBtn = document.getElementById('reset-btn');
const typingIndicator = document.getElementById('typing-indicator');

const projectTitles = {
    csm: [
        "Unveiling Insights with Twitter Data: Exploring Trends, Sentiments",
        "Predicting BigMart Sales: A Regression Analysis of Product and Store Attributes",
        "Crafting Personalized Movie Recommendations: Exploring the Movielens Dataset and Word Cloud Visualization for Recommender Systems",
        "Machine Learning Approaches for Robot Fault Diagnosis in Industrial Settings: An Application of Industry 4.0",
        "Remote Patient Monitoring using Machine Learning Classifiers for IoT Healthcare",
        "Predicting home prices: A beginners journey with regression analysis using the Boston housing data set",
        "Classifying Iris Flowers: A Machine Learning Approach Based on Petal and Sepal",
        "Machine Learning-Based Anomaly Detection in IoT Sensor Data",
        "Classification of IoT Device States using Machine Learning Techniques",
        "Leafing through Data: Building a Plant Species Identification Algorithm with Machine Learning",
        "Predictive Modelling for Disease Outbreak Detection: Machine Learning Classifier Evaluation",
        "Medical Image Classification: A Machine Learning Approach for Disease",
        "Building Your Own Chatbots: Exploring Natural Language Processing Techniques with NLTK and Neural Networks"
    ],
    iot: [
        "Analysis and Exploration of Heart Disease Data",
        "Exploring Data to Analyze Team Productivity in Garment Manufacturing.",
        "Investigating Magnetic Disturbances and Soil Properties for Detecting Landmines Passively.",
        "Exploratory Analytics for Mall Customer Data",
        "Analyzing Environmental Factors and Fault Detection in Urban Street Lighting Systems.",
        "Exploratory Data Analysis on Smart Home IoT Networks Faults to Enhance Home Security."
    ],
    data_science: [
        "Airline Passenger Satisfaction: Data Preprocessing and EDA",
        "TRAFFIC ACCIDENT DATA: CLEANING EXPLORATION VISUALIZATION",
        "PATIENT RECORDS: PREPROCESSING AND EDA FOR HEALTHCARE INSIGHT",
        "SOCIAL MEDIA SENTIMENT ANALYSIS: DATA PREPROCESSING AND VISUALIZATION",
        "Cryptocurrency Price Dynamics: Graphical Analysis and Trend Detection",
        "PUBLIC HEALTH DATA: VISUALIZING EPIDEMIC OUTBREAK TRENDS",
        "STOCK MARKET DYNAMICS: TREND ANALYSIS AND VISUALIZATION",
        "WINE QUALITY DATA: EDA AND VISUALIZATION",
        "ELECTION DATA TRENDS: ANALYSIS AND VISUALIZATION",
        "EMPLOYMENT STATISTICS: DATA PREPROCESSING AND EXPLORATORY ANALYSIS",
        "AI TECHNOLOGICAL ADVANCES: TREND ANALYSIS",
        "TRANSPORT LOGISTICS DATA: GRAPHICAL REPRESENTATION"
    ],
    cse: [
        "Developing a Platform for Assessing Job Skills with SQL Integration",
        "Building a Platform for Freelancers to Offer Services with SQL Integration",
        "Building a Site for Sharing and Discovering Music with SQL Integration",
        "Creating a Website for Sharing Gardening Tips and Resources with SQL",
        "Developing an App for Monitoring Pet Health and Vet Visits with SQL",
        "Designing web interface to manage events linked to SQL",
        "Building a Course Management System with SQL Integration",
        "Weather Forecasting App: Accurate and Location-Based Weather Updates",
        "Developing a website to Calculate Nutritional Information for Recipes with SQL",
        "Pet Adoption Portal",
        "Creating a Web App to Plan and Manage Weddings with SQL Backend",
        "Travel Itinerary Planner",
        "Developing a Website for Online Cooking Classes with SQL Integration",
        "Creating a website to Share Tips and Resources for Sustainable Living with SQL"
    ],
    it: [
        "Exploring the Relationship Between Weather Patterns and Energy Consumption in Smart Homes",
        "Statistical Analysis of Breach Incident Data",
        "Study on Intrusion Detection Properties in Cybersecurity Through Data Analytics",
        "Enhancing Building Energy Efficiency by Analyzing IoT Sensor Data for Urban Development",
        "Deriving Insights into Machine Condition Monitoring for Predictive Maintenance in Industrial IoT",
        "Data Mining Models for Student Performance Analysis with EDA",
        "Systematic Study on Mechanical Failures in Manufacturing Industry 4.0 Through Data Exploration",
        "EDA on Optimal Water Management in Smart Irrigation Systems Using Node - MCU Data",
        "Identifying Structures in Aerospace Surveillance Through Analysis of Ionospheric Radar Returns",
        "Data Assessing on Industrial IoT Machine Health for Maintenance Analysis",
        "Examining Clinical and Microscopic Characteristics for Diagnosing Erythemato - Squamous Diseases"
    ]
};

let conversationStage = 0;
let userDepartment = '';

function displayMessage(message, isUser = false) {
    const messageElement = document.createElement('div');
    messageElement.className = isUser ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleUserInput() {
    const userMessage = userInput.value.trim().toLowerCase();
    displayMessage(userInput.value, true);
    userInput.value = '';

    if (userMessage === 'reset') {
        resetConversation();
        return;
    }

    typingIndicator.style.display = 'block';

    setTimeout(() => {
        typingIndicator.style.display = 'none';
        processMessage(userMessage);
    }, 1000);
}

function resetConversation() {
    chatBox.innerHTML = '';
    conversationStage = 0;
    userDepartment = '';
    displayMessage("Hello I am a bot developed by MREM community. I have been designed to help students for various purposes but at present, I am in my developing stage. It's very nice to meet you! If you want to continue further, please type 'yes'.");
}

function processMessage(message) {
    switch (conversationStage) {
        case 0:
            if (['hi', 'hello', 'yes'].includes(message)) {
                displayMessage("Hello I am a bot developed by MREM community. I have been designed to help students for various purposes but at present, I am in my developing stage. It's very nice to meet you! If you want to continue further, please type 'yes'.");
                conversationStage = 1;
            } else {
                displayMessage("I'm sorry, I didn't understand that. Please type 'hi' or 'hello' to start.");
            }
            break;
        case 1:
            if (message === 'yes') {
                displayMessage("Are you here for the Project Titles? If yes, please type 'yes' or if no, please type 'no'.");
                conversationStage = 2;
            } else {
                displayMessage("I'm sorry, I didn't understand that. Please type 'yes' to continue.");
            }
            break;
        case 2:
            if (message === 'yes') {
                displayMessage("Please type your department name (CSM, IOT, DATA_SCIENCE, CSE, IT).");
                conversationStage = 3;
            } else if (message === 'no') {
                displayMessage("Happy Learning!");
            } else {
                displayMessage("I'm sorry, I didn't understand that. Please type 'yes' or 'no'.");
            }
            break;
        case 3:
            if (projectTitles[message]) {
                userDepartment = message;
                displayMessage("Here are the project titles for your department:");
                projectTitles[userDepartment].forEach(title => {
                    displayMessage(`• ${title}`);
                });
                displayMessage("Do you need the help of a coordinator? If yes, please type 'yes' or if no, please type 'no'.");
                conversationStage = 4;
            } else {
                displayMessage("I'm sorry, I didn't recognize that department. Please type your department name (CSM, IOT, DATA_SCIENCE, CSE, IT).");
            }
            break;
        case 4:
            if (message === 'yes') {
                displayMessage("Coordinator Name: Srikanth Ghodke, Phone Number: +91 79819 36194");
            } else if (message === 'no') {
                displayMessage("Happy Learning!");
            } else {
                displayMessage("I'm sorry, I didn't understand that. Please type 'yes' or 'no'.");
            }
            break;
        default:
            displayMessage("I'm sorry, I didn't understand that. Please type 'reset' to start over.");
    }
}

sendBtn.addEventListener('click', handleUserInput);
resetBtn.addEventListener('click', resetConversation);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

resetConversation();
