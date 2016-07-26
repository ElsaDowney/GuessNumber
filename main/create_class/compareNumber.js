class compareNumber {
    constructor(answer, input) {
        this.answer = answer;
        this.input = input;
    }

    static buildCompareNumber(answer, input) {
        let countCorrectNumber = 0;
        const answerArray = this.answer.split('').map(num=>parseInt(num));
        const inputArray = this.input.split('').map(num=>parseInt(num));
        for (let num of inputArray) {
            if(answerArray.find(number=>number === num))
                countCorrectNumber ++;
        }
        return countCorrectNumber;
    }

}
module.exports = compareNumber;
