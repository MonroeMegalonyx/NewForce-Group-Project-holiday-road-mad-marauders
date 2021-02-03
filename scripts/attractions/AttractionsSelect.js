import {useAttractions, getAttractions} from "./AttractionProvider.js";
import {Attraction} from "./Attraction.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".attractions-dropdown")

// export the function that puts it all together
export const AttractionsSelect = () => {
  // we're calling that function that returns the info from the api and THEN more stuff
  getAttractions().then(() => {
      // call the function that is a copy of the array and store it in the attractions variable
      const attractions = useAttractions();
      // call the render function that we're about to make and pass in attractions as the argument
      render(attractions)
  
  })
}

// creating a render function and setting a parameter where we can pass in the attractions array
function render(attractionsCollection){
  // contentTarget holds a reference to the attractions-dropdown from our HTML
  // we're creating a dropdown with select, adding a default option with option, then whatever argument we use when we call the function, we're using .map to map over it, we set a parameter called attractionObject, then we declare a variable called attractionName and we store the value of name for each attraction that gets mapped over inside that variable, then we return some html that makes option tags with the individual attraction names inside 
  contentTarget.innerHTML = `
  <select class="attraction-dropdown" id="attractionSelect">
  <option>Please select an attraction...</option>
    ${
      attractionsCollection.map(attractionObject => {
        const attractionName = attractionObject.name 
        return `<option>${attractionName}</option>`
      })
    }
  </select>
  `
}

// get a reference to the attractions-card HTML and store it in attractionContainer
const attractionContainer = document.querySelector(".attractions-card");
// select the main element in the html and store it in eventHub
const eventHub = document.querySelector("main")
// listen to main for a changeEvent, which is associated with a dropdown selection, make a parameter called eventObject for this upcoming function
eventHub.addEventListener("change", (eventObject) => {
    
    // if the change happens in the dropdown with the id of attractionSelect
    if(eventObject.target.id === "attractionSelect"){
      // we're calling the useAttractions function, using the .find method on that collection of arrays, we're pulling out x if what the user clicked on has the same value as x.name. x is each individual attraction, then we're putting all those names in a variable called newAttraction
      let newAttraction = useAttractions().find(x => eventObject.target.value === x.name)
      
      // we're calling the Attraction function that builds an HTML representation and we're passing in the argument of newAttraction that has the name of the attraction that matches the one the user clicked on
      let attractionHTML = (Attraction(newAttraction));
      attractionContainer.innerHTML = attractionHTML;
    }
    
  
})

// document.querySelector("body").addEventListener("click", (clickObject) => {
//   if (clickObject.target.id.includes("details--") {

//   }
// })

let detailsBox = document.querySelector(".attractions-card__details");
// select the main element in the html and store it in eventHub
const eventArea = document.querySelector("body")
// listen to main for a changeEvent, which is associated with a dropdown selection, make a parameter called eventObject for this upcoming function
eventArea.addEventListener("click", (eventObject) => {
  getAttractions().then(() => {
  let attraction = useAttractions();
   
    if (eventObject.target.id.includes("details--")) {
      
      let singleAttraction = attraction.find(attractionInLoop => attractionInLoop.id == eventObject.target.id.split("--")[1])
      let attractionName = "";
      let attractionState = "";
      let attractionCity = "";
      let attractionDescription = "";
      let attractionSouvenirs = "";
      let attractionRestrooms = "";

      console.log(eventObject.target.id)
      console.log(eventObject.target.id.split("--"))
      console.log(singleAttraction)
        
        attractionName += singleAttraction.name 
        attractionState += singleAttraction.state
        attractionCity += singleAttraction.city
        attractionDescription += singleAttraction.description
        attractionSouvenirs += singleAttraction.ameneties.souvenirs
        attractionRestrooms += singleAttraction.ameneties.restrooms
       
        detailsBox.innerHTML = `
        <div class="details-container">
          <h3>Name:</h3> <p>${attractionName}</p>
          <h3>State:</h3> <p>${attractionState}</p>
          <h3>City:</h3> <p>${attractionCity}</p>
          <h3>Description:</h3> <p>${attractionDescription}</p>
          <h3>Souvenirs:</h3> <p>${attractionSouvenirs}</p>
          <h3>Restrooms:</h3> <p>${attractionRestrooms}</p>
        </div>
      `
    }
  })
})   

// "id": 1,
// "name": "Big White Shirt",
// "state": "AL",
// "city": "Andalusia",
// "description": "Andalusia, Alabama, is the white dress-shirt capital of America, and this highly photographed enormous white shirt sign is a reminder of that. According to Roadside America, the tie is changed seasonally.",
// "ameneties": {
//     "souvenirs": false,
//     "restrooms": false
// }