import {useAttractions, getAttractions} from "./AttractionProvider.js";
import {Attraction} from "./Attraction.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".attractions-dropdown")

export const AttractionsSelect = () => {
  // we're calling that function that returns the info from the api and THEN more stuff
  getAttractions().then(() => {
     
      const attractions = useAttractions();
       render(attractions)
  
  })
}

function render(attractionsCollection){
  contentTarget.innerHTML = `
  <select class="dropdown" id="attractionSelect">
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

const attractionContainer = document.querySelector(".attractions-card");
// select the main element in the html and store it in eventHub
const eventHub = document.querySelector("main")
// listen to main for a changeEvent, which is associated with a dropdown selection, make a parameter called eventObject for this upcoming function
eventHub.addEventListener("change", (eventObject) => {
    
    // if the change happens in the dropdown with the id of crimeSelect(the crime filter dropdown)
    if(eventObject.target.id === "attractionSelect"){
       
      // Make a new object representation of a note
      let newAttraction = {
        // Key/value pairs here
        name: eventObject.target.value,
        id: eventObject.target.id
    }
      
    
        let attractionHTML = (Attraction(newAttraction));
        attractionContainer.innerHTML = attractionHTML;
    }
    
  
})

// document.querySelector("body").addEventListener("click", (clickObject) => {
//   if(clickObject.target.id.includes("details--") {

//   }
// })

let detailsBox = document.querySelector(".attractions-card__details");
// select the main element in the html and store it in eventHub
const eventArea = document.querySelector("body")
// listen to main for a changeEvent, which is associated with a dropdown selection, make a parameter called eventObject for this upcoming function
eventArea.addEventListener("click", (eventObject) => {
  getAttractions().then(() => {
  let attraction = useAttractions();
   
    // console.log(event.target.id.split("-")[1])
    if (eventObject.target.id.includes("details--")) {
      
      let singleAttraction = attraction.find(attractionInLoop => attractionInLoop.id == eventObject.target.id.split("--")[1])
      // let associateName = [];
      // let associateAlibi = [];
      console.log(attraction)
      console.log(eventObject.target.id)
      console.log(eventObject.target.id.split("--"))
      console.log(singleAttraction)
      for(let i = 0; i < singleAttraction.length; i++) {
        
        associateName += singleCriminal.known_associates[i].name + " "
        associateAlibi += singleCriminal.known_associates[i].alibi + " "
       
        detailsBox.innerHTML = `
        <div class="details-container">
          State: ${associateName}
          City: ${associateAlibi}
          Description: ${associateAlibi}
          Ameneties: ${associateAlibi}
        </div>
      `;
      }
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