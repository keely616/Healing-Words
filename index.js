const START_BTN = document.getElementById('startRecordBtn')
const TRANSCRIPT_BOX = document.getElementById('transcriptionBox')
const IMPACT_BOX = document.getElementById('resultBox')

let userInput = null 
let userPoints = 0
let postitiveWords = ["good", "great"]
let negativeWords = ["bad", "awful"]

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
    TRANSCRIPT_BOX.textContent += `${transcript} ` // checker
    userInput = transcript.split(" ")
    console.log(userInput) //checker 
}

function stopRecording(){
    speechObj.stop()
    speechObj = null
    counter()
    //isR ? startRecording(): stopRecording()
    START_BTN.innerText = "Water Your Plant"
}



function increasePoints(num){
    userPoints += num
    console.log(userPoints)
    IMPACT_BOX.textContent += ` User gained ${num} points`
}

function decreasePoints(num){
    userPoints -= num
    console.log(userPoints)
    IMPACT_BOX.textContent += ` User lost ${num} points`
}

function counter(){
    let positiveCount = 0
    let negativeCount = 0

    for (let i = 0; i < userInput.length; i++){
        console.log(userInput[i])
        if (postitiveWords.includes(userInput[i])){ 
            positiveCount += 1
        }
        else if (negativeWords.includes(userInput[i])){
            negativeCount += 1
        }
    }

    compare(positiveCount, negativeCount)

    console.log(positiveCount)
    console.log(negativeCount)
    // TO DO: for each word in userInput found in positiveWords add 1 to positive count 
    // TO DO: for each word in userInput found in negativeWords add 1 to positive count 
}

function compare(pos, neg){
    if (pos - neg > 0){
        increasePoints(pos)
    }
    else if (pos - neg < 0 ){
        decreasePoints(neg)
    }
    else{
        IMPACT_BOX.textContent += ` User did not gain or loose points`
    }
}




START_BTN.addEventListener('click', () => {
    isRecording = !isRecording
    isRecording ? startRecording(): stopRecording()})



