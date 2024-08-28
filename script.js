const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const currentWeatherItemElement = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryElement = document.getElementById('country');
const weatherforecastElement = document.getElementById('weather-forecast');
const currenttempElement = document.getElementById('current-temp');
let  currentWeather = document.getElementById("currentWeather");


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const API_KEY = '73be50bc1261c2d99c542403000d3330';
const API_URL='https://api.openweathermap.org/data/2.5/weather?q='

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12Hrformat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    timeElement.innerHTML = hoursIn12Hrformat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`

    dateElement.innerHTML = days[day] + ' , ' + date + '' + months[month]

}, 1000);

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")

async function CheekWeather(city="delhi") {
    const response=await fetch(API_URL+ city + `&appid=${API_KEY}`);
    var data = await response.json();

    console.log(data);
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%"
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%"
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%"
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%"
    
}

searchBtn.addEventListener('click',()=>{
    CheekWeather(searchBox.value)
})
// CheekWeather()

function showWeatherData(data) {
    let { humidity, pressure, sunrise, sunset, wind_speed } = data.current;


    let otherDayForecast = ''
    data.daily.forEach((day, idx) => {
        if (idx == 0) {

        } else {
            otherDayForecast += `
        <div class="weather-forecast-item">
            <div class="day">Thur</div>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
            <div class="temp">Night - 25.6&#176; C</div>
            <div class="temp">Day - 40.6&#176; C</div>
         </div>`

        }
    });
}