// getting a reference to the main element
const eventHub = document.querySelector("main")
// if there's a click event in the main element, we run this function with clickEvent as the parameter
eventHub.addEventListener("click", clickEvent => {
  // if what the user clicked on has the id of saveNote... which is the button that saves the info...
  if (clickEvent.target.id === "saveItinerary") {

      // Make a new object representation of a note, this seems to be the object with the info that we want to get and save into the local api, stored in a variable
      let newItinerary = {
          // Key/value pairs here
          "park": document.querySelector("#park-heading").innerHTML,                                       
          "attraction": document.querySelector("#attraction-heading").innerHTML,
          "eatery": document.querySelector("#eatery-heading").innerHTML
      }
      console.log(newItinerary)
      

      // Change API state and application state, we're calling the saveNote function - which takes in the info from the argument of newNote and writes it to the local api, then we're calling the NoteList function, which I believe just gets everything again
      // saveNote(newNote)
      // .then(NoteList) // Refresh your list of notes once you've saved your new one
      // console.log(newNote)
  }
})