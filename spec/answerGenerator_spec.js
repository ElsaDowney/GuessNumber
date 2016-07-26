const main = require('../main/create_class/answerGenerator');

describe('Answer Generator', function () {

    it('AnswerGenerator', function () {

        const isUnique = (item,index,array) =>{
            return array.lastIndexOf(item) === index;
        }
        const result = main.buildAnswerGenerator();
        expect(result.length).toEqual(4);
        expect(result.every(isUnique)).toBeTruthy;
        expect(main.buildAnswerGenerator()).not.toEqual(main.buildAnswerGenerator());

    })
});
