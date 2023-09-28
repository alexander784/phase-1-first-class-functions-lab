const returnFirstTwoDrivers=function(drivers){
    return drivers.slice(0,2)
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


const returnLastTwoDrivers=function(drivers){
    return drivers.slice(-2)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(fare){
        return fare * num
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, returningDriver) {
    return returningDriver(drivers)
  }
