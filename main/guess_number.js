const compareNumber = require('./create_class/compareNumber');
const answerGenerator = require('./create_class/answerGenerator');
const guess = require('./create_class/guess');

function test(answer,input) {
    const Random = new answerGenerator.buildAnswerGenerator();
    const result = new compareNumber.buildCompareNumber(answer,input);
}

module.exports = compareNumber;
module.exports = answerGenerator;




