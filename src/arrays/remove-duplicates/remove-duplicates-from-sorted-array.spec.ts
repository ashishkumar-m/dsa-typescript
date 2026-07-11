import { removeDuplicates } from './remove-duplicates-from-sorted-array';

describe('removeDuplicates', () => {

    // Helper function to make the tests cleaner
    // We only care about the elements up to the returned length 'k'
    const verify = (input: number[], expectedOutput: number[], expectedLength: number) => {
        const result = removeDuplicates(input);
        expect(result).toBe(expectedLength);
        expect(input.slice(0, result)).toEqual(expectedOutput);
    };

    // --- EDGE CASES ---

    it('1. should handle an empty array', () => {
        verify([], [], 0);
    });

    it('2. should handle an array with a single element', () => {
        verify([5], [5], 1);
    });

    // --- UNIFORM ARRAYS ---

    it('3. should handle an array where all elements are the same', () => {
        verify([2, 2, 2, 2, 2], [2], 1);
    });

    it('4. should handle an array that already has no duplicates', () => {
        verify([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 5);
    });

    // --- STANDARD CASES ---

    it('5. should handle standard mixed duplicates', () => {
        verify([1, 1, 2], [1, 2], 2);
    });

    it('6. should handle longer arrays with multiple duplicate groups', () => {
        verify(
            [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
            [0, 1, 2, 3, 4],
            5
        );
    });

    // --- PLACEMENT OF DUPLICATES ---

    it('7. should handle duplicates grouped only at the beginning', () => {
        verify([1, 1, 1, 2, 3], [1, 2, 3], 3);
    });

    it('8. should handle duplicates grouped only at the end', () => {
        verify([1, 2, 3, 3, 3], [1, 2, 3], 3);
    });

    // --- DIFFERENT NUMBER TYPES (Integers) ---

    it('9. should handle negative numbers correctly', () => {
        verify([-5, -5, -1, 0, 0, 3], [-5, -1, 0, 3], 4);
    });

    it('10. should handle large gaps between numbers', () => {
        verify([10, 10, 100, 1000, 1000], [10, 100, 1000], 3);
    });

});