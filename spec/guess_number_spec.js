describe('guess_number', function () {

    it('compareNumber result:0A4B', function () {

        const result = buildCompareNumber('1234', '4321');
        const expected = '0A4B';

        expect(result).toEqual(expected);
    });

    it('compareNumber result:4A0B', function () {

        const result = buildCompareNumber('1234', '1234');
        const expected = '4A0B';

        expect(result).toEqual(expected);
    });

    it('compareNumber result:0A0B', function () {

        const result = buildCompareNumber('1234', '5678');
        const expected = '0A0B';

        expect(result).toEqual(expected);
    });


    it('compareNumber result:1A2B', function () {

        const result = buildCompareNumber('1234', '1543');
        const expected = '1A2B';

        expect(result).toEqual(expected);
    });

})