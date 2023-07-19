import { Palindrome } from "../Palindrome";

describe('Palindrome', ()=> {
    test.each([
        ["madam", true],
        ["car", false]
    ])("when the input is '%s'", (text: string, expected: boolean)=> {
        expect(Palindrome(text)).toBe(expected);
    });
});