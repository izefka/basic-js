const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
   if(!sampleActivity ||
    isNaN(sampleActivity ) ||
    typeof sampleActivity !== "string" ||
    MODERN_ACTIVITY < sampleActivity ||
    sampleActivity <= 0) {
    return false;
  }
return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD))
};
