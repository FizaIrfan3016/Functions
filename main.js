// 1) Function declaration.
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
greet("Amir");
// 2) Function expressions.
var wellcome = function (personName) {
    console.log("Hello, ".concat(personName, "!"));
};
wellcome("Hunain");
// 3) Arrow functions.
var come = function (nameOf) {
    console.log("Hello, ".concat(nameOf));
};
come('Misbah');
// 4) Optional and default parameters.
function nameGreetings(ofName, greetings) {
    if (greetings === void 0) { greetings = "Hello"; }
    console.log("".concat(ofName, ", ").concat(greetings));
}
nameGreetings("Hunanin", "Assalam walaikum"); // Both name and greetings
nameGreetings('Minal', 'assalam walaikum'); // Both name and greetings
nameGreetings('Muneeb'); // Name with default greetigs
// 5) Rest parameters.
function halffryegg(egg) {
    var ingredients = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ingredients[_i - 1] = arguments[_i];
    }
    console.log(egg);
    console.log(ingredients);
}
halffryegg(1, 1.5, 2, 5); // 1 for egg and another 3 numbers under the  ingredients array [1.5,2,5]
// 6) Spread operator.
function halffryegg2(egg) {
    var ingredients = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ingredients[_i - 1] = arguments[_i];
    }
    console.log(egg);
    console.log.apply(console, ingredients);
}
halffryegg2(1, 1.5, 2, 5);
// 7) Arrow function practice 2.
var halffryegg3 = function () { return 1 + 1.5 + 2; };
//egg+buttersalt
var response = halffryegg3();
console.log(response);
// Function practice .
function tableS(num1) {
    if (num1 === void 0) { num1 = 5; }
    console.log(num1 + " X 1 = " + num1 * 1);
    console.log(num1 + " X 2 = " + num1 * 2);
    console.log(num1 + " X 3 = " + num1 * 3);
    console.log(num1 + " X 4 = " + num1 * 4);
    console.log(num1 + " X 5 = " + num1 * 5);
    console.log(num1 + " X 6 = " + num1 * 6);
    console.log(num1 + " X 7 = " + num1 * 7);
    console.log(num1 + " X 8 = " + num1 * 8);
    console.log(num1 + " X 9 = " + num1 * 9);
    console.log(num1 + " X 10 = " + num1 * 10);
}
tableS(2);
console.log("");
tableS(3);
console.log('');
tableS(4);
console.log("");
tableS();
