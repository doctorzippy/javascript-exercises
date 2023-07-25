const repeatString = function(input,n) {
    if (n<0) {
        return "ERROR"
    }
    else {
    let start = "";    
    for (let i = 0;i<n;i++) {
        start += input;
}
return start;
}
}
// Do not edit below this line
module.exports = repeatString;
