//Stringifying & Parsing data

const todos = [
    {text: 'play guitar', author: 'shaun'},
    {text: 'go shopping', author: 'mario'},
    {text: 'learn javascript', author: 'luigi'}
];

//to store it in local storage;
//1. turn the object into a json string
//console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));//will convert the JSON string into an array of objects