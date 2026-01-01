//i want ki jab bhi mai koi file upload krne jaun toh original upload file wala button mujhe na dikhe , instead jo maine button banaya hai woh mujhe dikhe. mai chahta hu ki mai click ispe kru , lekin chale purana wala button.

let btn = document.querySelector("#btn")
let inp = document.querySelector("#fileinp")
//add event listener to take the file input
btn.addEventListener("click", function(){
    inp.click(); //js se click kra diya
})
// add event listener so that when we select a file the upload file text changes to the filename
inp.addEventListener("change",function(dets){
    const file = dets.target.files[0]
    if(file){
        btn.textContent = file.name //changed the name of the button to the name of file
    }
    
}) 