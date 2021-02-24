// Who knew programmers could be funny?

// Write an function that makes an API call to `https://xkcd.now.sh/?comic=latest`

// 1. Create a `HTML`, `CSS` and `JavaScript` file to write your code in

// - Inside the same file write a program that gets the `json` using Fetch.
// - A function should make an API call to the given endpoint: `https://xkcd.now.sh/?comic=latest`
// - Log the received data to the console
// - Render the `img` property into an `<img>` tag in the DOM
// - Incorporate error handling

let funnyPictures = document.getElementById("funny-Photos");

let mainContainer = document.getElementById("main-container");

 function getFunnyPicture(){
     fetch("https://xkcd.now.sh/?comic=latest")
     .then(function(res){
         return res.json
     })
     .then((data) =>{
        console.log(data);
         funnyPictures.src = data.image;
     })
     .catch(function(error){
         console.log(error)
     });
    }
    getFunnyPicture();