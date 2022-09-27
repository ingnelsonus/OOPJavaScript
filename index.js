
/*
console.log({});

let name ="Nelson";
let lastName ="Usuga";
let age = 32;


const user={
    name:"Neson",
    lastname:"Usuga",
    age:32,
    hobbies:['lee','programar','correr'],
    address:{
        street:"some street",
        city:"london"
    }
};

console.log(user); 
*/

class Person{
    constructor(name,lastname){
        this.name=name;
        this.lastname=lastname;
    }
}


const john = new Person('John','Ray');
const maria = new Person('Maria','Perez');

//relacion.
maria.parent = john;