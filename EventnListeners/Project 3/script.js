//jab bhi form sub,,it hota hai toh hame kuch krwana hai
//the moment i submit we want it to make a card of the details i have entered.
//problem 1 : as soon as we submit the form , the page gets reloaded. and all our changes get lost . js ke banaye huye changes rehte nhi hai reload krne pe. they vanish the moment we reload.
//solution 1 / task : hame form ko mana krna hai ki reload na ho submit krne pe
//yahin js me ek card baanayenge aur last me jo card banegaa usse main div me append krdenge!

let form = document.querySelector("form") //selected form
let inputs = document.querySelectorAll("input") //selected all 5 inputs
let main = document.querySelector("#main")


form.addEventListener("submit" , function(dets){ //form pe event listener lagaya submit ka
    //hame form ko rokna hai submit hone se , agr form submit hogya tohh saari details chali jayengi
    dets.preventDefault() //ab form submmit hona band hogya

    //console.log(inputs) //isse we will get a nodelist i.e. array type structure
    /* ye krne pe saari values mil rhi hai console window pe
    console.log(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value,
    )
        */
    let card = document.createElement("div") //card nam ka div create kiya
    card.classList.add("card")  //card nam ke div ko class dedi card

    //ab iss div ke andr profile nam ka div banayenge
    let profile = document.createElement("div")
    profile.classList.add("profile")

    let img = document.createElement("img")   //image tag banayaa
    img.setAttribute(
        "src" , 
        inputs[0].value)
    
    let h3 = document.createElement("h3")
    h3.textContent = inputs[1].value
    let h5 = document.createElement("h5")
    h5.textContent = inputs[2].value
    let p = document.createElement("p")
    p.textContent = inputs[3].value
    
    profile.appendChild(img)
    card.appendChild(profile)  //profile div ko card div me daldiya
    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)
    
    main.appendChild(card)

    inputs.forEach(function(inp){
        if(inp.type !== "submit")
            inp.value = ""
    })

})

