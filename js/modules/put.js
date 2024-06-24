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
    await fetch(`https://66619c2c63e6a0189feab680.mockapi.io/Tasks/${id}`, config)
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
    await fetch(`https://66619c2c63e6a0189feab680.mockapi.io/Tasks/${id}`, config)
}