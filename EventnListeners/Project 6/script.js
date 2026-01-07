// Event bubbling mtlb ki jispe event ayega agr uss object pe listener nhi laga hua toh uske parent pe jayega ur listener dhundega agr wahan bhi nhi hua toh uske bhi parent pe jayega aur listener dhundega and aisa krte krte upr badhega to search for listener.

// style="text-decoration: line-through" ; yeh event listener chahiye hame list items pe . lekin hame 5 event listeners se better uske parent pe laga dete hai ek hi

document.querySelector("ul").addEventListener("click" , function(dets){
    //   console.log(dets.target)
    //pata krna tha ki target kon hai isliye conssole krliya. target woh banda hota hai jispe event hua hota hai. ab aasani se ussi pe function chala denge

    // dets.target.style.textDecoration = "line-through"
         //yahan hamne bar bar each list item pe 5 bar event listener lagane se better ul pe listener laga diya jab li pe click hua wahan koi listener nhi tha tohh woh apne parent element ke pas gya and that worked perfectly. thhis is called event bubbling
 
        // another trick
        // dets.target.classList.add("lt")  //this will also do the same work hamne lt class banai aur add krdi and usme hi behaviour likhhdiya ab jab bhi behaviour change krna hoga toh lt me jaake change krdenge aur yeh uski properties inherit krlega. better

    dets.target.classList.toggle("lt")  // togggle me agr class lagi hogi toh hata dega aur hati hogi toh laga dega 
})



//event bubbling ka ek bada flaw yeh hai ki agr listener hai tb bhi woh apne parent ddiv pe jayega aur listener dhundega and agr parent div pe listener hua tohh usey bhi chala dega and wahan bhi rukega nhi woh uske bhi upr jayega aand wahan bhi listener mila toh usey bhi chala dega thats why we avoid it . saare listeners ko activate krdeta hai.