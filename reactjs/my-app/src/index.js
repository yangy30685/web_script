/**********************************
 * react demo 
 * @Dr_Yang
 **********************************/
import Person  from "./class_1";
import Teacher, { promote } from "./class_2";


const person = {
    name : 'yang',
    walk() {console.log('this is walk')},
    talk() {console.log('this is talk')},
    demo_this() {
        console.log(this);
    }
};

person.demo_this();

const demo_2 = person.demo_this;
console.log('this is dem_2 ' + demo_2);

// this for window is disable by strict mode
demo_2(); //error

//use bind to link this to person obj
const demo_3 = person.demo_this.bind(person);
demo_3();

//value visit
console.log('1st name ' + person.name);
person.talk();
person.name = '';
console.log('2nd name is '+ person.name);

//alternative way to visit value
const tarMem ='name';
person[tarMem] = 'john';

console.log('3rd name is '+ person.name);
/************************ Seperate Line **************************/

const square_1 = function (number) {
    return number * number ;
}
console.log('1st: ' + square_1(2)); 

const square_2 = number => number * number;
console.log('2nd: ' + square_2(3));

//demo filter
var words = [ 'red','black','blue']

const result = words.filter(temp => temp.length < 4);
console.log(result);


const jobs = [
    {id: 1, isactive: true },
    {id: 2, isactive: true },
    {id: 3, isactive: false }
]

const list_jobs = jobs.filter(function(args){return args.isactive});//only return true value
//other way to do it 
const list_jobs_1= jobs.filter(args => args.isactive);
console.log(list_jobs);
console.log(list_jobs_1);

/************************ Seperate Line **************************/
const car = {
    speed() {
        //call back function refers this to window
        setTimeout(function(){
            console.log('this refers to:\n', this);
        },1000)
    }
}

car.speed();

const car_2 = {
    speed() {
        //call back function refers car_2 obj
        setTimeout(() => {
            console.log('this refers to:\n', this);
        },1000)
    }
}

car_2.speed();
/************************ Seperate Line **************************/

const colors = ['red' ,'blue', 'black'];
const items = colors.map(function (args){
    return '<li>'+args+'</li>';
});
const items_1 = colors.map(args => '<li>'+args+'</li>');
const items_2 = colors.map(args => `<li>${args}</li>`);
console.log(colors);
console.log(items);
console.log(items_1);
console.log(items_2);
/************************ Seperate Line **************************/

const address ={
    street: 'a123',
    city: 'b123',
    country: 'c123'
};

const a = address.street;
const b = address.city;
const c = address.country;

console.log(a + b + c);

//u must not rename
const { street,city,country } = address;

console.log(street + city + country);
//u can rename here
const {street:aa ,city:bb, country:cc} = address;

console.log(aa + bb + cc);
/************************ Seperate Line **************************/

const first = [ 1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
const combined_1 = [...first, 'a', ...second, 'b'];
console.log(combined + '\t' + combined_1);

/************************ Seperate Line **************************/

const person_2 = new Person('yang');

console.log(typeof(person_2));
console.log(person_2.name);

const person_3 = new Teacher('abc');
console.log(person_3);

person_3.walk();
person_3.teach();

class Salesmen extends Teacher {
    constructor (aa, bb) {
     super(aa);// pass aa to bass class  
     this.degree = bb; 
    }
}
const person_4 = new Salesmen('efg','beng');
person_4.teach();
console.log(person_4);

promote();