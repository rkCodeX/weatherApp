const apiKey = '2b819cfe53710cb833ee3201004b6745';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=matric&q=';

const inputEl = document.getElementById ('input');
const btnEl = document.getElementById('btn');
const weatherEl = document.getElementById('weather-img'); 

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    document.getElementById('city').innerHTML = data.name;
    document.getElementById('temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.getElementById('wind').innerHTML = data.wind.speed + ' km/h';
    document.getElementById('humid').innerHTML = data.main.humidity + '%';
    document.getElementById('visible').innerHTML = data.visibility + ' km';
    
    if(data.weather[0].main =='Clouds'){
        weatherEl.src = 'cloud.png';
    }else if(data.weather[0].main =='Clear'){
        weatherEl.src = 'sun.png';
    }else if(data.weather[0].main =='Rain'){
        weatherEl.src = 'rainy.png';
    }else if(data.weather[0].main =='Drizzle'){
        weatherEl.src = 'drizzle.png';
    }else if(data.weather[0].main =='Mist'){
        weatherEl.src = 'mist.png';
    }
   
};

btnEl.addEventListener('click', ()=>{
    checkWeather(inputEl.value);
    inputEl.value = '';
});