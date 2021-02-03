let listOfEateries = []

export const useEateries = () => listOfEateries.slice()


export const getEateries = () => {
    return fetch('http://holidayroad.nss.team/eateries')
        .then(r => r.json())
        .then(listOfEateryData => {
            listOfEateries = listOfEateryData
        }
        
    )
};