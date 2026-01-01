//i want to mke the paragraph green when we click on it

//step 1 - select the paragraph first
let p = document.querySelector("p")
//step2- realise what we have to do on the paragraph and add event listener accordingly
//step 2 - add appropriate event listener to it. event listeneres are the reactions to the actions we do.
p.addEventListener("click",function(){
    p.style.color = "green"
})
//done
//add an event listener such that when we double click the paragraph , it should turn yellow.
function dblclick(){
    p.style.color = "yellow"
}
p.addEventListener("dblclick", dblclick)


//remove double click event 
p.removeEventListener("dblclick", dblclick)

/*add an event listener such that whenever anyone 
types inside the input field i should know.*/


//  let inp = document.querySelector("input")
//  inp.addEventListener("input" , function(data){
//     console.log(data)
//  })

let inp = document.querySelector("input")
inp.addEventListener("input" , function(dets){
    if(dets.data !== null){
        console.log(dets.data)
    } 
})

//change tb chlta hai jb hamare input textarea ya select me kuch change hojaye

//fire an event as soon as we select a device that tells us that the device is selected instead of select your device.

let sel = document.querySelector("select")

sel.addEventListener("change" , function(dets){
    let h = document.querySelector("h3")
    h.textContent = `Device selected - ${dets.target.value} `
    console.log(dets.target.value)
})