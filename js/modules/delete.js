export const deleteTask = async id => {
    let config = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    };
    await fetch(`https://66619c2c63e6a0189feab680.mockapi.io/Tasks/${id}`, config)
}
