const timeElement=document.getElementById('time');
const dateElement=document.getElementById('date');
const currentWeatherItemElement=document.getElementById('current-weather-items');
const timezone =document.getElementById('time-zone');
const countryElement=document.getElementById('country');
const weatherforecastElement=document.getElementById('weather-forecast');
const currenttempElement=document.getElementById('current-temp');


const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

const API_KEY='73be50bc1261c2d99c542403000d3330';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12Hrformat = hour >= 13 ? hour %12:hour ;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    timeElement.innerHTML = hoursIn12Hrformat + ':' + minutes+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateElement.innerHTML = days[day] + ' , ' + date+ '' +months[month] 

},1000);
getweatherData();
function getweatherData (){
    navigator.geolocation.getCurrentPosition((success) =>{

        let{latitude , longitude} = success.coords;
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
        .then(res =>res.json()).then(data =>{
            console.log(data)
            showWeatherData(data);
        });
    });
}
function showWeatherData (data){
    let{humidity, pressure, sunrise, sunset, wind_speed}=data.current;

    currentWeatherItemElement.innerHTML = 
    `<div class="weather-items">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-items">
      <div>Pressure</div>
      <div>${pressure}</div>
    </div>
    <div class="weather-items">
        <div>Windspeed</div>
         <div>${wind_speed}</div>
    </div>`;

    let otherDayForecast = ''
    data.daily.forEach((day,idx) => {
        if(idx == 0){

        }else{ 
            otherDayForecast +=`
        <div class="weather-forecast-item">
            <div class="day">Thur</div>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
            <div class="temp">Night - 25.6&#176; C</div>
            <div class="temp">Day - 40.6&#176; C</div>
         </div>`
            
        }
    });
}