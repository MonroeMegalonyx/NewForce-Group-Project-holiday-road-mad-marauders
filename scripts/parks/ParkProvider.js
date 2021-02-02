// Get private API key from settings
import { settings } from "/scripts/Settings.js"

let parks = [];

export const sliceParks = () => parks.slice();

export const getParks = () => {
    // Fetch data using API key npsKey
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
        .then((foo) => foo.json())
        .then((nationalParkAPI) => {
            parks = nationalParkAPI;
            console.table(parks)});
};

