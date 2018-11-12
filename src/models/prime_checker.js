const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function(){

};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

PrimeChecker.prototype.bindEvents = function (){
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    console.log('payload received in PrimeChecker:', inputtedNumber);
    const result = this.numberIsPrime(inputtedNumber);
    PubSub.publish('PrimeChecker:result-calculated', result);
  });
};



module.exports = PrimeChecker;
