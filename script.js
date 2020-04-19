
$(document).ready(function(){
var object = [ 
    //here are the mutiple choice questions
    //test
    {
	    question : "The official name of the novel coronavirus is:",
    	questionType: "multipleChoice",
	    answer: "SARS-CoV-2",
        explanation: "The name ‘COVID-19’ refers to the disease caused by the virus SARS-CoV-2. Coronavirus is an informal name.",
        website: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance/naming-the-coronavirus-disease-(covid-2019)-and-the-virus-that-causes-it",
	    choices: ["COVID-19", "SARS-CoV-2", "Coronavirus", "None of the above"]
    },
    {
	    question : "The US state with the most cases of COVID-19 is:",
    	questionType: "multipleChoice",
	    answer: "New York",
        explanation: "New York has more than 200,000 confirmed cases of COVID-19",
	    choices: ["California", "New York", "Texas", "Florida"]
    },
    {
	    question : "The first US state with a confirmed case of COVID-19 is:",
    	questionType: "multipleChoice",
	    answer: "Washington",
        explanation: "The first American resident confirmed to have COVID-19 lived in Snohomish County, Washington",
	    choices: ["New York", "Virginia", "California", "Washington"]
    },
    {
	    question : "Social distancing is maintaining minimum distance of ________ between people, as well as avoid groups or gatherings.",
    	questionType: "multipleChoice",
	    answer: "6 feet",
        explanation: "The CDC recommends staying a distance of 6 feet away from other people.",
	    choices: ["10 feet", "5 feet", "6 feet", "4 feet"]
    },
    {
	    question : "Which of the following is NOT a common symptom of COVID-19?",
    	questionType: "multipleChoice",
	    answer: "Headache",
        explanation: "While all of these are potential symptoms, Shortness of breath, dry coughs, and fever, are all more common than headaches.",
	    choices: ["Shortness of breath", "Dry cough", "Fever", "Headache"]
    },
    {
	    question : "The CDC recommends that you wash your hands for:",
    	questionType: "multipleChoice",
	    answer: "at least 20 seconds",
        explanation: "The CDC recommends washing your hands for at least 20 seconds after especially being in public or touching you face.",
	    choices: ["at least 15 seconds", "at least 20 seconds", "at least 30 seconds", "as long as possible"]
    },
    {
	    question : "Mild and moderate cases of COVID-19 are ________ of the total cases.",
    	questionType: "multipleChoice",
	    answer: "81%",
        explanation: "the CDC says that mild symptoms up to mild pneumonia constitute 81% of all cases.",
	    choices: ["81%", "50%", "9%", "38%"]
    },
    {
	    question : "Critical cases of COVID-19 are ________ of the total cases.",
    	questionType: "multipleChoice",
	    answer: "5%",
        explanation: "The CDC says that critical cases, which involve shock, respiratory failure, or multiorgan system dysfunction, make up 5% of all COVID-19 cases.",
	    choices: ["19%", "7%", "5%", "4%"]
    },
    {
	    question : "The median length of hospitalization for COVID-19 is:",
    	questionType: "multipleChoice",
	    answer: "10-13 days",
        explanation: "The CDC says that the median hospitalization length among survivors is 10 - 13 days.",
	    choices: ["Not yet known", "3-4 weeks", "10-13 days", "5-7 days"]
    },
    {
	    question : "Cloth face coverings should:",
    	questionType: "multipleChoice",
	    answer: "All of the above",
        explanation: "In addition to fitting snugly, including multiple layers of fabric and allowing unrestricted breathing, cloth face coverings should also be able to be washed without changing shape or damage.",
	    choices: ["Fit tightly but comfortably", "Include multiple layers of fabric", "Allow for breathing without restriction", "All of the above"]
    },

    //here are the true/false questions"
    {
        question: "Essential oils can cure COVID-19",
        questionType: "trueFalse",
	    answer: "false",
        explanation: "There is currently no treatment or vaccine that is proven to be effective against COVID-19",
	    choices: ["true", "false"]
    },
    {
        question: "COVID-19 only seriously affects those above 60 years old",
        questionType: "trueFalse",
	    answer: "false",
        explanation: "While older people are more susceptible to serious cases, people of all ages can develop dangerous  symptoms",
	    choices: ["true", "false"]
    },
    {
        question: "The first reported case of COVID-19 was in Wuhan, China",
        questionType: "trueFalse",
	    answer: "true",
        explanation: "The novel coronavirus originated in Wuhan, China and subsequently spread",
	    choices: ["true", "false"]
    },
    {
        question: "The novel coronavirus is a virus so antibacterial soaps do nothing to it",
        questionType: "trueFalse",
	    answer: "false",
        explanation: "while using antibacterial soaps does not have any benefits over regular hand soap, all soaps are effective against the virus because they attack the phospholipid bilayer that surrounds the virus",
	    choices: ["true", "false"]
    },
    {
        question: "China leads the world in reported COVID-19 cases",
        questionType: "trueFalse",
	    answer: "false",
        explanation: "America has the most confirmed cases of the disease COVID-19, though there are suspicions that China and other countries are vastly underreporting their true number of cases",
	    choices: ["true", "false"]
    },
    {
        question: "Many people with COVID-19 are not aware that they have the disease",
        questionType: "trueFalse",
	    answer: "true",
        explanation: "Estimates range from 25-50% of cases being asymptomatic",
	    choices: ["true", "false"]
    },
    {
        question: "You are not likely to die as a result of COVID-19",
        questionType: "trueFalse",
	    answer: "true",
        explanation: "The estimated worldwide fatality rate is 1.4%",
	    choices: ["true", "false"]
    },
    {
        question: "The coronavirus has been confirmed as originating from bats",
        questionType: "trueFalse",
	    answer: "false",
        explanation: "Although bats are currently the leading theory, it is not confirmed and another possible origin is pangolins",
	    choices: ["true", "false"]
    },
    {
        question: "The coronavirus cannot be spread via mosquitos and ticks",
        questionType: "trueFalse",
	    answer: "true",
        explanation: "There is no evidence to suggest that the coronavirus can be spread through mosquitos and ticks, the only known way it can spread is through infected people",
	    choices: ["true", "false"]
    },
    {
        question: "Testing negative for the coronavirus means that you can never get it",
        questionType: "trueFalse",
	    answer: "false",
        explanation: "Testing negative means that while you did not have the coronavirus at the time of testing, you could still get infected",
	    choices: ["true", "false"]
    },
    {
        question: "Living in areas with very hot climates reduces the risk of developing COVID-19 due to the heat damaging the virus",
        questionType: "trueFalse",
	    answer: "false",
        explanation: "Neither hot nor cold weather affects the virus",
	    choices: ["true", "false"]
    },
    {
        question: "Being able to hold your breath for ten seconds without discomfort means that you do not have COVID-19",
        questionType: "trueFalse",
	    answer: "false",
        explanation: "Being able to comfortably hold your breath does not indicate that you do not have COVID-19, the only way to be sure is to be tested by a medical professional",
	    choices: ["true", "false"]
    },
    {
        question: "Less than 1 in 4 people who have catch the coronavirus require hospitalization.",
        questionType: "trueFalse",
	    answer: "true",
        explanation: "The WHO states that only about 1/5 of those with the coronavirus need hospital care due to most cases being mild",
	    choices: ["true", "false"]
    },
    {
        question: "Regularly spraying yourself with alcohol or chlorine cures COVID-19",
        questionType: "trueFalse",
	    answer: "false",
        explanation: "While both alcohol and chlorine are disinfectants they are not able to kill viruses that are inside your body. Ingesting alcohol will also not harm the coronavirus",
	    choices: ["true", "false"]
	},
]
$("#explanationLine").hide();
$("#nextLine").hide();
let points = 0;

var status = {
    i : 0,
    currentQuestion : {

    },
    clicked: false,
    score : 0.5,
}
function q(){
    status.clicked = false;
    status.currentQuestion = object[status.i];
    //Replaces question and answer towards the next page
    $("#qSpan").text(status.currentQuestion.question)
    $("#btnA").text(status.currentQuestion.choices[0])
    $("#btnB").text(status.currentQuestion.choices[1])
    $("#btnC").text(status.currentQuestion.choices[2])
    $("#btnD").text(status.currentQuestion.choices[3])

    if (status.currentQuestion.questionType == "multipleChoice"){
        $("#answer1").show();
        $("#answer2").show();
        $("#answer3").show();
        $("#answer4").show();
        $("#answer1").css("height", "125px");
        $("#answer1").css("font-size", "150%");
        $("#answer2").css("height", "125px");
        $("#answer3").css("font-size", "150%");
    } else if(status.currentQuestion.questionType == "trueFalse"){
        $("#answer1").show();
        $("#answer2").show();
        $("#answer3").hide();
        $("#answer4").hide();
        $("#answer1").css("height", "250px");
        $("#answer1").css("font-size", "300%");
        $("#answer2").css("height", "250px");
        $("#answer2").css("font-size", "300%");
    }
}
    $("#answer1").click(function(){
        if(status.currentQuestion.answer === status.currentQuestion.choices[0] && status.clicked === false){
            status.i = status.i+1
            points += 1;
            status.clicked = true;
        }
        else if(status.clicked === false){
            status.i = status.i+1
            status.score *=2
            status.clicked = true;
            $("#scoreSpan").text(status.score)
        }
        $("#eSpan").text(status.currentQuestion.explanation)
        $("#explanation").append(`<a target='_blank' href=${status.currentQuestion.website}</a>`);
    })
    $("#answer2").click(function(){
        if(status.currentQuestion.answer === status.currentQuestion.choices[1] && status.clicked === false){
            status.i = status.i+1 ;
            points += 1;
            status.clicked = true;
        }
        else if(status.clicked === false){
            status.i = status.i+1;
            status.score *=2;
            status.clicked = true;
            $("#scoreSpan").text(status.score)
        }
        $("#eSpan").text(status.currentQuestion.explanation)
        $("#explanation").append(`<a target='_blank' href=${status.currentQuestion.website}</a>`);
    })
    $("#answer3").click(function(){
        if(status.currentQuestion.answer === status.currentQuestion.choices[2] && status.clicked === false){
            status.i = status.i+1;
            points += 1;
            status.clicked = true;
        }
        else if(status.clicked === false){
            status.i = status.i+1
            status.score *=2
            status.clicked = true;
            $("#scoreSpan").text(status.score)
        }
        $("#eSpan").text(status.currentQuestion.explanation)
        $("#explanation").append(`<a target='_blank' href=${status.currentQuestion.website}</a>`);
    })
    $("#answer4").click(function(){
        if(status.currentQuestion.answer === status.currentQuestion.choices[3] && status.clicked === false){
            status.i = status.i+1;
            points += 1;
            status.clicked = true;
        }
        else if(status.clicked === false){
            status.i = status.i+1;
            status.score *= 2;
            status.clicked = true;
            $("#scoreSpan").text(status.score)
        }
        $("#eSpan").text(status.currentQuestion.explanation);
        $("#explanation").append(`<a target='_blank' href=${status.currentQuestion.website}</a>`);
})

$(".answerChoices").click(function(){
        status.clicked = true;
        $("#explanationLine").show();
        $("#nextLine").show();
    });

q()

$("#next").click(function(){
    $("#eSpan").text("")
    $("#btnA").text("")
    $("#btnB").text("")
    $("#btnC").text("")
    $("#btnD").text("")
    $("#explanationLine").hide();
    $("#nextLine").hide();
    q()
    status.clicked = false
    $("#totalScoreSpan").text(points);
})
})

