function createPhoneNumber(numbers){
    // Code here
    // get first 3 numbers
    let first3 = numbers.slice(0,3).join('');
    
    // get next 3 numbers
    let next3 = numbers.slice(3,6).join('');
    
    // get last 4 numbers
    let last4 = numbers.slice(6,10).join('');
    
    return `(${first3}) ${next3}-${last4}`;
}

module.exports = createPhoneNumber;