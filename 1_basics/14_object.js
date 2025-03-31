/**
 * Object / 객체
 * 
 * 
 */

// key : value 페어
let yuJin = {
    name : '안유진',
    group : '아이브',
    dance : function(){
        return `${this.name}이 춤을 춥니다.`;    
    }
}

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance : function(){
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung = {
    name : '장원영',
    group : '아이브'
}
console.log(wonYoung);
// wonYoung = {};  // 1의 경우

wonYoung['group'] = 'codefactory'; // 2의 경우
console.log(wonYoung);

/**
 * 모든 key값 다 가져오기
 * Object.keys()
 * 
 * 객체의 key값을 array로 반환
 */

console.log(Object.keys(wonYoung));



/**
 * 모든 value 값 다 가져오기
 * Object.values()
 * 
 * 객체의 value값을 리스트로 반환
 */
console.log(Object.values(wonYoung));

const name = '안유진';

const yuJin3 = {
    // name : name, // 아래와 같다.
    name,
};

console.log(yuJin3);

