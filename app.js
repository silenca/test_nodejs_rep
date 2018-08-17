const utils = require('./utils.js');

/***
 * It's just an example writes in console log 10 random representations results.
 */
for (let i = 0; i < 10; i++) {
    const d = Math.floor(Math.random() * 4000);
    console.log('integerToRoman', d, ' -> ', utils.integerToRoman(d));
}