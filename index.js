// Code your solution in this file
const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0, 2)
};

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

/*
const createFareMultiplier = x => y => {
    return x * y
};
*/

function createFareMultiplier(x) {
    return function(y){
        return y * x
    }    
}


function fareDoubler(fare) {
    const fareMultiplier = createFareMultiplier(fare)(2);
    return fareMultiplier
};

function fareTripler(fare) {
    const fareMultiplier = createFareMultiplier(fare)(3);
    return fareMultiplier
};


const selectDifferentDrivers = function(arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'], driverSet){    
    
        if(driverSet === returnFirstTwoDrivers){
            return returnFirstTwoDrivers(arrayOfDrivers)
        } else{
            if(driverSet === returnLastTwoDrivers) {
                return returnLastTwoDrivers(arrayOfDrivers)
            }
        };

    

}



//console.log(selectDifferentDrivers())

/*
function createFareMultiplier(x) {
    const fareMultiplier = function(y){
        y * x
    }
    return fareMultiplier
    
    
}
*/
/*
const createFareMultiplier = function(x) {
    return function(y) {x * y}
}
*/
/*
function createFareMultiplier(x) {
    return function(y){x * y};
    
}

*/



/*
const createFareMultiplier = function(fareMultiplier) {
    return function(n) {fareMultiplier * n};
    
}; 



//(n, customDriverArray) => [returnFirstTwoDrivers(customDriverArray), returnLastTwoDrivers(customDriverArray)][n]
*/
    
//console.log(returnFirstTwoDrivers())
//console.log(returnLastTwoDrivers())
//console.log(selectingDrivers(0, ['1','2','3','4']))
//console.log(selectingDrivers[0]())
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers))