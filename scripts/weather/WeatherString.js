export function stringWeatherForecast(weatherfoo) {
    return `
    <p>Tomorrow: Temperature is going to feel like: ${Math.floor(weatherfoo[1].feels_like.day*1.8-459.67)}*F and it will be ${weatherfoo[1].weather[0].description}</p>
    <p>Day 2: Temperature is going to feel like: ${Math.floor(weatherfoo[2].feels_like.day*1.8-459.67)}*F and it will be ${weatherfoo[2].weather[0].description}</p>
    <p>Day 3: Temperature is going to feel like: ${Math.floor(weatherfoo[3].feels_like.day*1.8-459.67)}*F and it will be ${weatherfoo[3].weather[0].description}</p>
    <p>Day 4: Temperature is going to feel like: ${Math.floor(weatherfoo[4].feels_like.day*1.8-459.67)}*F and it will be ${weatherfoo[4].weather[0].description}</p>
    <p>Day 5: Temperature is going to feel like: ${Math.floor(weatherfoo[5].feels_like.day*1.8-459.67)}*F and it will be ${weatherfoo[5].weather[0].description}</p>
    `;
}