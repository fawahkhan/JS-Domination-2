localStorage.setItem("friends" , JSON.stringify(['Fawah', 'Khan', 'John']));
let friends = JSON.parse( localStorage.getItem("friends") );
console.log(friends);