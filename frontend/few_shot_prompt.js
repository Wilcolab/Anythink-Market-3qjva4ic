function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+/g, ' ') // Replace separators with space
        .trim()
        .split(' ')
        .map((word, i) => {
            word = word.toLowerCase();
            if (i === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Examples:
// toCamelCase('first name')      // 'firstName'
// toCamelCase('user_id')         // 'userId'
// toCamelCase('SCREEN_NAME')     // 'screenName'
// toCamelCase('mobile-number')   // 'mobileNumber'