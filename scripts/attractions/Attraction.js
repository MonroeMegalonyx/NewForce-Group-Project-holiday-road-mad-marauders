export function Attraction(attractionObject){
  return `
  
    <h2 id="attraction-heading">${attractionObject.name}</h2>
    <button class="details-button" id="details--${attractionObject.id}">Get Details</button>
  `
}

export function AttractionDetails(selectedAttraction) {
  return `
  <div class="details-container">
    <h3>${selectedAttraction.name}</h3> 
    <h3>State:</h3> <p>${selectedAttraction.state}</p>
    <h3>City:</h3> <p>${selectedAttraction.city}</p>
    <h3>Description:</h3> <p>${selectedAttraction.description}</p>
  </div>
  `
}