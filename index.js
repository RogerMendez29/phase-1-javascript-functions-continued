function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
 
// console.log(saturdayFun())

const mondayWork = (acitvity = "go to the office")=>{
    return `This Monday, I will ${acitvity}.`
}

// console.log(mondayWork())

function wrapAdjective (flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

console.log(wrapAdjective()())