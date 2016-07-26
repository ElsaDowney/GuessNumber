class answerGenerator {

    static buildAnswerGenerator() {
        const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = [];
        for (let i = 0; i < 4; i++)
        {
            const num = Math.random() * numberArray.length;
            result.push(numberArray.splice(num,1)[0]);
        }

            return result;
    }

}
module.exports = answerGenerator;
