const prompt =require("prompt-sync")({sigint:true})

let name = prompt("What is your name ?");
let age = prompt("What is your age ?");

if (age >= 18) {
  console.log("Welcome " + name + ", you are an adult.");
} else {
  console.log("Sorry " + name + ", you are not yet an adult.");
}
