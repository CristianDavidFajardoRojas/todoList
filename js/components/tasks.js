export const allTasks = async data => {
    let plantilla = "";
    let plantillaReady = "";
    
    data.reverse().forEach(dict => {
        if(dict.status == "On hold"){
            plantilla += /*html*/ `
        <article class = "onHold">
            <span class="span_task">${dict.task}</span>
            <div class="div_2images">
                <div class="check">
                    <img src="https://www.svgrepo.com/show/500802/check.svg">
                </div>
                <div class="trashcan">
                    <img src="https://www.svgrepo.com/show/491509/trash.svg">
                </div>
            </div>
        </article>
            `;
        } else {
            plantillaReady += /*html*/`
            <article class="ready">
            <del><span class="span_task">${dict.task}</span></del>
            <div class="div_2images">
                <div>
                    <img src="https://www.svgrepo.com/show/500802/check.svg">
                </div>
                <div class="trashcan">
                    <img src="https://www.svgrepo.com/show/491509/trash.svg">
                </div>
            </div>
        </article>
            `;
        }
    })

    plantilla += plantillaReady;
    return plantilla;

};