console.log("My first TypeScript Code");
// variable declaration , define and initialization
var num = 1;
var firstName = "sudip";
var pi = 3.14;
var total_marks = 1345;
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
var a = 1;
//String type
//privatre String str = "sudip";
var str = "sudip";
//boolean type
var active = true;
//Array type
var names = ['John', 'Jane', 'Peter', 'David'];
var numbers = [1, 3, 5, 5];
//object type -decalre
var person;
//object initialization
person = {
    name: 'Jone',
    age: 23
};
//tuple type - declaration, define and
var employee = [1, 'Steve'];
console.log(typeof (employee));
//Any type
var ay = 'Hello World';
ay = 23;
console.log(typeof (a));
ay = true;
console.log(typeof (ay));
