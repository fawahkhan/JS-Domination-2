let nm = document.querySelector("#name")

let form = document.querySelector("form")

form.addEventListener("submit" , function(dets){
    dets.preventDefault()  //pehle form ko submit krne se roko
    if(nm.value.length<=2){
        document.querySelector("#hide").style.display = 'initial'
    }
    else{
        document.querySelector("#hide").style.display = 'none'
    }
} )