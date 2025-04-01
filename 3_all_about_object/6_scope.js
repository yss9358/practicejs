/**
 * Scope
 */

var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}

// levelOne();

function levelOne() {
    var numberOne = 40;
    console.log(numberOne);
    
}


// console.log(numberOne);

function levelOne () {
    var numberOne = 40;
    function levelTwo (){
        var numberTwo = 99;
        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberlOne : ${numberOne}`);
    }
    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}
// levelOne();
// console.log(numberOne);
// console.log(numberTwo);


/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope 
 * 
 * 실행한 위치가 상위 스코프를 정한다.
 */

var numberThree = 3;
function functionOne () {
    var numberThree = 100;
    functionTwo();
}

function functionTwo (){
    console.log(numberThree);
}

// functionOne(); 

/**
 * var 키워드 : 함수레벨 스코프만 만들어낸다다
 * - var키워드를 썼을때 스코프가 새로생기는 경우는 함수를 선언했을떄
 * - for , if , while loop 은 var키워드를 쓰면 새로운 scope를 만들지 않음.
 * 
 * let, const 키워드 : 함수레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 * - let, const 키워드는 함수에서 뿐만 아니라 for, if while loop 에서 block level scope를 만든다.
 * 
 */

var i = 999;
for(var i=0; i<10; i++){
    console.log(i);
}

console.log(`i in global scope : ${i} `);


i = 999;
// block level scope
for(let i=0; i<10; i++){
    console.log(i);
    
}
console.log(`i in global scope: ${i}`);
