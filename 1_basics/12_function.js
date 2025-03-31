/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서 
 * 반환받고 싶다면 어떻게 해야할까?
 */

// console.log((2* 10 /2 % 3).toString());

/**
 * DRY
 * D -> DON't
 * R -> Repeat
 * Y -> Yourself
 */

function calculate(){
    console.log(( 2 * 10 / 2 % 3 ).toString());
    
}

function calculate(number){
    console.log((number * 10 / 2 % 3 ).toString());
    
}

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter 라고 한다.
 * 
 * 실제 입력하는 값은 argument 라고 한다.
 */
calculate(4);

function multiply (x,y){
    console.log(x * y);
    
}

multiply(5,3);

function multiply (x, y = 10){
    console.log(x * y);
    
}
multiply(2,4);
multiply(2);

/**
 * 반환받기
 * return 받기
 */
console.log('-------------');

function multiply(x,y){
    return x * y;
}

const result1 = multiply(2,4);
console.log(result1);

const result2 = multiply(5,3);
console.log(result2);

/**
 * Arrow 함수
 * 
 */

// default 형태
const multiply2 = (x,y) => {
    return x * y;
}

console.log(multiply2(5,6));

// 코드가 한줄이면 {} 없이 바로 리턴값 작성가능
const multiply3 = (x, y) => x * y;
console.log(multiply3(5,7));

// parameter 가 한개면 () 를 생략가능
const multiply4 = x => x * 2 ;

// 함수를 반환하는 Arrow 함수
const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

// multiply5 와 multiply6은 같다.
function multiply6(x){
    return function(y){
        return function(z) {
            return `x: ${x} y: ${y} z: ${z}`
        }
    }
}

console.log(multiply6(3)(4)(5));
;

const multiplyTwo = function (x, y) {
    return x * y
}
console.log('----------------');

const multiplyThree = function(x,y,z) {
    console.log(arguments);
    
    return x * y * z;
}

console.log(multiplyThree(4,5,6));

const multiplyAll = function(...arguments){
    console.log(arguments);
    return Object.values(arguments).reduce((a,b) => a * b, 1);
}

console.log(multiplyAll(3,4,5,6,7,8,9,10));

// immediately invoked function
(function (x, y){
    console.log(x * y);
    
})(4,5);


console.log(typeof multiply);
console.log(multiply instanceof Object);









