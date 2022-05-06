//interaction with the weather API

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

const getCity = async () => {//returns a promise

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';//url for city search

};