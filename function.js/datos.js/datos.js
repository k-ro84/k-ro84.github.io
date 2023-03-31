document.getElementById("demo1").addEventListener("click");

const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
document.getElementById("demo1").innerHTML = myJSON;