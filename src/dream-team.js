const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(m) {
  let t=[];
  let o="";
  if(m == null) return false;
  for (let i=0; i<m.length;i++){
    if(typeof m[i] == 'string' && isNaN(m[i])){ 
     m[i]=m[i].trimLeft().toUpperCase();
    t.push(m[i][0]);}}
    t.sort();
    for (let i=0; i<t.length;i++){
      o+=t[i];
    }
    return o;
  };
