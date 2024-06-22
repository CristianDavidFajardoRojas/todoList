export const allData = async() => {
    let res = await fetch(`https://66619c2c63e6a0189feab680.mockapi.io/Tasks`);
    let data = await res.json();
    return data;
}