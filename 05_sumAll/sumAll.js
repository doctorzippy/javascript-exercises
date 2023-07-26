const sumAll = function(x,y) {
    let sum = 0;
    if (x<0||y<0 || typeof x != "number" ||typeof y != "number" ) {
        return "ERROR";
    }
    else if (x<y) {
        for (i=x;i<=y;i++) {
            sum += i;
        }
    }
    else {
        for (i=y;i<=x;i++) {
            sum += i;
        }
    }
    return sum
}
// Do not edit below this line
module.exports = sumAll;