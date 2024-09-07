const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";
// your provided OpenWeatherMap API key

function getWeather()
{
    const city = document.getElementById('cityInput').value;
    const weatherDetails = document.getElementById('weatherDetails'); 
    if(city==='')
    {
        weatherDetails.innerHTML = '<p>Please Enter the City Name</p>';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        if(data.cod==='404'){
            weatherDetails.innerHTML = '<p>City Not Found Please Try Again</p>';
        }
        else{
            console.log('data is here',data);
            weatherDetails.innerHTML = `<h3>${data.name},${data.sys.country}</h3> 
            <p>Temparature:${data.main.temp}</p>
            <p>Temparature-Max:${data.main.temp_max}</p>
            <p>Base:${data.base}</p>
            <p>ID:${data.id}</p>`;
        }
    })
    .catch(error=>{
        weatherDetails.innerHTML=`<p>Error Feathching Data</p>`;
    }
    )

}