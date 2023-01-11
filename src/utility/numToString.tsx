const commafy = (src: number, decimalDot: number = 2): string => {
    // src를 3간격으로 ','를 추가하고 decimalDot 만큼의 소숫점 자리를 가지는 문자열을 출력합니다.
    var str:Array<string> = src.toString().split('.');

    if (str[0].length > 3) {
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    if (decimalDot == 0) return str[0];
    
    if (str[1] && str[1].length >= decimalDot) {
        str[1] = str[1].slice(0,decimalDot);
    }
    else if (str[1] && str[1].length < decimalDot) {
        str[1] = ''.concat(str[1], '0'.repeat(decimalDot - str[1].length));
    }
    else if (decimalDot > 0) {
        str.push('0'.repeat(decimalDot));
    }
    return str.join('.');
}

export { commafy };