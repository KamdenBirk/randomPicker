const data = document.getElementsByClassName("data");
const display = document.getElementById("displaySelection");

data.addEventListener('keyup', (e) => {
    createOptions(data.value);
    if(e.key === "Enter") {
        selectRandom();
    }
});

function createOptions(input) {

}