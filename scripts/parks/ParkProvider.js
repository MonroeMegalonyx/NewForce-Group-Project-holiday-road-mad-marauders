/*
 *   ParkProvider component that fetches array of 50 parks
 *   from the NPS API when authenticated
 */

 // Get authentication key from settings file
 import { settings } from "/scripts/Settings.js"

let parks = [];

// Make a copy of the parks object for manipulation
export const copyNPSdata = () => parks.slice()

export const getNPSdata = () => {
        /*
        Load database state into application state with a fetch().
        The last `then()` sets the local `parks`
        variable to what is in the response from the API.
        */
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
        .then((foo) => foo.json())
        .then((nationalParkAPI) => {
            //console.log(nationalParkAPI.data)
            /*
            Load the data from API, which is stored under `data` in orginal arrary.
            Then save the actual data array to local object `parks`.
            */
            parks = nationalParkAPI.data;
            console.log("Saved from API",parks)
        });
};
