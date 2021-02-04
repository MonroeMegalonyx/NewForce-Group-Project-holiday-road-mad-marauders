// Get authentication key from settings file
import { settings } from "/scripts/Settings.js"

let weather = [];

// Make a copy of the parks object for manipulation
export const copyWeatherdata = () => weather.slice()

export const getWeatherdata = (latfoo,lonfoo) => {
        /*
        Load database state into application state with a fetch().
        The last `then()` sets the local `parks`
        variable to what is in the response from the API.
        */
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latfoo}&lon=${lonfoo}&exclude=current,minutely,hourly,alerts&appid=${settings.weatherKey}`)
        .then((foo) => foo.json())
        .then((weatherAPI) => {
            //console.log(nationalParkAPI.data)
            /*
            Load the data from API, which is stored under `data` in orginal arrary.
            Then save the actual data array to local object `parks`.
            */
            weather = weatherAPI.daily;
            //console.log("Saved from API",parks)
        });
};
