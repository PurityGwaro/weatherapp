//forecast.js before use of classes

//interaction with the weather API
//query-parameters: API key and city name


//create an app in the AccuWeather APIs website in order to get an API key from the API service
//the key identifies who's making the req and what app is making it to the API service
//the key is sent together with the request


const key = 'O2BbRGdH3iDtU7jx0d92IFi1GKtYOSrB';//API key for AccuWeather
//we can make 50 requests per day(on a free account) per app
//API services for developers give API references to the endpoints where the data can be fetched 

//two requests to make
//first get a city code from locations API
//then use the city code on the current conditions API to get its condition
//city code is sent to the current conditions endpoint to get info on it

//req1. get weather info
const getWeather = async (id) => {//id rep the city's key
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const reponse = await fetch(base + query);
    const data = await reponse.json();

    //console.log(data);
    return data[0];

};


//req2. get city info
const getCity = async (city) => {//returns a promise

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';//url for city search
    const query = `?apikey=${key}&q=${city}`;//adding query parameters to the end of a url
    //combine the base key with the query parameters and fetch the resource

    const reponse = await fetch(base + query);
    const data = await reponse.json();

    //console.log(data);//returns an array with possible matches... the first value is the closest
    //console.log(data[0]);
    return data[0];//returns a promise. Hence when calling it we have to tack on the .then method

};
/*
getCity('kisumu')
    //.then(data => console.log(data))
    .then(data => {
       return getWeather(data.Key); 
    }).then(data => {
        console.log(data);
    })
    .catch(err => console.log(err)); 
      
;

//getWeather('224758');
*/