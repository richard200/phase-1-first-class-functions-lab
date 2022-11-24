// Code your solution in this file!

let drivers = [];
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function (fareMultiplier){
     return function (num){
        return fareMultiplier * num
    }
   
}

let fareDoubler = createFareMultiplier(2)
 fareDoubler()

 let fareTripler = createFareMultiplier(3)
 fareTripler()

 function selectDifferentDrivers(arrayOfDrivers, func = returnFirstTwoDrivers() ){
    return func(arrayOfDrivers)


 }

 selectDifferentDrivers(returnLastTwoDrivers())

 