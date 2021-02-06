import { getEateries, useEateries } from './EateryProvider.js'

const contentTarget = document.querySelector(".eateries-dropdown");

export const EateriesSelect = () => {
    getEateries().then(() => {
        const Eateries = useEateries()
        render(Eateries);
    })
}

const render = EateriesCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="EaterySelect">
            <option>Select a place to get your grub on!</option>
            ${EateriesCollection.map((currentEateryInLoop) => {
                const eateryName = currentEateryInLoop.businessName
                return `<option>${eateryName}</option>`
                })}
        </select>`;
};

const eventHub = document.querySelector('body');
eventHub.addEventListener("change", (clickObject) => {
   
        if(clickObject.target.id === "EaterySelect"){
            // console.log(clickObject.target)
            document.querySelector('.eateries-card').innerHTML = `
            <h2 id="eatery-heading">${clickObject.target.value}</h2>
            <button id="eateryDeet--${clickObject.target.value}">Get the Deets!</button>
            `
        }   
    });

document.querySelector('main').addEventListener('click', (eventObject) => {

    if (eventObject.target.id.includes("eateryDeet--")) {

        let eateries = useEateries()

        let eachEatery = eateries.find(eateryInLoop => eateryInLoop.businessName == eventObject.target.id.split('--')[1])

        document.querySelector('.eateries-card__details').innerHTML = `
        <h2>${eachEatery.businessName}</h2>
        <p><em>${eachEatery.description}</em></p>
        <h4>${eachEatery.city}</h4>
        <h4>${eachEatery.state}</h4>
        `
    }
})