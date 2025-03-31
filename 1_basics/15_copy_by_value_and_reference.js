/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive값은 copy by value 다. Object를 제외한 생성되는 모든 다른 데이터타입은 primitive
 * 2) 객체는 copy by reference다.
 * 
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';

console.log(original);
console.log(clone);




