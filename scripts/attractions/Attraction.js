export function Attraction(attractionObject){
  return `
  <section class="attraction-card">
    <p>${attractionObject.name}</p>
    <p>${attractionObject.id}</p>
    <button class="details-button" id="details--${attractionObject.id}">Get Details</button>
      
  </section>`
}