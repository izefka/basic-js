const CustomError = require("../extensions/custom-error");

module.exports = function repeater(r, options) {
r=String(r);
let str=r;
let sep;
let p=String(options.addition);
p=String(p);
if(!options.separator) sep='+';
else sep=options.separator;
let adsep;
if(!options.additionSeparator)adsep='|';
else adsep=options.additionSeparator;
if(!options.additionRepeatTimes && !options.repeatTimes) return str+=String(options.addition);
if(!options.additionRepeatTimes && options.addition) str+=String(options.addition);
if(options.additionRepeatTimes > 0){
for(let i=1; i<=options.additionRepeatTimes;i++){
    str+=p;
    if(i<options.additionRepeatTimes) str+=adsep;
}
}
let s=str;
str="";
if(options.repeatTimes > 0){
    for(let i=1; i<=options.repeatTimes;i++){
        str+=s;
        if(i<options.repeatTimes) str+=sep;
    }
    }
    return str;
};
  
