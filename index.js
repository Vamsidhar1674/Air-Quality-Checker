const myform =document.getElementById("form");
const lat  =document.getElementById("latitude");
const long = document.getElementById("longitude");
const resultContainer=document.getElementById("result");

const aqiresult =document.getElementById("aqi");
const coresult =document.getElementById("co");
const no2result =document.getElementById("no2");
const o3result =document.getElementById("o3");
const pm25result =document.getElementById("pm25");
const pm10result =document.getElementById("pm10");
const so2result =document.getElementById("so2");

myform.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude=lat.value;
    const longitude=long.value;
    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c13cb7d5famsh0ff99397d2a15cfp1e7b9ajsn1a15ff18413b',
            'x-rapidapi-host': 'air-quality.p.rapidapi.com'
        }
    };
    fetch(url,options)
        .then(response=>response.json())
        .then(result=>{
            let readings=result.data[0];
            aqiresult.textContent=readings.aqi;
            coresult.textContent=readings.co;
            no2result.textContent=readings.no2;
            o3result.textContent=readings.o3;
            pm25result.textContent=readings.pm2;
            pm10result.textContent=readings.pm10;
            so2result.textContent=readings.so2;
            resultContainer.style.display ='flex';
        })

    
});