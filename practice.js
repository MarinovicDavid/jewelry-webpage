/*
var david = ["David", "is", "King"]

for (var i = 0; i < david.length; i++) {
  console.log(david[i])
}

var decimal = Math.round(Math.random() * 10)

console.log(decimal)


var david = "Legenda"
var snaga = "Najjači"
var govno = "racija"
var istina = "Kad si gladan nisi svoj"
console.log(govno.charAt(2).toUpperCase() + govno.charAt(1) + govno.charAt(0) + " najjač".concat(snaga.charAt(6)))

for (var i = 0; i < david.length; i++) {
  console.log(david.charAt(i))
}

console.log(istina.split(" "))

zovime()

function zovime() { console.log("abc") }

var array = ["David", "je", "car"]


var myArray = ["Nije", "bas", "jak"]
myArray[0] = "David"
myArray[1] = "je"
myArray.unshift("Kralj")
myArray[3] = "jaki"
myArray.push("car")
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
} 

let myArray = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"];

myArray.pop()
myArray.push("Dave")
myArray.push("John")
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i], `${i}`)
} 
var hey = "hello"
try {
  hey.push("dada")
} catch (err) {
  console.log("nope")
  console.log("There was an error")
  console.log("It is fine")
}


function addTwoNums(a, b) {
  try {

    if (typeof (a) != "number") {
      throw new ReferenceError("the first argument is not a number")
    } else if (typeof (b) != "number") {
      throw new ReferenceError("the second argument is not a number")
    } else {
      console.log(a + b)
    }
  } catch (err) {
    console.log("Error!")
  }

}
addTwoNums(5, "44")
console.log("It still works")


function letterFinder(word, match) {
  var condition1 = typeof (word) == 'string' && word.length >= 2
  var condition2 = typeof (match) == 'string' && match.length == 1
  if (condition1 == true && condition2 == true) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        console.log('Found the', match, 'at', i)
      } else {
        console.log('---No match found at', i)
      }
    }
  } else {
    console.log("Please pass correct arguments to the function.")
  }
}

letterFinder("david", "v")

function multi(num) {
  return num * 5
}

function object(value) {
  return {
    Power: multi(value)
  }
}

var x = 200
x = 150
const david = {
  strength: object(x),
  focus: "Maximum",
  ability: "100%",
  speed: 1000
}

console.log(david.strength)

x = 500
david.strength = object(x)
console.log(david.strength)

var x = 100

class Power {
  constructor(snaga, brzina, intel) {
    this.snaga = snaga
    this.brzina = brzina
    this.intel = intel
  }

  dave = {
    snaga: x,
    brzina: 100,
    intel: 100,
    ability: function () {
      var sum = this.snaga + this.brzina + this.intel
      return ("Overall skill: " + sum)
    }
  }

  perform() {
    console.log("Done!")
  }

}
const done = new Power(100, 100, 100)
console.log(done.dave.ability())

class Big extends Power {
  dave = {
    snaga: x,
    brzina: 500,
    intel: 500,
    ability: function () {
      var sum = this.snaga + this.brzina + this.intel
      return ("Overall skill: " + sum)
    }
  }
  perform() {
    super.perform()
    console.log("The Hero")
  }
}
x = 500

const gone = new Big(200, 200, 200)
console.log(gone.dave.ability())
console.log(gone.perform())

console.log(new Date())


class God {
  constructor(status, power, level, wisdom) {
    this.status = status
    this.power = power
    this.level = function () {
      this.power = this.power * 2
      return level * 1000
    }
    this.wisdom = wisdom
  }

  theLook() {
    this.status = this.status ** 2
    console.log(this.status * 2)
  }

  theGift() {
    this.wisdom = !this.wisdom
    console.log(this.power ** 3)
    console.log(this.wisdom)
  }

  theMaster() {
    console.log(this.level())
  }
}

class King extends God {
  theLook(papi) {
    super.theLook()
    super.theGift()
    super.theMaster()
    console.log(papi)
  }
}

const a = new God(100, 100, 50, false)
const b = new King(100, 100, 50, false)

console.log(a.theGift())
console.log(a.theMaster())
console.log(b.theLook("Ramazan"))

function param(n) {
  return Math.pow(n, 2)
}

console.log(param())


class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color
    this.energy = energy
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20
      console.log("Energy decreasing, currently at ", this.energy)
    } else if (this.energy == 0) {
      console.log("No energy")
      this.sleep()
    }
  }
  sleep() {
    this.energy += 20
    console.log("Energy increasing, currently at ", this.energy)
  }
  getColor() {
    console.log(this.color)
  }
}

class Cat extends Animal {
  constructor(sound = "meow", canJumpHigh = true, canClimbTrees = true, color, energy) {
    super(color, energy)
    this.sound = sound
    this.canJumpHigh = canJumpHigh
    this.canClimbTrees = canClimbTrees
  }
  makeSound() {
    console.log(this.sound)
  }
}

class Bird extends Animal {
  constructor(sound = "chirp", canFly = true, color, energy) {
    super(color, energy)
    this.sound = sound
    this.canFly = canFly
  }
  makeSound() {
    console.log(this.sound)
  }
}

class HouseCat extends Cat {
  constructor(houseCatSound = "purr", sound, canClimbTrees, canJumpHigh, color, energy) {
    super(sound, canClimbTrees, canJumpHigh, color, energy)
    this.houseCatSound = houseCatSound
  }
  makeSound(option) {
    if (option) {
      super.makeSound()
    }
    console.log(this.houseCatSound)
  }
}

class Tiger extends Cat {
  constructor(tigerSound = "roar", sound, canClimbTrees, canJumpHigh, color, energy) {
    super(sound, canClimbTrees, canJumpHigh, color, energy)
    this.tigerSound = tigerSound
  }
  makeSound(option) {
    if (option) {
      super.makeSound()
    }
    console.log(this.tigerSound)
  }
}

class Parrot extends Bird {
  constructor(canTalk = true, sound, canFly, color, energy) {
    super(sound, canFly, color, energy)
    this.canTalk = canTalk
  }
  makeSound(option) {
    if (option) {
      super.makeSound()
    }
    if (this.canTalk) {
      console.log("I can talk!")
    }
  }
}

var ani = new Animal("red", 200)
var cat = new Cat("moow")
var bird = new Bird("teef", false)
var hcat = new HouseCat()
var tcat = new Tiger()
var parry = new Parrot(true, "hey", true, "black", 1000)
tcat.makeSound(true)



var david = {
  snaga: 100,
  vrlina: "Leader",
  brzina: "Max",
  lopta: 1000,
}

var a = []
var b = []

for (i of Object.keys(david)) {
  a.push(i)
}

for (i of Object.values(david)) {
  b.push(i)
}

console.log(b)

var dav = Object.create(david)
dav.bigness = "YEAH"
dav.cigness = "OHHH"

for (i in dav) {
  console.log(i)
}

for (i of Object.values(david)) {
  console.log(i)
}

var prince = "David"
var path = "will become king"
var king =
  `This is a song,
Dedicated to ${prince}
Who ${path}.`



var style = "line-height: 4rem; color: gold; font-size: 2.5rem; background-color: #818181; border: 2px solid brown; display: flex; gap: 1rem; align-items: center"
console.log(`%c"${


// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
  for (var item of dairy) {
    console.log(item)
  }
}
logDairy()

// Task 2
const animal = {
  canJump: true
};
const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (item of Object.entries(bird)) {
    console.log(item)
  }
}
birdCan()

// Task 3
function animalCan() {
  for (item in bird) {
    console.log(`${item} : ${bird[item]}`)
  }
}
animalCan()



const david = ["King", "Lover", "Magician", "Warrior"]

david.filter(function (item) {
  if (item.length > 5) {
    console.log(item)
  } else {
    console.log("Nope.")
  }
})

david.map(function (items) {
  console.log(`${items}ker`)
})

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers.get(2));

var cash = ["Bling", "$500", "$500", "$500", "Bling", 9999, "Bling", "$500", 9999]
const convert = new Set(cash)
var cash2 = new Array(convert)
*/

