const leapYears = function(year) {
    // leap year must be divisible by 4
    if (year % 4 == 0) {
        // leap year not divisible by 100 is guaranteed to be leap year
        if (year % 100 == 0) {
            // if divisible by 100, if it is also divisible by 400, 
            // then guaranteed to be leap year
            if (year % 400 == 0) return true;
            else return false
        }
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
