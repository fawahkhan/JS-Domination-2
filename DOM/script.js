// let abd = document.getElementById("abd");
// console.dir(abd)


let h1 = document.querySelector("h1") ;
h1.innerHTML = "<i> happy new year</i>" 
h1.textContent = "Hello happy new year kese ho "
let a = document.querySelector("a");
a.setAttribute("href" , "https://www.google.com")

console.log(a.getAttribute("href"))
a.removeAttribute("href")
console.log(a.getAttribute("href"))
let h2 = document.createElement("h2")
console.log(h2) //checked if h2 is created
h2.textContent = "mera nam hai gian mai hu bada takatwar";
document.querySelector("body").prepend(h2)
//to remove
// h2.remove()

h1.style.color = "purple"
h1.style.fontFamily = "Gilroy"  
h2.style.color = "yellow"
let body = document.querySelector("body")
body.style.backgroundColor = "teal"
let buynow = document.querySelectorAll(".buy-now")
console.log(buynow)


let heading = document.querySelector("#heading")
heading.textContent = "Welcome to sheryians"

let lis = document.querySelectorAll("li")
lis.forEach(function(val){
    console.log(val.textContent);

})
for(i=0 ; i<lis.length ; i++){
    console.log(lis[i].textContent)
}

let p = document.querySelector("p")
p.innerHTML = "hello <b>crazzyy</b> you are great"

let li = document.querySelectorAll("ul li:nth-child(2n)")
li.forEach(function(val){
    val.classList.add("highlight")
})