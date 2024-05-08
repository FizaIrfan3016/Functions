// 1) Function declaration.
function greet(name:string) :void {
    console.log(`Hello, ${name}!`)
}
greet("Amir")

// 2) Function expressions.
const wellcome = function(personName:string): void{
    console.log(`Hello, ${personName}!`)
}
wellcome("Hunain")

// 3) Arrow functions.

const come =  (nameOf:string): void => {
    console.log(`Hello, ${nameOf}`)
}
come('Misbah')

// 4) Optional and default parameters.

function nameGreetings (ofName:string, greetings:string = "Hello"): void {
    console.log(`${ofName}, ${greetings}`)
}
nameGreetings("Hunanin", "Assalam walaikum") // Both name and greetings
nameGreetings('Minal', 'assalam walaikum') // Both name and greetings
nameGreetings('Muneeb') // Name with default greetigs

// 5) Rest parameters.
function halffryegg(egg:number, ...ingredients:number[]) {
    console.log(egg)
    console.log(ingredients)
}
halffryegg(1,1.5,2,5) // 1 for egg and another 3 numbers under the  ingredients array [1.5,2,5]

// 6) Spread operator.

function halffryegg2(egg:number, ...ingredients:number[]) {
    console.log(egg)
    console.log(...ingredients)
}
halffryegg2(1,1.5,2,5)

// 7) Arrow function practice 2.

let halffryegg3 = () => {return 1+ 1.5 +2};
                               //egg+buttersalt
let response :number = halffryegg3()
console.log(response)

// Function practice make a table .

function tableS(num1:number = 5) {
    // Using concatinate make a table
    console.log(num1+` X 1 = ` + num1*1)
    console.log(num1+` X 2 = ` + num1*2)
    console.log(num1+` X 3 = ` + num1*3)
    console.log(num1+` X 4 = ` + num1*4)
    console.log(num1+` X 5 = ` + num1*5)
    console.log(num1+` X 6 = ` + num1*6)
    console.log(num1+` X 7 = ` + num1*7)
    console.log(num1+` X 8 = ` + num1*8)
    console.log(num1+` X 9 = ` + num1*9)
    console.log(num1+` X 10 = ` + num1*10)
    


}
tableS(2) // Output table of 2
console.log("") // spacing between the tables
tableS(3)
console.log('')
tableS(4)
console.log("")
tableS() // Default call so output is table of 5 that is mention in argument .




