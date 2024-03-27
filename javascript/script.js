const display = document.getElementById("displaySelection");
const enter = document.getElementById("enter");
const add = document.getElementById("addOption");
const pool = document.getElementById("pool"); 
    const data = new Array(document.getElementsByClassName("data"));
enter.onclick = startSelection;
add.onclick = addOption;


function startSelection() {
    createTable();
    console.log(data)
    random();
}

function createTable() {
    let table = document.createElement("table");

    for (var i = 0; i < data.length; i++) {
        table.innerHTML = "<tr><td>"+ data[i].value +"</td></tr>";
    }

    display.appendChild(table);
}


function random() {

}

function addOption() {
    const inputBox = document.createElement("input");
    inputBox.classList.add("data");
    inputBox.classList.add("col-3");
    pool.insertBefore(inputBox, add);
}