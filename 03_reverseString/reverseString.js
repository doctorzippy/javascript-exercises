const reverseString = function(input) {
const storage = [];
for (let i = input.length; i>=0; i--) {
    storage.push(input.charAt(i));
}
return storage.join('');
};

// Do not edit below this line
module.exports = reverseString;
