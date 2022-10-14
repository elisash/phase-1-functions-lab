// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return ( someValue - 42 )
    } else {
    return (42 - someValue)}
}
function distanceFromHqInFeet(someValue) {
   const inFeet =  distanceFromHqInBlocks(someValue)
   return inFeet * 264
    }

 function distanceTravelledInFeet(start, destination) {
        //returns the number of feet traveled
        if ((destination - start) > 0 )  {
            return (destination - start) * 264
        } else {
        return (start - destination) * 264
        }
      }
      
      function calculatesFarePrice(start, destination) {
        const inFeett = (start - destination) * 264
        const freeRide = (inFeett- 400)
        const ride = (destination - start) * 264

          if (ride > 0 && ride < 400) {
           return 0;
            }
             else if (inFeett >= 400 && inFeett < 2000 ){
                return (freeRide * 0.02);
            }
            else if (ride >= 2000 && ride < 2500) {
                return 25;

            }
            else {
                return 'cannot travel that far';
            }



      }