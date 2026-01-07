//hame ek character counter banana hai jo hamare enter kre huye characters ko count kr paye .
let span = document.querySelector("span")
let inp = document.querySelector("input");
inp.addEventListener("input" , function(dets){
    // span.textContent = inp.value.length 
    // console.log(inp.value.length)  //isse pata chalega ki kitne characters hai 


    //if we want to make a twitter style character counter jo character exceed hone pe red hojaye.

    let left = 20 - inp.value.length

    span.textContent = left

    if (left < 0 ){
        span.style.color = "red"
    } else{
        span.style.color = "white"
    }
})


