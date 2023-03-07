// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_KEY =`8fb376c4250a8b7a8a68feb6b7bd9f49`;

const loadTemperatureInfo = (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData (data));
}

const displayData = data =>{
    const temperature = document.getElementById('temperature');
    // console.log(data.weather[0].main);
    temperature.innerText = data.main.temp;

    // const skyCondition = document.getElementById('condition');
    // skyCondition.innerText = data.weather[0].main;
}

document.getElementById('search-btn').addEventListener('click',function(){
    const searchTextField = document.getElementById('search-field');
   const  searchText = searchTextField.value;
   loadTemperatureInfo(searchText);
   searchTextField.value='';//to clear search field;

})
//function must be call to find data from resources;
loadTemperatureInfo('Dhaka');