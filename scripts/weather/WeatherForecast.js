import { getWeatherdata, copyWeatherdata } from "/scripts/weather/WeatherProvider.js";
import { copyNPSdata } from "/scripts/parks/ParkProvider.js";
import { stringWeatherForecast } from "/scripts/weather/WeatherString.js"

document.querySelector("body").addEventListener("change", (eventfoo) => {
    //console.log("You changed something in the body. I'm always watching you.")
    // Identify the specific element that triggered the event
    //console.log("Here is the element you clicked on:",eventfoo.target)

    if (eventfoo.target.id === "parks-menu") {
        //console.log("You selected something from the list of national parks");
        //console.log("This is the park you selected -",eventfoo.target.value);
        // Once the name of the park is selected, add HTML tags
        //let selectedParkAsHTML = stringNPSParksCard(eventfoo.target.value);
        let NPSParks = copyNPSdata();
        console.log(eventfoo.target.value)
        let singlePark = NPSParks.find(parkInLoop => parkInLoop.name == eventfoo.target.value);
        console.log(singlePark.latitude, singlePark.longitude)

        // Get the weather for a lat and lon of a park
        getWeatherdata(singlePark.latitude, singlePark.longitude).then(() => {
            const weatherAtPark = copyWeatherdata();
            console.log(weatherAtPark)
            document.querySelector(".forecast-card").innerHTML = stringWeatherForecast(weatherAtPark);

        })
        // Take HTML string and print to DOM element in itinerary
        //document.querySelector(".parks-card").innerHTML = `${selectedParkAsHTML}`;
        // Erase any current details when a new park is selected
        //document.querySelector(".parks-card__details").innerHTML = "";

    }
});