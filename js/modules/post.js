export const postNewTask = async task => {
    let newTask = {
        "task": task,
        "status": "On hold",
    }
    let config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newTask)
    };
    await fetch("https://66619c2c63e6a0189feab680.mockapi.io/Tasks", config)
}

export const postNewStatus = async task => {
    let newTask = {
        "task": task,
        "status": "Ready",
    }
    let config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newTask)
    };
    await fetch("https://66619c2c63e6a0189feab680.mockapi.io/Tasks", config)
}