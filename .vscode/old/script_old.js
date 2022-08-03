console.log("this is working");

const car = {
  brand: "Tesla",
  notAwesome: true,
  overRated: true,
  savesGas: true,
  favorites: ["tech", "battery", "interior"],
};

// grab my p1 id
/// change the text inside via JS
const p1 = document.getElementById("p1");

// window.document.getElementById("p1").innerHTML ="Hey class!"

// document.getElementById("p1").innerHTML = "<h2> secod heading'</h2>"

p1.innerText = "Hey class!";
p1.innerHTML = "<h2> second heading </h2>";

p1.style.color = "blue";

const myFunction = () => {
  alert("test");
};

const changeColor = () => {
  p1.style.color = "red";
};

const getSomeData = () => {
  fetch("route")
    .then((Response) => Response.json())
    .then((cleanData) => console.log(cleanData));
};
