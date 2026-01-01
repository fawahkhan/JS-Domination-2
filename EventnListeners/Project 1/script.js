// make a project using keydown listener , you can display the element that you press on the screen using keyboard.
//approach
//event listener poori window pe lagega

let h1 = document.querySelector("h1")

window.addEventListener("keydown", function(dets){
    if(dets.key === " " ){
        h1.textContent= "SPACE"
    } 
    else {
        h1.textContent= dets.key
    }
}
)