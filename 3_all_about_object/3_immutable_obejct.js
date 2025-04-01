/**
 * Immutable Object
 * 
 */

const yuJin = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    },
}

/**
 * Extensible
 * 
 * 확장이 가능한지 여부
 */

// console.log(Object.isExtensible(yuJin));
yuJin['position'] = '보컬';

Object.preventExtensions(yuJin);
// console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브';
// console.log(yuJin);

delete yuJin['position'];
// console.log(yuJin);


/**
 * Seal 
 * 
 * - configuable 을 false로 만드는 것과 같다.
 */

const yuJin2 = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    },
}

// console.log(yuJin2);
// console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);
// console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브';
// console.log(yuJin2);

delete yuJin2['name'];
// console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    writable : false,
})

// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능 하게 만든다.
 */


const yuJin3 = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    },
}

// console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
// console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
// console.log(yuJin3);
delete yuJin3['name'];
// console.log(yuJin3);

// Object.defineProperty(yuJin3,'name',{
//     value : '코드팩토리'
// })

// console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
    name : '안유진',
    year : 2003,

    wonYoung : {
        name : '장원영',
        year : 2004,
    },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4.wonYoung));

