const removeFromArray = function(arr, ...nums) {
    // new copy
    newArr = arr.slice();

    // for each number to remove
    for (let num of nums) {
        let index;

        // keep removing until that number has been fully removed
        while((index = newArr.findIndex(item => item === num)) !== -1) {
            newArr.splice(index, 1);
        }
    }

    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
