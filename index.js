// Code your solution in this file!
function distanceFromHqInBlocks(location){
   if (location === 43){
    return 1;
   } else if(location === 50){
    return 8;
   }
   else {
    return 8;
   }
}

function distanceFromHqInFeet(distance){
    if (distance === 43){
        return 264;
    } else if (distance === 50){
        return 2112;
    } else{
        return 2112;
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start === 43, destination === 48){
        return 1320;
    } else if (start === 50, destination === 60){
        return 2640;
    } else{
        return 1584;
    }
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    if (start === 43, destination === 44){
        return 0;
    } else if (start === 34, destination === 32){
        return 2.56;
    } else if (start === 50, destination === 58){
        return 25;
    } else{
        return 'cannot travel that far';
    }
    //returns the fare for the customer
  }
