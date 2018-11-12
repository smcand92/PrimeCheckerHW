const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

};

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `${result}`;
};


ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const primeResult = event.detail;
    console.log('payload received in ResultView:', primeResult);
    this.displayResult(primeResult);
  });
}





module.exports = ResultView;
