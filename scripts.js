console.log('test');

// function clickMe(){
//     return "I've been clicked!";
// }

// console.log(clickMe());

function* clickMeMore(){
    yield "I've been clicked";
    yield "I've been clicked, again!";
    yield "AND AGAIN"
}

const clickClack = clickMeMore();

console.log(clickClack.next());
console.log(clickClack.next());
console.log(clickClack.next());