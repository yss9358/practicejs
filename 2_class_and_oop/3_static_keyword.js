/**
 * Static Keyword
 */

// class IdolModel {
//     name;
//     year;
//     static groupName = '아이브';

//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

//     static returnGroupName(){
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */

class IdoelModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    
    static fromObject(object){
        return new IdoelModel(
            object.name,
            object.year,
        );
    }

    static fromList (list) {
        return new IdoelModel(
            list[0],
            list[1],
        );
    }

}

const yuJin2 = IdoelModel.fromObject({name : '안유진', year : 2003});
console.log(yuJin2);

const wonYoung = IdoelModel.fromList([
    '장원영',
    2003,
]);

console.log(wonYoung);
