/**
 * Array Functions
 */

let iveMemebers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]



/**
 * push()
 * array 맨 마지막에 추가
 * array 를 직접 변경
 * 값을 추가한 후에 길이를 반환값(return)으로 준다.
 */
console.log(iveMemebers.push('코드팩토리'));
// iveMemebers.push('코드팩토리');

/**
 * pop()
 * array 맨 마지막 element를 삭제하고 반환(return) 해준다.
 * 
 */

console.log(iveMemebers.pop());


/**
 * shift()
 * array 첫번째 element를 삭제하고 반환(return) 해준다.
 */
console.log(iveMemebers.shift());

/**
 * unshift()
 * array 맨 앞에 값을 추가한다.
 * push랑 같지만 맨 앞에 추가한다.
 * 값을 추가하고 array의 길이를 반환(return)해준다.
 */
console.log(iveMemebers.unshift('안유진'));


/**
 * splice(a, b)
 * a 번쨰부터 b개를 삭제한다.
 * 잘라낸 값을 array 로 만들어서 반환(return) 해준다.
 */
console.log(iveMemebers.splice(0,3));

iveMemebers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]



console.log('--------------------------------------');


/**
 * concat()
 * 값을 추가해서 새로운 array를 return 해준다.
 */
console.log(iveMemebers.concat('코드팩토리'));


/**
 * slice(a, b+1)
 * a번째 부터 b번째 인덱스까지 삭제
 * 잘라낸 값들을 array로 return 해준다.
 */

console.log(iveMemebers.slice(0, 3));



/**
 * spread operator
 * ...
 * 
 */
let iveMemebers2 = [
    ...iveMemebers
]
console.log(iveMemebers2);

let iveMemebers3 = [
    iveMemebers
]

let iveMemebers4 = iveMemebers;



///////////////////////////////////////////////////////////////////////////

/**
 * join()
 * , 를 기준으로 string 으로 합친다.
 * 
 */

console.log(iveMemebers.join());
console.log(iveMemebers.join('/')); //   / 를 넣어서 붙인다.


/**
 * sort()
 * 오름차순으로 정렬
 * 
 * reverse()
 * 내림차순으로 정렬
 * 
 * 
 * array를 직접 변경
 */

iveMemebers.sort();
console.log(iveMemebers.reverse());


let numbers = [
    1,
    9,
    7,
    5,
    3
]


// sort 를 적용하는 법 -> 1 / 2 / 3 을 보고 적용
// a, b 를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0 보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b)=> {
    return a > b ? 1 : -1;
})

numbers.sort((a,b) => a > b ? -1 : 1 );
console.log(numbers);

/**
 * map()
 * 기존 array를 변형하지 않고 새로운 array를 반환
 * array의 값들을 순회하면서 각각의 값들을 변형
 */
console.log(iveMemebers.map((x) => x));
console.log(iveMemebers.map((x) => `아이브 : ${x}`));
console.log(iveMemebers.map((x)=> {
    if(x === '안유진'){
        return `아이브 : ${x}`;
    } else {
        return x;
    }
}));

/**
 * filter()
 * true 는 반환, false는 반환하지 않음.
 */

numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0));

/**
 * find()
 * array 중에서 조건에 해당되는 첫번째 값만 반환
 */

console.log(numbers.find((x) => x % 2 === 0));

/**
 * findIndex()
 * 해당하는 첫번째 값의 index 반환
 */
console.log(numbers.findIndex((x) => x % 2 === 0));


/**
 * reduce()
 * 
 * 1. 초기값인 0이 p에 입력된다.
 * 2. numbers array의 첫번째 값인 1이 n에 입력된다.
 * 3. p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4. 3에서 반환한 값(1)이 p에 입력된다.
 * 5. array의 두번째 값인 8이 n에 입력된다.
 * 6. p + n 즉, 1 + 8 의 결과값인 9 가 반환된다.
 * 7. 6에서 반환한 값(9)가 p에 입력된다.
 * 8. numbers 리스트의 모든 값들을 다 순회할때까지 반복
 *   -> 결국 모든 값을 다 더한 25가 반환된다.
 * 
 */
console.log(numbers.reduce((p, n)=> p + n,0));

/**
 * reduce() 퀴즈
 * reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의 
 * 길이를 더해서 반환하라.
 * 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
 */
console.log(iveMemebers.reduce((p, n) => p +  n.length,0));



console.log(iveMemebers);

