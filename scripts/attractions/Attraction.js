export function Attraction(attractionObject){
  return `
  <section class="attraction-card">
    <h2>${attractionObject.name}</h2>
    <button class="details-button" id="details--${attractionObject.id}">Get Details</button>
  </section>`
}