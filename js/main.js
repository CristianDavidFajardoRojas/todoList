import { allData } from "./modules/api.js";
import { allTasks } from "./components/tasks.js";

const main = document.querySelector(".main");
const input = document.querySelector("#input");
const button = document.querySelector("#button");

document.addEventListener("DOMContentLoaded", async e => {
////////////////////////////////////////////////////////
const dateTimeParagraph = document.querySelector('.fecha');
function updateDateTime() {
    const now = new Date();

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    dateTimeParagraph.textContent = formattedDateTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);
////////////////////////////////////////////////////////

main.innerHTML = await allTasks(await allData());

let onHold = document.querySelectorAll(".onHold");
let ready = document.querySelectorAll(".ready");

button.addEventListener('click', a => {
    
    





    });
});