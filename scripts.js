console.log('test');

// function clickMe(){
//     return "I've been clicked!";
// }

// console.log(clickMe());
function logging(){
    console.log('hi');
}

function* clickMeMore(num1, num2){
    yield "I've been clicked";
    yield "I've been clicked, again!";
    yield "AND AGAIN"
    yield logging();
    yield num1 > num2 ?'yes' : 'no'
    yield 12;
    yield numberArray = [1,2,3,4,5];
    yield numberArray[2];
    yield dataObject = {
        state: 'state'
    }
    yield dataObject.state;    
}
const clickClack = clickMeMore(5, 2);
// const clickClack = clickMeMore();

// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());

// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());
// console.log(clickClack.next());

function* lightSwitch(){
   let container = 'on'
   let container2 = 'off'
    while(true){
        yield container;
        yield container2;
    }
}

const humanSwitch = lightSwitch();
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next()); console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next()); console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());
console.log(humanSwitch.next());

function* countDown(){
    let a = 10;
    while(a > 0){
        yield `Lunching in ${a}`;
        a -= 1;
    }
    yield 'Take off!!!!!!!!!!!!!!!!!!!!!!';
}

const takeOff = countDown();


console.log(takeOff.next());
console.log(takeOff.next()); console.log(takeOff.next()); console.log(takeOff.next()); console.log(takeOff.next()); console.log(takeOff.next()); console.log(takeOff.next()); console.log(takeOff.next()); console.log(takeOff.next()); console.log(takeOff.next()); console.log(takeOff.next()); console.log(takeOff.next());