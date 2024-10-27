module.exports = function toReadable (number) {
    if (number === 0) return 'zero';

    const ones = [
        '', 'one', 'two', 'three', 'four', 
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 
        'fourteen', 'fifteen', 'sixteen', 
        'seventeen', 'eighteen', 'nineteen'
    ];

    const tens = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 
        'eighty', 'ninety'
    ];

    const hundreds = Math.floor(number / 100);
    const remainder = number % 100;
    
    let result = '';

    if (hundreds > 0) {
        result += ones[hundreds] + ' hundred';
    }

    if (remainder > 0) {
        if (result) result += ' ';
        
        if (remainder < 20) {
            result += ones[remainder];
        } else {
            const tenPart = Math.floor(remainder / 10);
            const onePart = remainder % 10;
            result += tens[tenPart];
            if (onePart > 0) {
                result += ' ' + ones[onePart];
            }
        }
    }

    return result.trim();
}
