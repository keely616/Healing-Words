const START_BTN = document.getElementById('startRecordBtn')
const TRANSCRIPT_BOX = document.getElementById('transcriptionBox')

let userInput = []
let userPoints = 0
let postitiveWords = ["good", "great"]
let neagtiveWords = ["bad", "awful"]

let isRecording = false
let speechObj = null 

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

if (!speechRecognition){
    START_BTN.innerText = "Speech Recognition is not enabled"
    START_BTN.disabled = true 
    STOP_BTN.disabled= true
}

function startRecording (){
    START_BTN.innerText = "Stop Watering Your Plant"
    speechObj = new speechRecognition()
    speechObj.start()
    speechObj.onresult = transcribe
}

function transcribe(e){
    const {transcript} = e.results[0][0]
    TRANSCRIPT_BOX.textContent += `${transcript}` // checker
    userInput.push(transcript.split(" "))
    console.log(userInput) //checker 

}

function stopRecording(){
    speechObj.stop()
    speechObj = null
    START_BTN.innerText = "Water Your Plant"
}



function increasePoints(num){
    userPoints += num
    console.log(userPoints)
}

function decreasePoints(num){
    userPoints -= num
    console.log(userPoints)
}

function counter(){
    positiveCount = 0
    negativeCount = 0


    // TO DO: for each word in userInput found in positiveWords add 1 to positive count 
    // TO DO: for each word in userInput found in negativeWords add 1 to positive count 
}




START_BTN.addEventListener('click', () => {
    isRecording = !isRecording
    isRecording ? startRecording(): stopRecording()})



