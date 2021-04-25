window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  // A reference to the 'rides' div
  let rideElements = document.querySelector(`.rides`)

  //Declaring variable 'i'; which is going to loop as long as the array is
for (let i=0; i<json.length; i++){
  let ride=json[i]
  if (ride.purpleRequested == true) {
    // We'll output rideType as Noober Purple if above holds
        rideType = `Noober Purple`
    // If the condition isn't met, check if there are more than 3 passengers
      } else if (ride.numberOfPassengers > 3) {
    // We'll output rideType as Noober XL if above holds
        rideType = `Noober XL`
    // If neither of the above are true, default to Noober X
      } else {
        rideType = `Noober X`
      }
    // Retrieve the passenger's first and last name from the profile, store it in memory
      let passengerFirstname = ride.passengerDetails.first
      let passengerLastname = ride.passengerDetails.last
    // Retrieve their phone number, store in memory
      let passengerPhone = ride.passengerDetails.phoneNumber
    // Retrieve their address details, store the text in pickupDetails
      let location = ride.pickupLocation
      let pickupDetails = `${location.address}, ${location.city}, ${location.state}, ${location.zip}`
    // Retrieve their dropoff details, store the text in dropoffDetails
    let dropLocation = ride.dropoffLocation
    let dropoffDetails = `${dropLocation.address}, ${dropLocation.city}, ${dropLocation.state}, ${dropLocation.zip}`
    // Let driver know the number of passengers
    let passengerAmount = ride.numberOfPassengers
  let rideDetails = `${rideType} Passenger: ${passengerFirstname} ${passengerLastname} - ${passengerPhone}. Pickup at: ${pickupDetails}. Dropoff at: ${dropoffDetails}. Expected number of riders: ${passengerAmount}. `
  //print out all the rides on the page
  rideElements.insertAdjacentHTML(`beforeend`,rideDetails)
  console.log(rideDetails)
  
}
})


