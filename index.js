
/* JavaScript is an interpretted language, unlike compiled languages like C++ or Java; thus you don't need to specify the data type of a variable. Everything is simply a variable */
var x = "Hello World"
var y = "GoodBye"

var myArray = ["Hello", "World", "awesome"]

/* An object is a collection of variables. 
Here you see strings (name), integers (age), booleans (graduated), and arrays (classesTaking) */
var myObject = {
    name: "Ram Goli",
    age: 20,
    graduated: false,
    classesTaking: ["stats", "cs"]
}

/* Define functions with the "function" keyword
   Pass in parameter person */
/* console.log() prints out values to the console
       Find the console when you right-click and inspect an element 
       In the top bar, click on "console"*/
function printDetails(person) {
    console.log("Hello from the function!")
    console.log("Peron's name is: ", person.name)
    console.log("Peron's age is: ", person.age)
}

function printElement(element, idx) {
    if (idx % 2 === 0) {
        console.log(element, idx)
    }
}

/* The forEach function applies a function (here, printElement) to every element of an array (in this case, myArray) */
myArray.forEach(printElement)