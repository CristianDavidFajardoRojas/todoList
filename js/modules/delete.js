export const deleteTask = async id => {
    let config = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    };
    await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`, config)
}
