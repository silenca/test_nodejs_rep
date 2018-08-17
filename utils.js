const constants = require('./constants.js');

/**
 * Representation a positive integer number to its Roman numeral representation as a String.
 *
 * @author: Strybul Sergey
 * @param {number} int Number for representation.
 * @return {string} Roman numeral representation.
 *
 * @example
 *
 * integerToRoman(42);
 * => "XLII"
 *
 * integerToRoman(1990);
 * => "MCMXC"
 */

module.exports.integerToRoman = function(int) {
    // variable for result
    let roman = '';

    // while integer is bigger then 0, decrease integer on max Roman number
    while (int > 0){
        // loop in Roman numbers from bigger to lower
        for (let rNum in constants.romanNumbers) {
            // if current Roman number less then integer
            if (constants.romanNumbers[rNum] <= int) {
                // add current Roman number to result
                roman += rNum;
                // decrease integer on current Roman number
                int -= constants.romanNumbers[rNum];
                // try this loop for new integer
                break;
            }
        }
    }

    // return Roman number
    return roman;
};