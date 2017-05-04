# WS of most viewed V.O.D library

### This project is a web service with a module that handles most viewed movies from V.O.D library.
[Github](https://github.com/SaroyaMan/Most-Viewed-VOD-lib)  
[API](https://saroyaman.github.io/Most-Viewed-VOD-lib/)  
[Heroku](https://ws-favorite-movies.herokuapp.com/)  

### Description
This is a web-service that manages most viewed movies as a part of V.O.D library

### API
* #### Get all favorite movies/tv-shows from the V.O.D library
  **Relative Path:** /getAllMostViewed  
  **Verb:** GET  
  **API call:** ws-favorite-movies.herokuapp.com/getAllMostViewed  
  **API respond:**  
  ```json  
  [{
	"id": 1,
	"name": "Superman",
	"views": 180,
	"description": "An alien orphan is sent from his dying planet to Earth,where he grows up to become his adoptive home's first and greatest superhero."
  }, {
	"id": 2,
	"name": "Batman",
	"views": 120,
	"description": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker."
  }, {
	"id": 3,
	"name": "Deadpool",
	"views": 72,
	"description": "A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge."
  }, {
	"id": 4,
	"name": "Jurassic World",
	"views": 53,
	"description": "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, which escapes containment and goes on a killing spree."
  }, {
	"id": 5,
	"name": "The Punisher",
	"views": 26,
	"description": "An undercover FBI agent becomes a vigilante assassin and sets out to unleash his wrath upon the corrupt businessman who slaughtered his entire family at a reunion."
  }]
* #### Get favorite movie/tv-show by id from the V.O.D library
  **Relative Path:** /getMostViewed  
  **Verb:** POST  
  **API call:** ws-favorite-movies.herokuapp.com/getMostViewed/?id={id}  
  **Parameters:** id - identifier for a specific most viewed video  
  **Example:** https://ws-favorite-movies.herokuapp.com/getMostViewed/?id=2  
  **API respond:**  
  ```json  
  {
	"id": 2,
	"name": "Batman",
	"views": 120,
	"description": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker."
  }
* #### Get a favorite movie by id
  **Relative Path:** /getMostViewedByLimit  
  **Verb:** GET  
  **API call:** ws-favorite-movies.herokuapp.com/getMostViewedByLimit/?min={min}&max={max}  
  **Parameters:**  
    &nbsp; &nbsp; &nbsp; min - the minimum number of views (include)  
    &nbsp; &nbsp; &nbsp; max - the maximum number of views (include)  
  **Example:** https://ws-favorite-movies.herokuapp.com/getMostViewedByLimit/?min=26&max=100  
  **API respond:**  
  ```json  
  [{
	"id": 3,
	"name": "Deadpool",
	"views": 72,
	"description": "A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge."
  }, {
	"id": 4,
	"name": "Jurassic World",
	"views": 53,
	"description": "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, which escapes containment and goes on a killing spree."
  }, {
	"id": 5,
	"name": "The Punisher",
	"views": 26,
	"description": "An undercover FBI agent becomes a vigilante assassin and sets out to unleash his wrath upon the corrupt businessman who slaughtered his entire family at a reunion."
  }]
### Authors and Contributors
For any questions and notes - you can always contact with Yoav Saroya (@SaroyaMan) - stankovic100@gmail.com
* **category:** WS util library.
* **last update:** 05/05/2017.
* **author:** Yoav Saroya - 304835887.