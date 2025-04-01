/**
 * Class Keyword
 * 
 * 
 */

class IdolModel {
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `안녕하세요. 저는 ${this.name} 입니다.`;
    }

}

// constructor - 생성자
const yuJin = new IdolModel('안유진', 2003);
const gaeul = new IdolModel('가을', 2002);
const ray = new IdolModel('레이', 2004);
const wonYoung = new IdolModel('장원영', 2004);
const liz = new IdolModel('리즈', 2004);
const eseo = new IdolModel('이서', 2007);

// console.log(wonYoung.sayName());

/**
 * class 는 function
 * class로 생성한 객체는 Object
 */
console.log(typeof IdolModel);
console.log(typeof yuJin);

