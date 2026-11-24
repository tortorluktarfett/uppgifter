
function init(){
    document.getElementById("addForm").onsubmit = addItem;
}

function addItem(event){
    event.preventDefault(); // hindrar att sidan laddas om
    
    let input = document.getElementById("newItem");
    let text = input.value.trim();

    if (text === "") {
        return;
    }

    // Skapa elementen
    let li = document.createElement("li");

    let sentence = document.createElement("p");
    sentence.textContent = text;
    sentence.addEventListener("click", highlightText);
    sentence.addEventListener("dblclick", removeItem); // lägg till händelselyssnare för att ta bort objektet

    li.appendChild(sentence);
    document.getElementById("list").appendChild(li);

    input.value = "";
    input.focus();
}

function highlightText() {
    this.style.backgroundColor = "yellow";
}

function removeItem(){
    this.parentElement.remove();
}

window.onload = init;