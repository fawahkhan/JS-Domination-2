important : Jab bhi ham koi event raise krte haitoh uska jo event flow hota hai woh 2 phhases me chalta hai :
phase1 : event top level element se neeche ki taraf aata hai
phase 2 : event raised element se parent element ki taraf jaata hai


phase 1 is called event capturing , yeh rarely use hota hai and by default off hota hai . majority of the cases me event bubbling use hota hai . event capturing ko n krne ke liye iss format me true keyword use kro function ke bad :

.addEventListener("eventName" , function(){
    //code
},true) 

phase 2 is event bubbling in which child element se leke parent element tk jahan jahan event listeners milenge sab activate hote jayyenge. 
