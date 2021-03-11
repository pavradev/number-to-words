function NUM_TO_WORDS_RU(aInt, sex) {
    const hundreds = ['сто', 'двести','стриста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот']
    const tens = [null, 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шетьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
    const units = [['один', 'одна'], ['два', 'две'], ['три'], ['четыре'], ['пять'], ['шесть'], ['семь'], ['восемь'], ['девять'], ['десять'], ['одиннадцать'], ['двенадцать'], ['тринадцать'], ['четырнадцать'], ['пятнадцать'], ['шестнадцать'], ['семнадцать'], ['восемнадцать'], ['девятнадцать']]

    function assert(condition, message) {
        if (!condition) {
            throw new Error(message || "Assertion failed");
        }
    }

    // male = 0, female = 1
    function rankToWords(aInt, sex) {
        assert(aInt <= 999 && aInt >=0);
        sex = sex || 0; //default to male
        let words = '';
        if(aInt > 99) {
            let wholeHundreds = Math.floor(aInt / 100);
            words += (' ' + hundreds[wholeHundreds - 1]);
            aInt -= (wholeHundreds * 100);
        }
        if(aInt > 19) {
            let wholeTens = Math.floor(aInt / 10);
            words += (' ' + tens[wholeTens - 1]);
            aInt -= (wholeTens * 10);
        }
        if(aInt > 0) {
            let unitWord = units[aInt - 1][sex] || units[aInt - 1][0];
            words += (' ' +  unitWord);
        }
        return words;
    }

    const thousandForms = ['тысяч', 'тысяча', 'тысячи', 'тысячи', 'тысячи', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч']

    assert(aInt <= 999999 && aInt >=0);
    if(aInt === 0) {
        return 'ноль'
    }
    let words = '';
        if(aInt > 999) {
        let thousands = Math.floor(aInt / 1000);
        let lastThousandDigit = thousands % 10;
        words += (rankToWords(thousands, 1)) + ' ' + thousandForms[lastThousandDigit];
        aInt -= (thousands * 1000);
    }
    if(aInt > 0) {
        words += rankToWords(aInt, sex);
    }
    return words.trim();
}
