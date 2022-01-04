console.log("My first TypeScript Code");

// variable declaration , define and initialization
var num = 1;
let firstName = "sudip";

const pi = 3.14;
const total_marks = 1345;

console.log(num);
console.log(firstName);
console.log(pi);
console.log(total_marks);

// tsc <typescript_file_name.ts>
//node <javascript_file_name.js>



// types in typescript
// number , string, boolean, object, any

// number type
// private int a = 1;
let a:number = 1;

//String type
//privatre String str = "sudip";
let str : string = "sudip";

//boolean type
let active : boolean = true;

//Array type
let names : string[] = ['John' , 'Jane', 'Peter', 'David'];
let numbers : number[] = [1,3,5,5];


//object type -decalre
let person: {
    name : string ;
    age: number
};
//object initialization
person = { 
    name :'Jone',
    age : 23

}

//tuple type - declaration, define and

let employee: [ number, string] =[ 1, 'Steve'];
console.log(typeof(employee));

//Any type

let ay: any = 'Hello World';
ay =23;
console.log(typeof(a));
ay = true;
console.log(typeof(ay));
