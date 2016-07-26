const Answer = require('./answerGenerator');
const Compare = require('./compareNumber');
class Guess{
    static buildGuess(input){
        const answer = Answer.buildAnswerGenerator();
        return Compare.buildCompareNumber(input,answer);
    }
}
module.exports = Guess;