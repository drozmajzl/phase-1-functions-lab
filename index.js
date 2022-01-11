// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(42 - someValue);
  }


  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }


  function distanceTravelledInFeet(start, destination) {
    return Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination));
  }


  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination);
    let farePrice;
    if (distance <=400) {
        farePrice = 0
    }
    else if (distance > 2500) {
        farePrice = "cannot travel that far"
    }
    else if (distance > 400 && distance < 2000) {
        farePrice = (distance - 400) * 0.02;
    }
    else if (distance > 2000) {
        farePrice = 25;
    }
    return farePrice;
    }
  