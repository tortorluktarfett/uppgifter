
function init(){
   document.getElementById("button").onclick = click;
}
 
function click(){
    let text = document.getElementById("text");
    text.hidden = !text.hidden;
}
 
window.onload = init;