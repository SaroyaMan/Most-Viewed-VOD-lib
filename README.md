# WS of most watched movies/tv-shows from V.O.D library

### This project is a web service with a module that handles most watched movies from V.O.D library.
- [Github](https://github.com/SaroyaMan/WS-Most-Watched-VOD-lib)  
- [API](https://saroyaman.github.io/WS-Most-Watched-VOD-lib)  
- [WS hosted by Heroku](https://ws-most-watched-movies.herokuapp.com/)  

### Description
This is a web-service that manages most watched movies as a part of V.O.D library

### API
* #### Get all most watched movies/tv-shows from the V.O.D library
  **Relative Path:** /getAllMostWatched  
  **Verb:** GET  
  **API call:** <a href="ws-most-watched-movies.herokuapp.com/getAllMostWatched" target=_blank>ws-most-watched-movies.herokuapp.com/getAllMostWatched</a>  
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
  ```
* #### Get most watched movie/tv-show by id from the V.O.D library
  **Relative Path:** /getMostWatchedById  
  **Verb:** POST  
  **API call:** ws-most-watched-movies.herokuapp.com/getMostWatchedById    
  **Parameters:** id - identifier for a specific most viewed video  
  **Example:** <a href="https://ws-most-watched-movies.herokuapp.com/getMostWatchedById" target=_blank>https://ws-most-watched-movies.herokuapp.com/getMostWatchedById</a> {Body: id = 2}  
  **API respond:**  
  ```json  
  {
	"id": 2,
	"name": "Batman",
	"views": 120,
	"description": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker."
  }
  ```
* #### Get most watched movies/tv-shows with number of views defined by limits
  **Relative Path:** /getMostWatchedByLimit  
  **Verb:** GET  
  **API call:** ws-most-watched-movies.herokuapp.com/getMostWatchedByLimit/?min={min}&max={max}  
  **Parameters:**  
    &nbsp; &nbsp; &nbsp; min - the minimum number of views (include)  
    &nbsp; &nbsp; &nbsp; max - the maximum number of views (include)  
  **Example:** <a href="https://ws-most-watched-movies.herokuapp.com/getMostWatchedByLimit/?min=26&max=100" target=_blank>https://ws-most-watched-movies.herokuapp.com/getMostWatchedByLimit/?min=26&max=100</a>   
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
  ```
* #### Get most watched movies/tv-shows by their language
  **Relative Path:** /getMostWatchedByLanguage  
  **Verb:** GET  
  **API call:** ws-most-watched-movies.herokuapp.com/getMostWatchedByLanguage/?lang={lang}  
  **Parameters:** lang - the langauge the movie/tv-show is filtered by  
  **Example:** <a href="https://ws-most-watched-movies.herokuapp.com/getMostWatchedByLanguage/?lang=English" target=_blank>https://ws-most-watched-movies.herokuapp.com/getMostWatchedByLanguage/?lang=English</a>   
  **API respond:**  
  ```json  
  [{
	"id": 1,
	"name": "Superman",
	"views": 180,
	"localization": {
		"language": "English",
		"subtitles": true
	},
	"description": "An alien orphan is sent from his dying planet to Earth,where he grows up to become his adoptive home's first and greatest superhero."
  }, {
	"id": 2,
	"name": "Batman",
	"views": 120,
	"localization": {
		"language": "English",
		"subtitles": true
	},
	"description": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker."
  }]
  ```  
  ### Error handling:
	In case you send wrong params (i.e id that contains characters), you will get a json error which describes your error.
	```json
	{
	 "error": "Video(s) is not found",
	 "description": "description of the error..."
	}
	```
### Authors and Contributors
For any questions and notes - you can always contact with Yoav Saroya (@SaroyaMan) - stankovic100@gmail.com
* **category:** WS util library.
* **last update:** 05/05/2017.
* **author:** Yoav Saroya - 304835887.  
