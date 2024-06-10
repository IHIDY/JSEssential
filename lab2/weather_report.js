document.getElementById('button1').addEventListener('click', showweatherDetails);

//This code is used to prevent the default behavior of the element (here is submit);
function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '5d6473db12d110fc76fa24cd2e0e61ec';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
        })
}

/**
 * 1. 当button类型是submit的话，submit会刷新页面， 所以我们这里要设置为监听click
 * 2. 以后记得把箭头函数， callback函数这种东西搞懂
 */
