const removeFromArray = function(input) {
  const args = Array.prototype.slice.call(arguments, 1);
  const output = input.filter(element => !args.includes(element));  
    return output;
}

// Do not edit below this line
module.exports = removeFromArray;
