let count = 0
const countUp = () => {
    count++
    const countElement = document.querySelector('#count')
    countElement.innerText = `回数: ${count}`
}

const countReset = () => {
    count = 0
    const countElement = document.querySelector('#count')
    countElement.innerText = `回数: ${count}`
}

//var isWorking = false
var timeNow
var isWorking
var timerID



var startTimer = () => {
    var timeStart = Date.now()
    if (!isWorking) {
        var oldTime = parseFloat(String(document.querySelector('#time').innerText).substr(4))
        if (oldTime != "0") {
            isWorking = true
            timerID = setInterval(timer, 1, timeStart, oldTime)
        } else {
            isWorking = true
            timerID = setInterval(timer, 1, timeStart, 0)
        }
    }
}



var timer = (timeStart, oldTime) => {
    timeNow = Date.now()
    const timeElement = document.querySelector('#time')
    var time = Math.round((oldTime * 1000 + (timeNow - timeStart))) / 1000
    timeElement.innerText = `時間: ${time}`
}

var stopTimer = () => {
    clearInterval(timerID)
    isWorking = false
}

var resetTimer = () => {
    clearInterval(timerID)
    const timeElement = document.querySelector('#time')
    timeElement.innerText = "時間: 0"
    isWorking = false
}