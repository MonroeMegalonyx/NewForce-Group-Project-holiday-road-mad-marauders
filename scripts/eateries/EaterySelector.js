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

const eventHub = document.querySelector('main');
eventHub.addEventListener("change", (clickObject) => {
   
        if(clickObject.target.id === "EaterySelect"){
            // console.log(clickObject.target)
            document.querySelector('.eateries-card').innerHTML = `<h2>${clickObject.target.value}</h2>`
        }   
    });