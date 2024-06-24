import { allData } from "./modules/api.js";
import { allTasks } from "./components/tasks.js";
import { postNewTask, postNewStatus } from "./modules/post.js";
import { deleteTask } from "./modules/delete.js";
import { updateToOnHold, updateToReady } from "./modules/put.js";

const main = document.querySelector(".main");
const input = document.querySelector("#input");
const button = document.querySelector("#button");

document.addEventListener("DOMContentLoaded", async e => {
    main.innerHTML = await allTasks(await allData());

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



//////////////////////////////////////////////////////
button.addEventListener('click', async a => {
    if(input.value !== "") await postNewTask(input.value);
    input.value = '';
    main.innerHTML = await allTasks(await allData());
    buttonsFunction();
    });
//////////////////////////////////////////////////////



//////////////////////////////////////////////////////
const buttonsFunction = () => {
    let onHold = document.querySelectorAll(".onHold");
    let ready = document.querySelectorAll(".ready");

onHold.forEach(article => {
    let span_task = article.querySelector(".span_task");
    let check = article.querySelector(".check");
    let trashcan = article.querySelector(".trashcan");

    check.addEventListener('click', async e => {
        await updateToReady(article.id, span_task.textContent);
        main.innerHTML = await allTasks(await allData());
        buttonsFunction();
    })
    trashcan.addEventListener('click', async e => {
        await deleteTask(article.id);
        main.innerHTML = await allTasks(await allData());
        buttonsFunction();
    })
})
///////
ready.forEach(article => {
    let span_task = article.querySelector(".span_task");
    let returnTask = article.querySelector(".returnTask");
    let trashcan = article.querySelector(".trashcan");

    returnTask.addEventListener('click', async e => {
        await updateToOnHold(article.id, span_task.textContent);
        main.innerHTML = await allTasks(await allData());
        buttonsFunction();
    })

    trashcan.addEventListener('click', async e => {
        await deleteTask(article.id);
        main.innerHTML = await allTasks(await allData());
        buttonsFunction();
    })
})



}
//////////////////////////////////////////////////////


buttonsFunction();

/////////////

let scrolledToReady = false;
const scrollButton = document.getElementById('scrollButton');

scrollButton.addEventListener('click', () => {
    if (scrolledToReady) {
        scrollButton.src = "https://www.svgrepo.com/show/514107/down-round.svg"
        main.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        const firstReady = document.querySelector('.ready');
        if (firstReady) {
            scrollButton.src = "https://www.svgrepo.com/show/514274/up-round.svg"
            main.scrollTo({
                top: firstReady.offsetTop - main.offsetTop,
                behavior: 'smooth'
            });
        }
    }
    scrolledToReady = !scrolledToReady;
});
});