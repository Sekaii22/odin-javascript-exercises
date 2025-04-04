const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
        let currentYear = new Date().getFullYear();

        let personAge = (person.yearOfDeath ?? currentYear) - person.yearOfBirth;
        let oldestAge = (oldest.yearOfDeath ?? currentYear) - oldest.yearOfBirth;
        
        return oldestAge >= personAge ? oldest : person;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
