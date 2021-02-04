/*
 *   ParkString component that renders a specific park
 *   as an HTML string to print
 */

 // Takes the name of the NPS park and adds HTML tags 
export function stringNPSParksCard(parkfoo) {
    return `
    <h2>${parkfoo}</h2>
    <button id="NPS--${parkfoo}">Get Details</button>
    `;
}

// Takes the name of the NPS park and print details in HTML
export function stringNPSParksDetails(parkfoo) {
    return `
    <h2>${parkfoo.fullName}</h2>
    <p>A ${parkfoo.designation}</p>
    <p>Park website: ${parkfoo.url}</p>
    <p>Located in beautiful ${parkfoo.states}</p>
    <p>${parkfoo.description}</p>
    <p>Directions: ${parkfoo.directionsInfo}</p>
    `;
}