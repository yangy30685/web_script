//this is a base class
class Person {
    constructor (args) {
        this.name= args;
        this.age =12;
    }
    walk() {
        console.log('this is method walk');
    }
}

export default Person;