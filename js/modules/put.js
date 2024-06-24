export const updateToReady = async(id, task)=>{
    let updated = {
        "task": task,
        "status": "ready"
    }
    let config = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updated)
    };
    await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`, config)
}

export const updateToOnHold = async(id, task)=>{
    let updated = {
        "task": task,
        "status": "On hold"
    }
    let config = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updated)
    };
    await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`, config)
}