let count = 0 ;
let progress = document.querySelector(".progress-bar")
let text = document.querySelector("#percentText")
let intv = setInterval(function(){
    if(count<=99){
        count++
        progress.style.width = `${count}%`
        text.textContent = `${count}`
    }
    else{
        document.querySelector("h2").textContent = "Downloaded"
        clearInterval(intv)
    }
},3000/100)