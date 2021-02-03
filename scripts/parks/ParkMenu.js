/*
 *   ParkMenu component that renders a select HTML element
 *   which lists 50 parks from the NPS API
 */
import { getNPSdata, copyNPSdata } from "./ParkProvider.js";
import { stringNPSParksCard } from "./ParkString.js";

// Save a reference to the DOM element where the menu will be rendered
const contentTarget = document.querySelector(".parks-dropdown");

// Get latest data for list of parks and then output HTML for the dropdown menu using render function
export const selectNPSParks = () => {
    // First fetch the API data and save a copy locally
    getNPSdata().then(() => {
        const NPSParks = copyNPSdata();
        console.log("Sliced array",NPSParks);
        // render() is defined below to list each park a list
        render(NPSParks);
    });
};

// Function to map/list each park from the API and build HTML dropdown menu
const render = (NPSfoo) => {
    /*
        Use interpolation here to invoke the map() method on
        the NPSfoo variable to generate the option elements.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="parks-menu">
            <option>Select a park to add to itinerary...</option>
            ${NPSfoo.map((NPSfoobar) => {
                //console.log("Dropdown list is:",NPSfoobar.name)
                return `<option>${NPSfoobar.name}</option>`;
            })}
        </select>
    `;
};

/*
Event listener will activate anytime there is a change in the body
If the event was a click in the NPS dropdown menu, then print the name of the park
*/
document.querySelector("body").addEventListener("change", (eventfoo) => {
    //console.log("You changed something in the body. I'm always watching you.")
    // Identify the specific element that triggered the event
    //console.log("Here is the element you clicked on:",eventfoo.target)

    if (eventfoo.target.id === "parks-menu") {
        //console.log("You selected something from the list of national parks");
        //console.log("This is the park you selected -",eventfoo.target.value);
        // Once the name of the park is selected, add HTML tags
        let selectedParkAsHTML = stringNPSParksCard(eventfoo.target.value);
        // Take HTML string and print to DOM element in itinerary
        document.querySelector(".parks-card").innerHTML = `${selectedParkAsHTML}`;
    }
});
