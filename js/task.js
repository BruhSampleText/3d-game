let currentTask = 1
let currentLevel = 0

let task = {}

let startTaskExe = false
let nextTask = false

function createTask (id, type, objectName, objectVariable, amount, messageCompl, messageFail, time) {
    task[id] = {
        type : type,
        placement : placement,
        objectName : objectName,
        objectVariable : objectVariable,
        amount : amount,
        time : time,
        messageCompl : messageCompl,
        messageFail : messageFail,
        //Not sure about the false/true booleans
        taskComplete : false,
        taskFailed : false
    }
    timeThen = seconds
    timeTrack = 0
}

function updateTask(id) {

    switch (task[id].type) {
        case 1:
            //Fetch quest
            shortSide = `Collect ${task[id].amount} ${task[id].objectName}. (${task[id].objectVariable}/${task[id].amount})`
            break
        case 2:
            //Timed fetch quest
            timeTrack = time-(seconds-timeThen)
            shortSide = `Collect ${task[id].amount} ${task[id].objectName} in the next ${timeTrack} seconds. (${task[id].objectVariable}/${task[id].amount})`
            break
    }
}

function gressusTask(id, byWhat, moral) {
   
    if (moral === 0) {
        task[id].objectVariable -= byWhat
    } else {
        task[id].objectVariable += byWhat
    } 
}

function checkTask() {
    switch (task[id].type) {
        case 1:
            //Fetch quest
            if (task[id].objectVar === task[id].amount) {
                shortSide = task[id].messageCompl
                task[id].taskComplete = true
            }
            break
        case 2:
            //Timed fetch quest
            if (timeTrack === 0 && !task[id].taskComplete) {
                shortSide = task[id].messageFail
                task[id].taskFailed = true
            } else if (task[id].objectVar === task[id].amount) {
                shortSide = task[id].messageCompl
                task[id].taskComplete = true
                timeThen = 0
                timeTrack = 0
            } else {
                timeTrack = time-(seconds-timeThen)
            }
            break
    }
}

function clearMessage(clearWhat) {

    switch (clearWhat) {
        case 1:
            shortHand.innerHTML = ''
        case 2: 
            fullHand.innerHTML = ''
        case 3:
        shortHand.innerHTML = ''
        fullHand.innerHTML = ''
    }
}

function clearTask(id) {
    task[id] = {}
}

function clearTaskes() {
    task = {}
}

function removeTask(id) {
    delete task[id]
}

function removeTaskes() {
    task = []
}




//[id] = string   [type] = value   [objectName] = string   [objectVariable] = value   [amount] = value
//[messageCompl] = string   [messageFail] = string   [time] = value
//Types:    1 is fetch quest    2 is timed fetch quest
function executeTaskes() {

    if (startTaskExe) {
        if (nextTask) {

            switch (currentLevel) {
                case 1:

                    switch (currentTask) {
                        case 1:
                            //example
                            createTask("can", 1, "Pie", 0, 3, "hurray", "nay")
                    }
            }

            ++currentTask
            nextTask = false
        } else {
            checkTask()
        }
    }
}