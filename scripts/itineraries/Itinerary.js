// exporting a function that takes in an itinerary object and builds the html based on that object's properties
export function Itinerary(itineraryObject){
  return `
  <section class="note-card">
      <p>Park: ${itineraryObject.park}</p>
      <p>Attraction: ${itineraryObject.attraction}</p>
      <p>Eatery: ${itineraryObject.eatery}</p>
    </section>
  `
}