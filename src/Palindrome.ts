export const Palindrome = (word: string) => {
    const reverseWord = word.split('').reverse().join('');
    return reverseWord === word ? true : false
}