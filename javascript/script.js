const display = document.getElementById("displaySelection");
const enter = document.getElementById("enter");
const add = document.getElementById("addOption");
const pool = document.getElementById("pool"); 
const data = document.getElementsByClassName("data");
enter.onclick = startSelection;
add.onclick = addOption;

function startSelection() {
    createTable();
    random();
    pool.innerHTML = "";
}

function createTable() {
    let table = document.createElement("table");

    display.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        table.innerHTML += "<tr><td class='item'>"+ data[i].value +"</td></tr>";
        data[i].value = "";
    }

    display.appendChild(table);
}

function random() {
    const options = document.querySelectorAll(".item");
    options[Math.floor(Math.random()*options.length)].classList.add("select");
}

function addOption() {
    const inputBox = document.createElement("input");
    const brick = document.getElementById("brick");
    inputBox.classList.add("data");
    inputBox.classList.add("col-3");
    pool.insertBefore(inputBox, brick);
}