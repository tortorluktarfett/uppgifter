let showMenu = true;
function init(){
    document.getElementById("topMenuButton").onclick = showHideMenu;
}

//function showHideMenu(){
 //   let topMenu = document.getElementById("topMenu");
//    if(showMenu){
//        topMenu.style.display = "block";
//    }
//    else{
//        topMenu.style.display = "none";
//    }

//    showMenu = !showMenu 
//}

function showHideMenu(){
    let topMenu = document.getElementById("topMenu");
    topMenu.hidden = !topMenu.hidden;
}

window.onload = init;