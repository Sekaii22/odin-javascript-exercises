const palindromes = function (str) {
    let strClean = str.toLowerCase().split("")
                        .filter(char => {
                            let code = char.charCodeAt(0);
                            return (code >= 48 && code <= 57) || 
                            (code >= 65 && code <= 90) || 
                            (code >= 97 && code <= 122);
                        })
                        .join("");

    let strReverse = strClean.split("")
                        .reverse()
                        .join("");

    console.log(strReverse);

    return strClean === strReverse;
};

// Do not edit below this line
module.exports = palindromes;
