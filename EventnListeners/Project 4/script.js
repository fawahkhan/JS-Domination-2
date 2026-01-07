//using mouseover , mouseout and mousemove
// 1. mai chahta hu ki jab bhi div pe mouse aye toh yeh peela hojaye
// 2. mai chahta hu hamare mouse ke sath sath hamaraa div bhi move kre.
let abcd = document.querySelector("#abcd")

abcd.addEventListener("mouseover" , function(){
    abcd.style.backgroundColor = "yellow"   //jab mouse div ke andr ayega toh yeh yellow hojayega
    
})

abcd.addEventListener("mouseout" , function(){
    abcd.style.backgroundColor = "red"
    abcd.textContent = "BRING THE CURSOR HERE"
})

window.addEventListener("mousemove" , function(dets){
    // console.log(dets.clientX , dets.clientY);  hame div ko inhi coordinated se move krana hai. 
    abcd.style.top = dets.clientY + "px" ;
    abcd.style.left = dets.clientX + "px" ;
    abcd.textContent = "MOVE THE CURSOR TO CONTROL ME"

    //note: remember top and left tbhi kam krta hai jab position absolute ho.
})