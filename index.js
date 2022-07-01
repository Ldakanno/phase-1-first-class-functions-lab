const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function fareMultiplier(integer) { return integer ** 2}; 
}

const fareDoubler = createFareMultiplier => createFareMultiplier * 2;

const fareTripler = createFareMultiplier => createFareMultiplier * 3;

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers) 
}
