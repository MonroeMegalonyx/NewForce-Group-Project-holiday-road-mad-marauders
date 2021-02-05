// Print the dropdown menu with parks when page loads
import { selectNPSParks } from "./parks/ParkMenu.js"
selectNPSParks();
import { getEateries } from './eateries/EateryProvider.js'
import { EateriesSelect } from './eateries/EaterySelector.js'
getEateries()
EateriesSelect()
import {AttractionsSelect} from "./attractions/AttractionsSelect.js";

AttractionsSelect();

import {} from "./weather/WeatherForecast.js"
import {} from "./itineraries/ItineraryString.js"