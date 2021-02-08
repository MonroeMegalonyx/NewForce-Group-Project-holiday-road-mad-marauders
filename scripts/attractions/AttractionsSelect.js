import {useAttractions, getAttractions} from "./AttractionProvider.js";
import {Attraction, AttractionDetails} from "./Attraction.js"

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
// listen to main for a changeEvent, make a parameter called eventObject for this function
eventHub.addEventListener("change", (eventObject) => {
    
    // if the change happens in the dropdown with the id of attractionSelect
    if(eventObject.target.id === "attractionSelect"){
      // we're calling the useAttractions function, using the .find method on that collection of arrays, we're pulling out individualAttraction if what the user clicked on has the same value as individualAttraction.name, then we're putting that name in a variable called newAttraction
      let newAttraction = useAttractions().find(individualAttraction => eventObject.target.value === individualAttraction.name)
      
      // we're calling the Attraction function that builds an HTML representation and we're passing in the argument of newAttraction that has the name of the attraction that matches the one the user clicked on
      let attractionHTML = (Attraction(newAttraction));
      attractionContainer.innerHTML = attractionHTML;
    }
    
  
})

// getting a reference to the element where we want to print the details and storing it in detailsBox
let detailsBox = document.querySelector(".attractions-card__details");
// select the body element in the html and store it in eventArea
const eventArea = document.querySelector("body")
// listen to the body for a click Event, make a parameter called eventObject for this function
eventArea.addEventListener("click", (eventObject) => {
  // calling the function that populates the useAttraction function, THEN... function
  getAttractions().then(() => {
  // calling the function that stores a copy of the attractions array, and storing that array in a new variable
  let attraction = useAttractions();
    // if the user clicks on the details button...
    if (eventObject.target.id.includes("details--")) {
      // attraction array, using .find, looking for the attraction in the array that has the id that matches what the user clicked on, and storing the results in a new variable
      let singleAttraction = attraction.find(attractionInLoop => attractionInLoop.id === +eventObject.target.id.split("--")[1])
      let attractionDetailsHTML = AttractionDetails(singleAttraction)
        // writing to the dom, the various properties of the object the user selected
        detailsBox.innerHTML = attractionDetailsHTML
    }
  })
})   

