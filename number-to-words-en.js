function NUM_TO_WORDS_EN(aInt) {
    const tens = [null, 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    //This is a helper assert function
    function assert(condition, message) {
        if (!condition) {
            throw new Exception(message || "Assertion failed");
        }
    }

    //This is a helper function that converts a number rank to words
    function rankToWords(aInt) {
        assert(aInt <= 999 && aInt >= 0, 'Number is out of boundary [0 - 999]');
        let words = '';
        if (aInt > 99) {
            let wholeHundreds = Math.floor(aInt / 100);
            words += (' ' + units[wholeHundreds - 1] + ' hundred');
            aInt -= (wholeHundreds * 100);
        }
        if (aInt > 19) {
            let wholeTens = Math.floor(aInt / 10);
            words += (' ' + tens[wholeTens - 1]);
            aInt -= (wholeTens * 10);
        }
        if (aInt > 0) {
            let unitWord = units[aInt - 1];
            words += (' ' + unitWord);
        }
        return words;
    }

    //Main function logic 
    assert(Number.isInteger(aInt), 'Input is invalid');
    assert(aInt <= 999999 && aInt >= 0, 'Number is out of boundary [0 - 999_999]');
    if (aInt === 0) {
        return 'zero';
    }
    let words = '';
    if (aInt > 999) {
        let thousands = Math.floor(aInt / 1000);
        let lastThousandDigit = thousands % 10;
        words += (rankToWords(thousands, 1)) + ' thousand';
        aInt -= (thousands * 1000);
    }
    if (aInt > 0) {
        words += (rankToWords(aInt));
    }
    return words.trim();
}

