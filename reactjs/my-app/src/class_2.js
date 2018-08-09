import Person from './class_1'
//inheritance from person 
class Teacher extends Person {
    teach() {
        console.log('this is method teach');
    }
}

export function promote() {
    console.log('this is a fun');
}; 

export default Teacher;