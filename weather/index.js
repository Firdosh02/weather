let inputvalue = document.querySelector('#cityinput')
let btn = document.querySelector('#add')
let city = document.querySelector('#cityoutput')
let discrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
apik = "b70fc53110d90be03294c9ddb5720f38"



function convertion(val){
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik).then(res => res.json())

    .then(data =>{
        let nameval = data['name']
        let descrip = data['weather']['0']['description']
        let temperature = data['main']['temp']
        let wndspeed = data['wind']['speed']

        city.innerHTML = ` <i class="fa-solid fa-location-dot"></i> <span>${nameval}<span>`;
        temp.innerHTML=`Temperature: <span>${convertion(temperature)} C </span>`
        description.innerHTML=`Sky Condition: <span>${descrip}<span>`
        wind.innerHTML=`Wind Speed: <span>${wndspeed} km/h <span>`
    })

    .catch(err => alert('You entered wrong city name'))
})
