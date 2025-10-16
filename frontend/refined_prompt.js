/**
 * Converts a given string to camelCase format.
 *
 * The function removes all non-letter characters except spaces, hyphens, and underscores,
 * then splits the string into words using these separators. The first word is converted
 * to lowercase, and subsequent words are capitalized and concatenated.
 *
 * Examples:
 *   stringToCamelCase('hello world')      // 'helloWorld'
 *   stringToCamelCase('foo-bar_baz')      // 'fooBarBaz'
 *   stringToCamelCase('FOO BAR')          // 'fooBar'
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If the input is not a string.
 * @throws {Error} If the input string is empty or contains only spaces.
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * The function removes all non-letter characters except spaces, hyphens, and underscores,
 * then splits the string into words using these separators. All words are converted to
 * lowercase and joined using dots.
 *
 * Examples:
 *   stringToDotCase('hello world')      // 'hello.world'
 *   stringToDotCase('foo-bar_baz')      // 'foo.bar.baz'
 *   stringToDotCase('FOO BAR')          // 'foo.bar'
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If the input is not a string.
 * @throws {Error} If the input string is empty or contains only spaces.
 */


function stringToCamelCase(input) {
    if (typeof input !== 'string') throw new Error('Input must be a string');
    // Remove non-letter characters except separators
    const cleaned = input.replace(/[^a-zA-Z\s-_]/g, '');
    // Split by space, hyphen, underscore
    const words = cleaned.split(/[\s-_]+/).filter(Boolean);
    if (words.length === 0) throw new Error('Input string is empty or contains only spaces');
    return words
        .map((word, idx) =>
            idx === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}


function stringToDotCase(input) {
    if (typeof input !== 'string') throw new Error('Input must be a string');
    // Remove non-letter characters except separators
    const cleaned = input.replace(/[^a-zA-Z\s-_]/g, '');
    // Split by space, hyphen, underscore
    const words = cleaned.split(/[\s-_]+/).filter(Boolean);
    if (words.length === 0) throw new Error('Input string is empty or contains only spaces');
    return words.map(word => word.toLowerCase()).join('.');
}


