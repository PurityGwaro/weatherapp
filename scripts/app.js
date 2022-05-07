//for DOM manipulation
const cityForm = document.querySelector('form');
const card =  document.querySelector('.card')
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) =>{

    console.log(data);
    //const cityDetails = data.cityDetails;
    //const weather = data.weather;

    //destructuring properties
    const { cityDetails, weather } = data;

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span><!--shows the temp in no form-->
            <span>&deg;C</span><!--gets us the little circle for the degree sign-->
        </div>
    `;

    //update the night/day & icon images

    const iconSrc = `../img/icons/${weather.WeatherIcon}.svg`;//there are 44 weather icons in total
    icon.setAttribute('src', iconSrc);

    //let timeSrc = null;
    //if(weather.IsDayTime) {
    //    timeSrc = '../img/day.svg';
    //}else{
    //    timeSrc = '../img/night.svg';
    //}

    //use ternary operator for the condition
    let timeSrc = weather.IsDayTime ? '../img/day.svg' : '../img/night.svg' ;

    time.setAttribute('src', timeSrc);

    //remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }


};

const updateCity = async (city) => {
    //make a call to getCity to get city key
    //then call getWeather and use the city key to get the condition
    //console.log(city);

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        //cityDetails: cityDetails,
        //weather: weather
        //use object short hand notation when the key and value both have same names: you delete one of them
        cityDetails,
        weather
    };

};

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get the city the user types in
    const city = cityForm.city.value.trim();
    cityForm.reset();//clears out the form fills after submition
    //console.log(city);

    //update the UI with the new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
    ;

});
