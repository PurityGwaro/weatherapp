/*
there is a local storage API provided by the browser that allows a user to store data and be able to stil get it upon refreshing the page
the API is found in the window object,.. it has these builtin functions:
    clear, getItem, key, length, removeItem , setItem and others...
 */

//store data in local storage
//everything stored in local storage must be a string
//everything is parsed into a string even numbers

//the setItem() is used to store a new item in local storage
localStorage.setItem('name', 'purity');//takes agrs; 1. name of key, 2. value of key
localStorage.setItem('age', 23);//23 will be stored as a string


//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name , age);


//updating data
//option1
localStorage.setItem('name', 'gwaro');//will overwrite the original value
name = localStorage.getItem('name');
console.log(name);//updates the value of name
//option2; use the keys and dot notation
localStorage.age = '40';
age = localStorage.getItem('age');
console.log(age);

//delete data form local storage
//remove single item

//localStorage.removeItem('name');//removes the name item

//remove all items
localStorage.clear();//clears out the local storage

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);//gives null null,..all data has been cleared from the local storage


