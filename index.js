function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

