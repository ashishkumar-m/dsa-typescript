import { removeElement } from './remove-element';

describe('removeElement', () => {

    // Helper function to make the tests cleaner
    // We verify the returned length and ensure the modified portion matches the expected remaining elements.
    const verify = (input: number[], val: number, expectedOutput: number[], expectedLength: number) => {
        const nums = [...input];
        const result = removeElement(nums, val);
        expect(result).toBe(expectedLength);
        expect(nums.slice(0, result)).toEqual(expectedOutput);
    };

    // --- EDGE CASES ---

    it('1. should handle an empty array', () => {
        verify([], 3, [], 0);
    });

    it('2. should handle a single element array where the element matches val', () => {
        verify([1], 1, [], 0);
    });

    it('3. should handle a single element array where the element does not match val', () => {
        verify([1], 2, [1], 1);
    });

    // --- UNIFORM ARRAYS ---

    it('4. should handle an array containing only the element to remove', () => {
        verify([2, 2, 2, 2], 2, [], 0);
    });

    it('5. should handle an array where the element to remove is not present at all', () => {
        verify([1, 2, 3, 4, 5], 9, [1, 2, 3, 4, 5], 5);
    });

    // --- PLACEMENT OF TARGET ELEMENT ---

    it('6. should handle when all matching elements are grouped at the beginning', () => {
        verify([3, 3, 1, 2, 4], 3, [1, 2, 4], 3);
    });

    it('7. should handle when all matching elements are grouped at the end', () => {
        verify([1, 2, 4, 3, 3], 3, [1, 2, 4], 3);
    });

    // --- STANDARD / MIXED CASES ---

    it('8. should handle a standard case with scattered occurrences of the target element', () => {
        verify([3, 2, 2, 3], 3, [2, 2], 2);
    });

    it('9. should handle a larger mixed array with multiple occurrences of the target', () => {
        verify([0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 1, 3, 0, 4], 5);
    });

    // --- NEGATIVE AND ZERO VALUE CASES ---

    it('10. should handle negative numbers and zero values correctly', () => {
        verify([-1, 0, -2, -1, 3], -1, [0, -2, 3], 3);
    });

});
