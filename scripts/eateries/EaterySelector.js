import { getEateries, useEateries } from './EateryProvider.js'


//This is the target of the html being built in the render function
const contentTarget = document.querySelector(".eateries-dropdown");

//An exporting function
export const EateriesSelect = () => {
    //getEateries function is invoked to to fetch the API data and waits for it all to return
    getEateries().then(() => {
        //Variable created to store information invoked from the useEateries function
        const Eateries = useEateries()
        //A fucntion named "render" is invoked with and argument "eateries"
        render(Eateries);
    })
}

//The function "render" has a parameter named EateriesCollection
const render = EateriesCollection => {
    //A container named "contentTarget" has a property that stores html information
    contentTarget.innerHTML = `
        <select class="dropdown" id="EaterySelect">
            <option>Select a place to get your grub on!</option>
            //The parameter EateriesCollection is taking an argument "Eateries" which is an array of objects that is being mapped over by the .map() method which creates a new array
            ${EateriesCollection.map((currentEateryInLoop) => {
                //Each of those elements in the new array and its key value ".businessName" is being stored in a variable name "eateryName"
                const eateryName = currentEateryInLoop.businessName
                //Each one of those eateryNames is being interpolated as an option in the dropdown
                return `<option>${eateryName}</option>`
                })}
        </select>`;
};

//eventHub is a variable with a target in the body section of the html
const eventHub = document.querySelector('body');
//eventHub is being defined as an event listener with a default parameter named "clickObject"
eventHub.addEventListener("change", (clickObject) => {
   
        //A condtional is being provided to the event listener that when a change "click" in the dropdown menu, ID'd as EaterySelect, is clicked...
        if(clickObject.target.id === "EaterySelect"){

            //then the html targeted in DOM will render
            document.querySelector('.eateries-card').innerHTML = `
            //The html rendered below comes from the argument passed into the parameter of clickObject which is defined as the clicked eaterName and the value of that click will be displayed
            <h2>${clickObject.target.value}</h2>
            <button id="eateryDeet--${clickObject.target.value}">Get the Deets!</button>
            `
        }   
    });


//A targeted DOM element and an event listener to go with it has a parameter eventObject
document.querySelector('main').addEventListener('click', (eventObject) => {

    //When the click event has registered the click and that click includes "eateryDeet", which is the ID of the button, then the html below will render.
    if (eventObject.target.id.includes("eateryDeet--")) {

        //useEateriesis function is again called and stored into a container
        let eateries = useEateries()

        //The stored information from the useEateries function is looped through with the .find() method and is has parameter of eateryInLoop. The argument that is being passed in is the individual eatery that was passed with the click and if the individuals eatery busnissName is equal to the clicks ID(which is split at the second index) then it will return the html built below.
        let eachEatery = eateries.find(eateryInLoop => eateryInLoop.businessName == eventObject.target.id.split('--')[1])

        //targeted with displaying the information from the click event that found the proper information of the eatery.
        document.querySelector('.eateries-card__details').innerHTML = `
        <h2>${eachEatery.businessName}</h2>
            <p><em>${eachEatery.description}</em></p>
        <h4>${eachEatery.city}</h4>
        <h4>${eachEatery.state}</h4>
        `
    }
})