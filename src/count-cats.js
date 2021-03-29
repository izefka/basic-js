const CustomError = require("../extensions/custom-error");
module.exports = function countCats(m) {
  let y=0;
   for (let i=0; i<m.length;i++){
    for (let j=0; j<m[i].length;j++){
      if(m[i][j] == '^^') y++;
    }
  }
  return y;
};

