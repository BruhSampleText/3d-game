let task = {}

function createTask (id, type, objectName, objectVariable, amount, time) {
    task[id] = {
        type : type,
        placement : placement,
        objectName : objectName,
        objectVariable : objectVariable,
        amount : amount,
        time : time,
        taskComplete : false,
        taskFailed : false
    }
    timeThen = seconds
    showTime = 0
}

function updateTask(id) {

    switch (task[id].type) {
        case 1:
            //Fetch quest
            shortSide = `Collect ${task[id].amount} ${task[id].objectName}. (${task[id].objectVariable}/${task[id].amount})`
            break
        case 2:
            //Timed fetch quest
            showTime = time-(seconds-timeThen)
            shortSide = `Collect ${task[id].amount} ${task[id].objectName} in the next ${showTime} seconds. (${task[id].objectVariable}/${task[id].amount})`
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
                task[id].taskComplete = true
            }
            break
        case 2:
            //Timed fetch quest
            if (showTime === 0 && !task[id].taskComplete) {
                task[id].taskFailed = true
            } else if (task[id].objectVar === task[id].amount) {
                task[id].taskComplete = true
                timeThen = 0
                showTime = 0
            }
            break
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