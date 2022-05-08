//interaction with the weather API
//query-parameters: API key and city name

//using classes
class Forecast{
    constructor(){
        this.key = 'O2BbRGdH3iDtU7jx0d92IFi1GKtYOSrB';
        this.weatherURI= 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city) {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);

        return { cityDetails, weather };
    }
    async getCity(city){

        const query = `?apikey=${this.key}&q=${city}`;

        //adding query parameters to the end of a url
        //combine the base key(cityURI) with the query parameters and fetch the resource
        const reponse = await fetch(this.cityURI + query);
        const data = await reponse.json();

        return data[0];
    }
    async getWeather(id){ 
        
        const query = `${id}?apikey=${this.key}`;
        const reponse = await fetch(this.weatherURI + query);
        const data = await reponse.json();

        //console.log(data);
        return data[0];
    }
}

/*
const key = 'O2BbRGdH3iDtU7jx0d92IFi1GKtYOSrB';//API key for AccuWeather

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

  return data[0];//returns a promise. Hence when calling it we have to tack on the .then method

};
*/