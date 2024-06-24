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
    await fetch("https://6674179975872d0e0a950e53.mockapi.io/todoList", config)
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
    await fetch("https://6674179975872d0e0a950e53.mockapi.io/todoList", config)
}