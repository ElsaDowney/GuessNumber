class compareNumber {

    static buildCompareNumber(answer, input) {

        let countCorrectNmber = 0;
        const answerArray = answer.split('').map(num=>parseInt(num));
        const inputArray = input.split('').map(num=>parseInt(num));
        let countA = answerArray.map((number,index)=>
            (number === inputArray[index])).reduce((a,b)=>a+b);
        for (let num of inputArray) {
            if (answerArray.find(number=>number === num))
                countCorrectNmber++;
        }
        let countB = countCorrectNmber - countA;
        
        return `${countA}A${countB}B`;
    }

}
module.exports = compareNumber;
