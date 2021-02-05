import {Itinerary} from "./Itinerary.js"

// declairing this empty variable that we're gonna use in those functions below
let itineraries = []

// once we call the function, the variable is full of the info we need to use, this function takes that variable and returns a copy of the array
export const useItineraries = () => {
  return itineraries.slice()
}
// this function uses a fetch call to get the objects from the api, then it turns that data into json that we can use, then it takes that data and stores it in the variable above
export const getItineraries = () => {
  return fetch('http://localhost:8088/itineraries')
      .then(response => response.json())
      .then(parsedItineraries => {
          itineraries = parsedItineraries
      })

}

// I believe this is the function we use to add what we write to the db.json file. it gets in contact with the api running on my local machine, then posts the new thing to that api
export const saveItinerary = itinerary => {
  return fetch('http://localhost:8088/itineraries', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(itinerary)
  })
  .then(getItineraries) // After we add it, get them all again so our new thing appears in our collection
}