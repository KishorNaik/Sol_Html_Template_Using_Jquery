/// <reference path='jquery-3.4.1.js'/>

let movies = [{
    name: "Lord of Rings",
    detail: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
  },
  {
    name: "Star Wars - IV",
    detail: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
  },
];

function movieTemplate(moviesObj){

    // console.log(moviesObj.name);
    // console.log(moviesObj.detail);


    return `
        <h3 id="movieName">
            ${moviesObj.name}
        </h3>
        <p id="movieDetails">
            ${moviesObj.detail}
        </p>
        `;
}

function onrender(){

    console.log("on Render Called");

    for(let values of movies){
        
        $("#movieList")
            .append(movieTemplate(values));
       
    }

}

onrender();