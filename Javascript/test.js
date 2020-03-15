// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';



var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};


let {firstName,lastName,age,eyeColor  } = person

console.log(firstName,lastName,age,eyeColor)

var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a,
  b,
  c
};

console.log(okObj)


var message = `Hello  ${firstName}  have I met you before? I think we met in  ${lastName}  last summer no???`
console.log(message)

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

console.log(whereAmI(true,true))

const addTo = x => y => x + y
const addToTen = addTo(10)
console.log(addToTen(5)) 

let compose = (f,g)=>(a)=>f(g(a))
let mul = (num)=> num * 10
let sum = (num)=> num + 5
console.log(compose(mul,sum)(50))


const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
   let testFor = []
  const arr1 = array.forEach((user)=>{
      user.username = user.username + "!" 
    testFor.push(user)
  })

  console.log("FOR EACH ",arr1)

  const arr2 = array.map((user)=>{
    user.username = user.username + "$" 
    return user
})


console.log("MAP",arr2)


const arr3 = array.filter((user)=>  user.team=="red")

console.log("FILTER ",arr3)

// CLASS ANIMAL

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const cow = new Mamal('Shelly', 'cow', 'brown');
cow.sound()