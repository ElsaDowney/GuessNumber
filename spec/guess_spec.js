const main = require('../main/create_class/guess');
const Answer = require('../main/create_class/answerGenerator');

describe('Guess',function () {

    it('buildGuess',function () {

        spyOn(Answer,'buildAnswerGenerator').and.returnValue('1234');
        const guess = main.buildGuess('1234');
        expect(guess).toEqual('4A0B');
        
    });
});