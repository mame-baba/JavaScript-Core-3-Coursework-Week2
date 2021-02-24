// Let's make a randomized dog photo gallery!

// Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

// - Create an `index.html` file that will display your random image
// - Add 2 `<button>` and 1 `<ul>` element, either in the HTML or through JavaScript
// - When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
// - After receiving the data, append to the `<ul>` a `<li>` that contains an `<img>` element with the dog image
// - Incorporate error handling

let firstBtn = document.getElementById("firstBtn");
let secondBtn = document.getElementById("secondBtn");

function getDogPhotos(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
let ul = document.querySelector("ul");
let list = document.createElement("li");
let image = document.createElement("img");

image.classList = "img";
image.src = data.message;
list.appendChild(image);
ul.appendChild(list);
console.log(image);

})
.catch(function(error){
    console.log(error);

});

}
firstBtn.addEventListener("click", getDogPhotos);
secondBtn.addEventListener("click", getDogPhotos);
