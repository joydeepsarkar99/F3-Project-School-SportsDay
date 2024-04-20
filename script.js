function OpeningCeremony(callback){
    setTimeout(()=>{
        console.log("Let the games begin")
        let scoreObj = {
            red:0,
            blue:0,
            green:0,
            yellow:0,
        }
        callback(scoreObj,LongJump)
    },1000)
}

function Race100M(scoreObj,callback){
    setTimeout(()=>{
        console.log("****100M Race begins****")
        console.log("Previous score : ",scoreObj)
        let colorTimes = {
            red : scoreObj.red + (parseInt(Math.random() * 6) + 10), 
            blue : scoreObj.blue + (parseInt(Math.random() * 6) + 10),
            green : scoreObj.green + (parseInt(Math.random() * 6) + 10),
            yellow : scoreObj.yellow + (parseInt(Math.random() * 6) + 10), 
        }
        const sortedKey = Object.keys(colorTimes).sort((a,b) => colorTimes[a] - colorTimes[b])
        scoreObj[sortedKey[0]] += 50
        scoreObj[sortedKey[1]] += 25

        console.log("Winner of 100M Race :",sortedKey[0])
        console.log("Update new score : ",scoreObj)
        callback(scoreObj,HighJump)
    },3000)
} 

function LongJump(scoreObj,callback){
    setTimeout(()=>{
        console.log("****Long Jump begins****")
        console.log("Previous score : ",scoreObj)
        let colors = []
        for(let i in scoreObj){
            colors.push(i)
        }
        const randomValue = parseInt(Math.random()*4)
        scoreObj[colors[randomValue]] += 150

        console.log("Winner of Long Jump :",colors[randomValue])
        console.log("Update new score : ",scoreObj)
        callback(scoreObj,AwardCeremony)
    },2000)
}

function HighJump(scoreObj,callback) {
    console.log("****High Jump begins****")
    let userGuess = prompt("What colour secured the highest jump ?")
    console.log("Previous score : ",scoreObj)

    if(userGuess == null || userGuess == "" || scoreObj.hasOwnProperty(userGuess.trim().toLowerCase()) == false){
        console.log("Event was cancelled")
    }
    else{
        userGuess = userGuess.trim().toLowerCase()
        scoreObj[userGuess] += 100
        console.log("Winner of High Jump :",userGuess)
    }
    console.log("Update new score : ",scoreObj)
    callback(scoreObj)
}

function AwardCeremony(scoreObj){
    console.log("****Award Ceremony begins****")
    console.log("Score Board",scoreObj)
    const sortedKey = Object.keys(scoreObj).sort((a,b) => scoreObj[b] - scoreObj[a])
    console.log(`${sortedKey[0]} came first with ${scoreObj[sortedKey[0]]} point`)
    console.log(`${sortedKey[1]} came second with ${scoreObj[sortedKey[1]]} point`)
    console.log(`${sortedKey[2]} came third with ${scoreObj[sortedKey[2]]} point`)
}

OpeningCeremony(Race100M)