// let rona = ["https://media3.giphy.com/media/Wt1C2c54Cwgkz2H9q5/giphy.webp?cid=ecf05e4729c60e56b9a6a6198bea85bd98b6bebca0b0c8d2&rid=giphy.webp",
// "https://media1.giphy.com/media/j2dbAdicfdwQ2Fj0Mw/200.webp?cid=ecf05e475450a66061bc4183213fe7dc00d8a576cc01109d&rid=200.webp",
// "https://media1.giphy.com/media/YPhuwt9pV2XLM2HIq4/giphy.webp?cid=ecf05e475450a66061bc4183213fe7dc00d8a576cc01109d&rid=giphy.webp",
// "https://media3.giphy.com/media/kgsBIWtPd5Q5Pw11Rq/giphy.webp?cid=ecf05e475450a66061bc4183213fe7dc00d8a576cc01109d&rid=giphy.webp",
// "https://media2.giphy.com/media/VG24hSmLxgsDD0tV6k/giphy.webp?cid=ecf05e475450a66061bc4183213fe7dc00d8a576cc01109d&rid=giphy.webp",
// "https://media1.giphy.com/media/WPubvqbeCsXIwhFtrB/giphy.webp?cid=ecf05e475450a66061bc4183213fe7dc00d8a576cc01109d&rid=giphy.webp",
// "https://media0.giphy.com/media/IdHM0eoDSzssw8QLB1/200.webp?cid=ecf05e475f35e1b3d5526d0a22fa8618a907d88e423560b8&rid=200.webp",
// "https://media1.giphy.com/media/JQ4vYsuzzmBEtssgm6/giphy.webp?cid=ecf05e475f35e1b3d5526d0a22fa8618a907d88e423560b8&rid=giphy.webp",
// "https://media3.giphy.com/media/XepcmEMNavyHv1qe8u/giphy.webp?cid=ecf05e4768435eaa23c7f0e4c964cd1fa9d8c083c6971518&rid=giphy.webp",
// "https://media0.giphy.com/media/MDZcrJILOJgK3UBD8Q/giphy.webp?cid=ecf05e4768435eaa23c7f0e4c964cd1fa9d8c083c6971518&rid=giphy.webp",
// "https://media1.giphy.com/media/cMEvtBZOHnl3QuR9oC/giphy.webp?cid=ecf05e47b2a0667ad25efe4e613da0c1194395a716a12800&rid=giphy.webp",
// "https://media1.giphy.com/media/Svphjt3E00gERwSLcR/giphy.webp?cid=ecf05e470af6d72ba2475d188d1b2ed827bf5bc21272f618&rid=giphy.webp",
// "https://media0.giphy.com/media/YqEXVQT755oOmiSZj1/giphy.webp?cid=ecf05e47d4f796185a710c1ed35defc6fbfa665c71e9bc4e&rid=giphy.webp"
// ];

// let image = 0;

// setInterval(function(){
//     let imageLink = rona[image];
//     document.getElementById("giphy").src= imageLink;
//     if (image < rona.length - 1){
//         image++;
//     } else {
//         image = 0;
//     }
// },1000);

